import ServicePage from "../global/ServicePage";
const Remodelacion = () => {

  const remodelacion = {
    mainTitle: "Remodelación de Oficinas Modernas, Consultorios y Locales Comerciales",
    carouselImgsSrcs: [
      "/static/services/remodelacion/tec13.jpg",
      "/static/services/remodelacion/tec28.webp",
    ],
    mainText:
      "En nuestro servicio de remodelación, trabajamos de la mano con nuestros clientes para transformar sus espacios comerciales en ambientes atractivos y funcionales. Nos especializamos en la remodelación de oficinas modernas, consultorios y locales comerciales, con el objetivo de crear espacios únicos y personalizados que se adapten a las necesidades y deseos específicos de los usuarios.",
    subtitle: "Nuestros Servicios",
    sections: [
      {
        title: "1. Diseño - Distribución de ambientes",
        description:
          "Cada proyecto requiere un enfoque único y personalizado, adaptado a las necesidades y deseos específicos de los usuarios y al contexto en el que se encuentra el espacio.",
          imageUrl: "/static/services/remodelacion/tec42.webp",
        orientation: "left",
      },
      {
        title: "2. Sistema eléctrico y plano de iluminación",
        description:
          "Son elementos fundamentales para garantizar un entorno de trabajo seguro, funcional y bien iluminado.",
          imageUrl: "/static/services/remodelacion/tec14.jpg",
        orientation: "right",
      },
      {
        title: "3. Sistema de voz y datos",
        description:
          "Es crucial considerar los sistemas de voz y datos para asegurar una infraestructura de comunicaciones eficiente.",
          imageUrl: "/static/services/remodelacion/tec35.jpg",
        orientation: "left",
      },
      {
        title: "4. Sistema de construcción livianos",
        description:
          "Es una excelente opción por su versatilidad, facilidad de instalación y menor carga estructural, como paredes y tumbados de gypsum – drywall, paneles de madera y aluminio compuesto, etc.",
          imageUrl: "/static/services/remodelacion/tec16.jpg",
        orientation: "right",
      },
      {
        title: "5. Mamparas, puertas y ventanas de aluminio y vidrio",
        description:
          "Son elementos comunes utilizados en remodelaciones debido a su apariencia moderna, durabilidad y capacidad para maximizar la entrada de luz natural.",
          imageUrl: "/static/services/remodelacion/tec36.jpg",
        orientation: "left",
      },
      {
        title: "6. Mobiliario para cada necesidad",
        description:
          "El mobiliario juega un papel importante para satisfacer las necesidades de cada espacio; pueden ser sillas, mesas, counters, puestos de trabajo, armarios, repisas, sofás, paneles divisorios, etc.",
          imageUrl: "/static/services/remodelacion/tec18.jpg",
        orientation: "right",
      },
      {
        title: "7. Variedad de elementos decorativos",
        description:
          "Desempeñan un parte fundamental para crear un ambiente atractivo y personalizado. Se debe asegurar que los elementos seleccionados se complementen entre sí y con el resto del diseño; pueden ser cortinas, persianas, alfombras, pisos flotantes, lámparas, plantas ornamentales, etc.",
          imageUrl: "/static/services/remodelacion/tec19.webp",
        orientation: "left",
      },
    ],
    callToActionText:
      "Nos ajustamos a tu presupuesto",
    callToActionBtn: "CONTÁCTANOS",
  };

  return(
    <ServicePage
      {...remodelacion}
    />
  )
};

export default Remodelacion;
