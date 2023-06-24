import ServicePage from "../global/ServicePage";

const Adecuacion = () => {
  const adecuacion = {
    mainTitle: "Adecuación de Espacios",
    carouselImgsSrcs: [
      "/static/services/adecuacion/tec32.webp",
      "/static/services/adecuacion/tec7.webp",
    ],
    mainText:
      "Si estás buscando realizar cambios menores y ajustes en un espacio existente, para adaptarlo a nuevas necesidades o funciones, nuestro servicio de adecuación de espacios es lo que necesitas. Este proceso es menos complejo y menos costoso que una remodelación completa, ya que no implica grandes cambios estructurales o de diseño.",
    subtitle: "Nuestros Servicios",
    sections: [
      {
        title: "1. Reorganización de los elementos existentes",
        description:
          "Cambiar la disposición de los muebles, estanterías, superficies de trabajo, equipos y otros elementos para mejorar la funcionalidad del espacio.",
          imageUrl: "/static/services/adecuacion/tec33.webp",
          orientation: "left",
      },
      {
        title: "2. Ajuste de las instalaciones eléctricas, de plomería o de climatización",
        description:
          "Realizar ajustes en las instalaciones existentes para mejorar su funcionamiento o para adaptarlos a nuevos requisitos.",
          imageUrl: "/static/services/adecuacion/tec9.webp",
          orientation: "right",
      },
      {
        title: "3. Cambio de acabados",
        description:
          "Incluir la pintura de paredes, la instalación de nuevos pisos, la sustitución de las puertas o la colocación de paneles acústicos.",
          imageUrl: "/static/services/adecuacion/tec10.webp",
          orientation: "left",
      },
      {
        title: "4. Incorporación de nuevos elementos",
        description:
          "Añadir nuevos elementos al espacio, como muebles, equipos o elementos decorativos que contribuyan a la funcionalidad y a la estética.",
          imageUrl: "/static/services/adecuacion/tec11.webp",
          orientation: "right",
      },
      {
        title: "5. Mejora de la iluminación",
        description:
          "Incluir la instalación de nuevas luminarias o nueva distribución de las mismas. También aprovechar la iluminación natural del espacio.",
          imageUrl: "/static/services/adecuacion/tec12.webp",
          orientation: "left",
      },
    ],
    callToActionText: "Estamos listos para ayudarte",
    callToActionBtn: "CONTÁCTANOS",
  };
  return (
    <ServicePage
      {...adecuacion}
    />
  );
};

export default Adecuacion;
