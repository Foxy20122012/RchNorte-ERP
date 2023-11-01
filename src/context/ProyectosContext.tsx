import { createContext, useState, useContext } from "react";
import { CreateProyecto, UpdateProyecto } from "@/interfaces/Proyectos"; // Importa los tipos para Proyectos
import { proyectos } from "@prisma/client"; // Importa el tipo Proyecto


export const ProyectosContext = createContext<{
    proyectos: proyectos[];
    loadProyectos: () => Promise<void>;
    createProyectos: (proyecto: CreateProyecto) => Promise<void>;
    deleteProyectos: (id: number) => Promise<void>;
    selectedProyectos: proyectos | null;
    setSelectedProyectos: (proyecto: proyectos | null) => void;
    updateProyectos: (id: number, proyecto: UpdateProyecto) => Promise<void>;
  }>({
    proyectos: [],
    loadProyectos: async () => {},
    createProyectos: async (proyecto: CreateProyecto) => {},
    deleteProyectos: async (id: number) => {},
    selectedProyectos: null,
    setSelectedProyectos: (proyecto: proyectos | null) => {},
    updateProyectos: async (id: number, proyecto: UpdateProyecto) => {},
  });
  
  export const useProyectos = () => {
    const context = useContext(ProyectosContext);
    if (!context) {
      throw new Error("useProyects must be used within a ClientesProvider");
    }
    return context;
  };
  
  export const ProyectosProvider = ({ children }: { children: React.ReactNode }) => {
    const [proyectos, setProyectos] = useState<proyectos[]>([]);
    const [selectedProyectos, setSelectedProyectos] = useState<proyectos | null>(null);
  
    async function loadProyectos() {
      const res = await fetch("/api/proyectos"); // Asegúrate de tener un endpoint correcto para cargar los clientes
      const data = await res.json();
      setProyectos(data);
    }
  
    async function createProyectos(proyecto: CreateProyecto) {
      const res = await fetch("/api/proyectos", {
        method: "POST",
        body: JSON.stringify(proyecto),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newProyecto = await res.json();
      setProyectos([...proyectos, newProyecto]);
    }
  
    async function deleteProyectos(id: number) {
      const res = await fetch("/api/proyectos/" + id, {
        method: "DELETE",
      });
      const data = await res.json();
      setProyectos(proyectos.filter((proyecto) => proyecto.id !== id));
    }
  
    async function updateProyectos(id: number, proyecto: UpdateProyecto) {
      const res = await fetch("/api/proyectos/" + id, {
        method: "PUT",
        body: JSON.stringify(proyecto),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setProyectos(proyectos.map((proyecto) => (proyecto.id === id ? data : proyecto)));
    }
  
    return (
      <ProyectosContext.Provider
        value={{
          proyectos,
          loadProyectos,
          createProyectos,
          deleteProyectos,
          selectedProyectos,
          setSelectedProyectos,
          updateProyectos,
        }}
      >
        {children}
      </ProyectosContext.Provider>
    );
  };
  
  