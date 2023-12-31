const clientesProps = [
  {
    label: "Nombre",
    name: "nombre",
    type: "text",
    required: true,
    maxLength: 50, // Agrega una longitud máxima
    minLength: 3, // Agrega una longitud mínima
  },
  {
    label: "Dirección",
    name: "direccion",
    type: "text",
    required: true,
  },
  {
    label: "Teléfono",
    name: "telefono",
    type: "tel", // Utiliza el tipo "tel" para números de teléfono
    required: true,
    maxLength: 12,
    minLength: 8,
  },
  {
    label: "Correo Electrónico",
    name: "correo_electronico",
    type: "email", // Utiliza el tipo "email" para direcciones de correo electrónico
    required: true,
  },
  {
    label: "Historial de Compras",
    name: "historial_compras",
    type: "text",
    required: true,
  },
  {
    label: "nombre_empresa",
    name: "nombre_empresa",
    type: "text",
    required: true,
  },  {
    label: "titulo_encargado",
    name: "titulo_encargado",
    type: "text",
    required: true,
  },
];

export default clientesProps;
