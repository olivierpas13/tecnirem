import ServicePage from "./global/ServicePage";

const Styles = () => {

    const estilo = {
        mainTitle: "Estilos de oficinas",
        carouselImgsSrcs: [
          "/static/styles/tec43.jpg",
          "/static/styles/tec44.jpg",
        ],
        mainText:
          "La elección del estilo debe estar en línea con los objetivos de la empresa, la cultura y sus valores; principalmente debe estar enfocado a las necesidades de los empleados para crear un ambiente de trabajo eficiente y productivo.",
        subtitle: "¿Qué estilo te gustaría?",
        sections: [
          {
            title: "Moderno y minimalista",
            description:
              "Este estilo se basa en líneas limpias y minimalistas, con colores claros y neutros como el blanco, el gris y el negro. Las paredes pueden ser de vidrio o estar abiertas para fomentar la colaboración y la comunicación entre los miembros del equipo. Los materiales comúnmente utilizados incluyen metal, vidrio y plástico.",
            imageUrl: "/static/styles/tec20.jpg",
            orientation: "left",
          },
          {
            title: "Industrial",
            description:
              "Se inspira en las fábricas y los almacenes, con elementos como paredes de ladrillo expuesto, tuberías y vigas metálicas. Los colores pueden ser oscuros y neutros, como el negro, el gris y el marrón. Se pueden utilizar muebles y accesorios de madera y metal para completar el aspecto.",
            imageUrl: "/static/styles/tec21.jpg",
            orientation: "right",
          },
          {
            title: "Biofílico",
            description:
              "Este estilo es una forma de diseño que incorpora elementos naturales en el espacio de trabajo, como luz natural, plantas y vegetación, elementos acuáticos, madera, piedras, cuero, etc. Se enfoca en crear un espacio de trabajo que sea más saludable y productivo para los empleados. Ayuda a reducir el estrés y mejorar la creatividad y concentración.",
            imageUrl: "/static/styles/tec22.jpg",
            orientation: "left",
          },
          {
            title: "Clásico",
            description:
              "Se enfoca en la elegancia y la sofisticación. Los colores pueden ser ricos y oscuros, como el marrón, el verde oscuro y el burdeos. Los materiales utilizados incluyen madera de alta calidad, mármol y cuero.",
            imageUrl: "/static/styles/tec23.jpg",
            orientation: "right",
          },
          {
            title: "Temático",
            description:
              "Este estilo se orienta en una temática específica, como una época histórica o una región geográfica. Por ejemplo, se puede decorar las oficinas con un estilo colonial o con un estilo inspirado en la cultura japonesa. Este estilo puede ser creativo y personalizado para reflejar la identidad y los valores de la empresa.",
            imageUrl: "/static/styles/tec24.jpg",
            orientation: "left",
          },
          {
            title: "Low cost",
            description:
              "Se refiere a la búsqueda de soluciones económicas y rentables para renovar y actualizar el espacio de trabajo sin incurrir en grandes gastos. No significa que debas sacrificar la calidad o la funcionalidad, con un poco de creatividad y planificación cuidadosa, es posible lograr una remodelación de oficina económica y atractiva.",
            imageUrl: "/static/styles/tec45.jpg",
            orientation: "right",
          },
        ],
        callToActionText:
        "Nos ajustamos a tu presupuesto",
      callToActionBtn: "CONTÁCTANOS",
      };
      

    return (
        <ServicePage
            {...estilo}
        />
    );
}
 
export default Styles;