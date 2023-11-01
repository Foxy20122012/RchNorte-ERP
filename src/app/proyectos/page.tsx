'use client'
import React, { useEffect, useState } from "react";
import { proyectos} from "@prisma/client";
import DataTable from "@/components/DataTable";
import { useProyectos } from "@/context/ProyectosContext";
import Modal from "@/components/Modal";
import SuccessModal from "@/components/SuccessModal";
import { transformProyectosToRows, proyectosColumns } from "@/models/proyectosModel";
import DynamicForm from "@/components/DynamicForm";
import proyectosProps from "@/models/proyectosProps";
import useHasMounted from "@/hooks/useHasMounted";
import Loading from "@/components/Loading";
import BtnAppBar from "@/components/appBar";
import { useSession } from "next-auth/react";

const columns = (
    Object.keys(proyectosColumns) as (keyof proyectos)[]
  ).map((key) => ({ key, label: proyectosColumns[key] }));

function ProyectosPage() {
  const {
    proyectos,
    loadProyectos,
    createProyectos,
    deleteProyectos,
    selectedProyectos,
    setSelectedProyectos,
    updateProyectos,
  } = useProyectos();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [ProyectoToDelete, setProyectoToDelete] = useState<proyectos | null>(null);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState<boolean>(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { data: session, status } = useSession();
  console.log(session, status);
  
  useEffect(() => {
    loadProyectos();
  }, []);

  const openDeleteModal = (proyecto: proyectos) => {
    setProyectoToDelete(proyecto);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setProyectoToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleEditProyectos = (proyecto: proyectos) => {
    setSelectedProyectos(proyecto);
    setIsFormVisible(true);
  };

  const handleDelete = (proyecto: proyectos) => {
    openDeleteModal(proyecto);
  };

  const handleNewClick = () => {
    setSelectedProyectos(null);
    setIsFormVisible(true);
  };

  const handleCreateOrUpdateProyectos = async (formData: any) => {
    try {
      if (selectedProyectos) {
        // Estás editando un proyecto existente
        await updateProyectos(selectedProyectos.id, formData);
      } else {
        // Estás creando un nuevo proyecto
        await createProyectos(formData);
      }
      setIsFormVisible(false);
      setSelectedProyectos(null);
      loadProyectos();
    } catch (error) {
      console.error("Error al crear o actualizar el proyecto:", error);
    }
  };

  const handleUpdateClick = async (formData: any) => {
    try {
      if (selectedProyectos) {
        // Estás editando un proyecto existente
        await updateProyectos(selectedProyectos.id, formData); // Envía los datos actualizados al servidor
      }
      setIsFormVisible(false);
      setSelectedProyectos(null);
      loadProyectos();
    } catch (error) {
      console.error("Error al actualizar el proyecto:", error);
    }
  };

  const rowsProyectos = transformProyectosToRows(proyectos);

  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return <Loading />;
  }

  return (
    <div>
      <BtnAppBar/>
      <div>
        <DataTable
          title={"Proyectos"}
          data={rowsProyectos}
          columns={columns}
          onEdit={handleEditProyectos}
          onDelete={handleDelete}
          onNew={handleNewClick}
        />
        <Modal
          isOpen={isDeleteModalOpen}
          title="Confirmar Eliminación"
          message={`¿Estás seguro de que deseas eliminar el Proyecto ${ProyectoToDelete?.nombre}?`}
          onConfirm={async () => {
            try {
              if (ProyectoToDelete) {
                await deleteProyectos(ProyectoToDelete.id);
                closeDeleteModal();
                setIsDeleteSuccess(true);
                loadProyectos();
              }
            } catch (error) {
              console.error("Error al eliminar el proyecto:", error);
            }
          }}
          onCancel={closeDeleteModal}
          onUpdate={handleUpdateClick}
          showUpdateButton={false}
          showConfirmButton={true}
        />
        <SuccessModal
          isOpen={isDeleteSuccess}
          onClose={() => setIsDeleteSuccess(false)}
          message="El Proyecto se ha eliminado correctamente."
          buttonText="Aceptar"
        />

        <Modal
          isOpen={isFormVisible}
          title={
            selectedProyectos
              ? "Editar Proyecto"
              : "Nuevo Proyecto"
          }
          onCancel={() => {
            setIsFormVisible(false);
            setSelectedProyectos(null);
          }}
          showCancelButton={true}
          showConfirmButton={false}
          showUpdateButton={false}
          onConfirm={handleCreateOrUpdateProyectos}
        >
          <DynamicForm
            formProps={proyectosProps}
            onSubmit={handleCreateOrUpdateProyectos}
            showCreateButton={!selectedProyectos}
            showUpdateButton={!!selectedProyectos}
            initialFormData={selectedProyectos}
            onUpdateClick={handleUpdateClick}
            columns={2}
          />
        </Modal>
      </div>
    </div>
  );
}

export default ProyectosPage;
