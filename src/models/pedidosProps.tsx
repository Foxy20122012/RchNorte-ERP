import { FaCircle, FaCog, FaCheck } from 'react-icons/fa';

const pedidosProps = [
  {
    label: "ID",
    name: "id",
    type: "number",
    readOnly: true,
  },
  {
    label: "Estado de Pedido", 
    name: "estado_pedido",
    type: "select",
    options: [
      { value: "SinInformacion", label: "Sin Información", icon: <FaCircle /> }, 
      { value: "Pendiente", label: "Pendiente", icon: "‼️" },
      { value: "EnProgreso", label: "En Progreso", icon: "❔" },
      { value: "Completado", label: "Completado", icon: "✅" },
      { value: "Incompleto", label: "Incompleto", icon: "❌" },
    ],
  },
  {
    label: "Código de Pedido",
    name: "codigo_pedido",
    type: "text", // Puedes ajustar el tipo según tus necesidades
  },
  {
    label: "Tipo de Pago",
    name: "tipo_pago",
    type: "select", // Puedes ajustar el tipo según tus necesidades
    options: [
      { value: "Sin Informacion", label: "  ", icon: "⬜"}, 
      { value: "Efectivo", label: "Efectivo", icon: "💵" },
      { value: "Tarjeta", label: "Tarjeta", icon: "💳" }, // Asegúrate de que esto esté en la posición 0
    ],
  },
  {
    label: "Dirección de Envío",
    name: "direccion_envio",
    type: "textarea", // Cambiado a "textarea" para campos de texto largos
  },
  {
    label: "Código de Venta",
    name: "codigo_venta",
    type: "text", // Puedes ajustar el tipo según tus necesidades
  },
];

export default pedidosProps;

