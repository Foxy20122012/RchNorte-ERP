import { Pedidos as PedidosPrisma } from "@prisma/client";

export type Pedidos = PedidosPrisma;

export type Row = {
  id: number;
  estado_pedido: string | null;
  detalles_pedido: string | null;
  codigo_pedido: string | null;
};

export const transformPedidosToRows = (pedidos: Pedidos[]): Row[] => {
  return pedidos.map((pedido) => ({
    id: pedido.id,
    estado_pedido: pedido.estado_pedido || "",
    detalles_pedido: pedido.detalles_pedido || "",
    codigo_pedido: pedido.codigo_pedido || "",
  }));
};

export type PedidosModel = keyof Row;

export const pedidosColumns: Record<PedidosModel, string> = {
  id: "ID",
  estado_pedido: "Estado de Pedido",
  detalles_pedido: "Detalles de Pedido",
  codigo_pedido: "Código de Pedido",
};
