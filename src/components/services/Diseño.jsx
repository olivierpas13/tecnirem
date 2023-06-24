import ServicePage from "../global/ServicePage";

const Diseño = () => {
  const diseño = {
    mainTitle: "Diseño de Espacios",
    carouselImgsSrcs: [
      "/static/services/diseño/tec41.webp",
      "/static/services/diseño/tec1.webp",
    ],
    mainText:
      "En nuestro servicio de diseño de espacios, trabajamos de la mano con nuestros clientes para transformar sus espacios comerciales en ambientes atractivos y funcionales. Nos especializamos en el diseño de oficinas modernas, consultorios y locales comerciales, con el objetivo de crear espacios únicos y a medida para cada cliente. Con nuestra amplia experiencia en el diseño de interiores, podemos ayudarlo a dar vida a su visión y crear un espacio que refleje la personalidad y el carácter de su negocio.",
    subtitle: "¿Cómo lo hacemos?",
    sections: [
      {
        title: "Análisis del espacio existente",
        description:
          "Esto implica evaluar las características del espacio, incluyendo la distribución, la iluminación, los materiales de construcción, altura del techo, etc.",
        imageUrl: "/static/services/diseño/tec2.webp",
        orientation: "left",
      },
      {
        title: "Identificación de las necesidades",
        description:
          "Se debe analizar los requerimientos del usuario o del propietario del espacio, incluyendo las funciones que el espacio debe cumplir, el estilo deseado y cualquier requisito especial.",
          imageUrl: "/static/services/diseño/tec3.webp",
          orientation: "right",
      },
      {
        title: "Creación de un plan",
        description:
          "En función del análisis del espacio existente y de las necesidades identificadas, se crea un plan que incluye el diseño del espacio, la selección de materiales, acabados y mobiliario.",
          imageUrl: "/static/services/diseño/tec4.webp",
          orientation: "left",
      },
      {
        title: "Representación gráfica",
        description:
          "El diseño puede incluir representaciones gráficas, como planos en 2D o 3D, para mostrar cómo se verá el espacio una vez terminado.",
          imageUrl: "/static/services/diseño/tec5.webp",
          orientation: "right",
      },
      {
        title: "Revisión y aprobación",
        description:
          "Una vez que se ha creado el diseño, se presenta al propietario o al usuario para su revisión y aprobación. Si se necesitan cambios, se realizan ajustes y se vuelve a presentar el diseño para su aprobación final.",
          imageUrl: "/static/services/diseño/tec6.webp",
          orientation: "left",
      },
    ],
    callToActionText: "Nos ajustamos a tu presupuesto",
    callToActionBtn: "CONTÁCTANOS",
  };

  return(
    <ServicePage
      {...diseño}
    />
  )
};

export default Diseño;
