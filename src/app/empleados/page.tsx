"use client";
import React, { useEffect, useState } from "react";
import { Empleados } from "@prisma/client";
import DataTable from "@/components/DataTable";
import { useEmpleados } from "@/context/EmpleadosContext";
import { empleadosColumns } from "@/models/empleadosModel";
import Modal from "@/components/Modal";
import SuccessModal from "@/components/SuccessModal";
import { transformEmpleadosToRows } from "@/models/empleadosModel";
import DynamicForm from "@/components/DynamicForm";
import empleadosProps from "@/models/empleadosProps";
import useHasMounted from "@/hooks/useHasMounted";
import Loading from "@/components/Loading";
import CountTag from "@/components/CountTag";
import { FaHeart } from "react-icons/fa";
import CustomTabs from "@/components/CustomTabs";
import tabContent from "@/models/tabsListEmpleados";

const columns = (Object.keys(empleadosColumns) as (keyof Empleados)[]).map(
  (key) => ({ key, label: empleadosColumns[key] })
);

function EmpleadosPage() {
  const {
    empleados,
    createEmpleado,
    loadEmpleados,
    deleteEmpleado,
    selectedEmpleado,
    setSelectedEmpleado,
    updateEmpleado,
  } = useEmpleados();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [empleadoToDelete, setEmpleadoToDelete] = useState<Empleados | null>(null);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState<boolean>(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const rowsEmpleados = transformEmpleadosToRows(empleados);

  useEffect(() => {
    loadEmpleados();
  }, []);

  const openDeleteModal = (empleado: Empleados) => {
    setEmpleadoToDelete(empleado);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setEmpleadoToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleEditEmpleado = (empleado: Empleados) => {
    setSelectedEmpleado(empleado);
    setIsFormVisible(true);
  };

  const handleDelete = (empleado: Empleados) => {
    openDeleteModal(empleado);
  };

  const handleNewClick = () => {
    setSelectedEmpleado(null);
    setIsFormVisible(true);
  };

  const handleCreateOrUpdateEmpleado = async (formData: any) => {
    try {
      if (selectedEmpleado) {
        // Estás editando un empleado existente
        await updateEmpleado(selectedEmpleado.id, formData);
      } else {
        // Estás creando un nuevo empleado
        await createEmpleado(formData);
      }
      setIsFormVisible(false);
      setSelectedEmpleado(null);
      loadEmpleados();
    } catch (error) {
      console.error("Error al crear o actualizar el empleado:", error);
    }
  };

  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return <Loading />;
  }
  return (
    <div>
      <div>
        <DataTable
          title={"Empleados"}
          // @ts-ignore
          data={rowsEmpleados}
          columns={columns}
           // @ts-ignore
          onEdit={handleEditEmpleado}
           // @ts-ignore
          onDelete={handleDelete}
          onNew={handleNewClick}
        />
        
        <Modal
          isOpen={isDeleteModalOpen}
          title="Confirmar Eliminación"
          message={`¿Estás seguro de que deseas eliminar al empleado ${empleadoToDelete?.nombre}?`}
          onConfirm={async () => {
            try {
              if (empleadoToDelete) {
                await deleteEmpleado(empleadoToDelete.id);
                closeDeleteModal();
                setIsDeleteSuccess(true);
                loadEmpleados();
              }
            } catch (error) {
              console.error("Error al eliminar el empleado:", error);
            }
          }}
          onCancel={closeDeleteModal}
        />
        <SuccessModal
          isOpen={isDeleteSuccess}
          onClose={() => setIsDeleteSuccess(false)}
          message="El empleado se ha eliminado correctamente."
          buttonText="Aceptar"
        />

        <Modal
          isOpen={isFormVisible}
          title={selectedEmpleado ? "Editar Empleado" : "Nuevo Empleado"}
          onCancel={() => {
            setIsFormVisible(false);
            setSelectedEmpleado(null);
          }}
          onConfirm={handleCreateOrUpdateEmpleado}
        >
          <DynamicForm
            formProps={empleadosProps}
            onSubmit={handleCreateOrUpdateEmpleado}
            showCreateButton={!selectedEmpleado}
            showUpdateButton={!!selectedEmpleado}
            initialFormData={selectedEmpleado}
            columns={1}
          />
        </Modal>

        <CountTag
          datos="Ventas totales"
          icon={<FaHeart />}
          value={12500}
          theme="green"
          title="Resumen de ventas"
        />

        <div className="flex justify-center items-center">
          <CustomTabs tabs={tabContent} />
        </div>
      </div>
    </div>
  );
}

export default EmpleadosPage;
