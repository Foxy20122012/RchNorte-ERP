import { proyectos as ProyectosPrisma } from "@prisma/client";

export type Proyecto = ProyectosPrisma; // Exporta el tipo Proyecto

export type Row = {
  id: number;
  nombre: string;
  lugar_realizacion: string;
  costo_proyecto: number;
  encargado: string;
  area_proyecto: string;
  tiempo_meses: string;
  cantidad_trabajadores: string;
};

export const transformProyectosToRows = (proyectos: Proyecto[]): Row[] => {
    // @ts-ignore
  return proyectos.map((proyecto) => ({
    id: proyecto.id,
    nombre: proyecto.nombre || "", // Proporciona un valor predeterminado en caso de ser null
    lugar_realizacion: proyecto.lugar_realizacion || "",
    costo_proyecto: proyecto.costo_proyecto || 0, // Proporciona 0 como valor predeterminado
    encargado: proyecto.encargado || "",
    area_proyecto: proyecto.area_proyecto || "",
    tiempo_meses: proyecto.tiempo_meses || "", // Proporciona 0 como valor predeterminado
    cantidad_trabajadores: proyecto.cantidad_trabajadores || "", // Proporciona 0 como valor predeterminado
  }));
};

export type ProyectosModel = keyof Row;

export const proyectosColumns: Record<ProyectosModel, string> = {
  id: "ID",
  nombre: "Nombre",
  lugar_realizacion: "Lugar de Realización",
  costo_proyecto: "Costo del Proyecto",
  encargado: "Encargado",
  area_proyecto: "Área del Proyecto",
  tiempo_meses: "Tiempo en Meses",
  cantidad_trabajadores: "Cantidad de Trabajadores",
};
