const proyectosProps = [
    {
      label: "Nombre",
      name: "nombre",
      type: "text",
      required: true,
      maxLength: 255, // Máxima longitud permitida
      minLength: 1, // Mínima longitud permitida
    },
    {
      label: "Lugar de Realización",
      name: "lugar_realizacion",
      type: "text",
      maxLength: 255, // Máxima longitud permitida
    },
    {
      label: "Costo del Proyecto",
      name: "costo_proyecto",
      type: "number",
      min: 0, // Valor mínimo permitido
      max: 9999999.99, // Valor máximo permitido
    },
    {
      label: "Encargado",
      name: "encargado",
      type: "text",
      maxLength: 255, // Máxima longitud permitida
    },
    {
      label: "Área del Proyecto",
      name: "area_proyecto",
      type: "text",
      maxLength: 255, // Máxima longitud permitida
    },
    {
      label: "Tiempo en Meses",
      name: "tiempo_meses",
      type: "text",
      min: 0, // Valor mínimo permitido
    },
    {
      label: "Cantidad de Trabajadores",
      name: "cantidad_trabajadores",
      type: "text",
      min: 0, // Valor mínimo permitido
    },
  ];
  
  export default proyectosProps;
  