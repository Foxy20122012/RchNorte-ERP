import { FaCircle, FaCog, FaCheck } from 'react-icons/fa';

const ventasProps = [
  {
    label: "ID",
    name: "id",
    type: "number",
    readOnly: true,
  },
  {
    label: "Monto Total",
    name: "monto_total",
    type: "number",
    step: 0.01, // Define el paso para los números decimales, si es aplicable
  },
  {
    label: "Método de Pago",
    name: "metodo_pago",
    type: "select",
    options: [
      { value: "Sin Informacion", label: "  ", icon: "⬜"}, 
      { value: "Efectivo", label: "Efectivo", icon: "💵" },
      { value: "Tarjeta", label: "Tarjeta", icon: "💳" }, // Asegúrate de que esto esté en la posición 0
    ],
    maxLength: 100,
  },
  {
    label: "Estado de la Venta",
    name: "estado_pedido",
    type: "select",
    options: [
      { value: "Sin Informacion", label: "  ", icon: "⬜"}, 
      { value: "Pendiente", label: "Pendiente", icon: "‼️" }, // Asegúrate de que esto esté en la posición 0
      { value: "EnProgreso", label: "En Progreso", icon: "❔" }, // Luego sigue con las demás opciones
      { value: "Completado", label: "Completado", icon: "✅" },
      { value: "Incompleto", label: "Incompleto", icon: "❌" },
    ],
    maxLength: 50,
  },
  {
    label: "Descripción",
    name: "descripcion",
    type: "select", // Utiliza "textarea" para campos de texto largos
    options: [
      { value: "SinInformacion", label: "Sin Información", icon: "⬜" }, // Opción para registros incompletos
      { value: "VentaMayoreo", label: "Venta al Mayoreo",  },
      { value: "VentaSimple", label: "Venta Simple"},
      { value: "PrestacionServicios", label: "Prestación de Servicios" },
      { value: "VentaMateriales", label: "Venta de Materiales" },
      { value: "AlquilerServicios", label: "Alquiler de Servicios"},
      { value: "OtraTransaccion", label: "Otra Transacción"},
    ],
  },
  {
    label: "Código de Materia",
    name: "codigo_materia",
    type: "text",
    maxLength: 255,
  },
];

export default ventasProps;
