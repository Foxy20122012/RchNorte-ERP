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
      { value: "Sin Informacion", label: "  ", icon: <FaCircle /> }, 
      { value: "Pendiente", label: "Pendiente", icon: <FaCircle /> }, // Asegúrate de que esto esté en la posición 0
      { value: "EnProgreso", label: "En Progreso", icon: <FaCog /> }, // Luego sigue con las demás opciones
      { value: "Completado", label: "Completado", icon: <FaCheck /> },
      { value: "Incompleto", label: "Incompleto", icon: <FaCheck /> },
    ],
  },
  {
    label: "Detalles de Pedido",
    name: "detalles_pedido",
    type: "text",
  },
];

export default pedidosProps;
