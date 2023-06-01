import React, { useEffect, useState, useRef } from "react";
import Title from "./Title";
import learnerImage from "../icons/Daniela.jpeg";
import learnerImage2 from "../icons/Moisés.jpeg";
import learnerImage3 from "../icons/Eliseo.jpeg";
import learnerImage4 from "../icons/Diana.jpeg";
import learnerImage5 from "../icons/Tatiana.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  const data = {
    members: [
      {
        name: "Daniela Menéndez",
        bio: "Biografía: ",
        bioContent:
          "Soy Daniela Menéndez, nací el 22 de Junio de 2004 en San Salvador, El Salvador, tengo 18 años, soy soltera, tengo una hermana gemela, vivo en San Juan Opico, La libertad, tengo mucho interés en los deportes y dibujos, me encanta dibujar, participe en un curso de arte y pintura en 2019 en una escuela de San Juan Opico. Después de terminar el bachillerato, estaba indecisa de estudiar Diseño Grafico Publicitario ó Ingeniería y Sistemas, pero al final decidí estudiar Ingeniería y Sistemas, por que era algo nuevo para mi, me interesa bastante, y me gusta hacer cosas manuales, casi siempre hago las cosas por mi misma; así que dibujar y pintar se convirtió en mí hobby junto con los deportes; actualmente estoy en segundo año de la Universidad Francisco Gavidia.",
        skills: "Habilidades: ",
        skillsContent: "Dibujo y pintura, Deportes, Reparaciones de objetos, Instrumentos (Guitarra, Zampoña)",
        image: learnerImage,
      },
      {
        name: "Moisés Martínez",
        bio: "Biografía: ",
        bioContent: "Mi nombre es José Moisés, nací en San Salvador un 25 de diciembre del año 2002. Desde que nací he vivido en la colonia Monserrat perteneciente al departamento de San Salvador. Estudié de primero a sexto en una institución pública, hasta que mi madre regreso al país y tuve la oportunidad de entrar a una institución privada que es el Instituto Emiliani de esta forma graduándome en el año 2021 como técnico en especialidad en electrónica. En el año 2021 ingresé a la Universidad Francisco Gavidia cursando la carrera de Ingeniería en Ciencias de la Computación de la cual me encuentro cursando el segundo ciclo, teniendo fe que en un futuro lograr ejercer mi rol como ingeniero en ciencias de la computación ",
        skills: "Habilidades: ",
        skillsContent: "Conocimiento intermedio en el área de Electrónica, Conocimiento básico en desarrollo web, Manejo intermedio de paquete de Office, Mantenimiento de computadoras, Instalación de programas básicos en computadoras, Manejo básico de inglés, Conocimiento básico de JavaScript",
        image: learnerImage2,
      },
      {
        name: "Eliseo Flores",
        bio: "Biografía: ",
        bioContent: "Mi nombre es Guillermo Eliseo Flores Rodríguez, nací en San Salvador un 08 de marzo del año 2002. Desde mi niñez viví en el municipio de Apopa perteneciente al departamento de San Salvador. Estudié desde mi primer a tercer ciclo en el Colegio Carlos Pellicer y bachillerato en el Centro Cultural Salvadoreño Americano graduándome en el año 2020 como Asistente Técnico Bilingüe. En el año 2021 ingresé a la Universidad Francisco Gavidia cursando la carrera de Ingeniería en Ciencias de la Computación de la cual me encuentro cursando el cuarto ciclo, esperando ejercer a futuro en alguna rama relacionada a la computación.",
        skills: "Habilidades: ",
        skillsContent: "Manejo del idioma inglés en un nivel intermedio, Conocimiento de herramientas del Paquete Básico de Office",
        image: learnerImage3,
      },
      {
        name: "Diana Iraheta",
        bio: "Biografía: ",
        bioContent: "Soy Diana Iraheta, nací el 17 de marzo de 2003 en el hospital 1ro de mayo. Tengo 20 años vivo en San José Villanueva, La Libertad. Fui scout desde los 7-18 años y durante el tiempo que estuve me gustaba hacer servicios de ayuda comunitaria, como campañas de reciclaje y donaciones a asilos. Me gradué de bachillerato con inglés C2 y francés A2 y me gradué con honores. Actualmente curso la carrera de ingeniería en sistemas en mi tercer ciclo en la Universidad Francisco Gavidia.",
        skills: "Habilidades: ",
        skillsContent: "Capacitada con habilidades lingüísticas impresionantes en español nativo y un nivel avanzado de inglés. Además, también tengo habilidades básicas en francés que estoy constantemente mejorando a través de práctica y estudio. Tengo una gran facilidad para adaptarme a nuevos ambientes y situaciones, lo que me permite trabajar en diferentes entornos y situaciones sin problemas. Además, mi paciencia es una fortaleza que me permite mantener la calma en situaciones estresantes y trabajar de manera efectiva bajo presión. Soy un aprendiz rápido y siempre estoy dispuesto a aprender nuevas habilidades y adquirir nuevos conocimientos. Siempre me mantengo actualizado con las últimas tendencias y tecnologías de mi campo, lo que me permite ofrecer soluciones innovadoras y eficientes en mi trabajo.",
        image: learnerImage4,
      },
      {
        name: "Tatiana Menjivar",
        bio: "Biografía: ",
        bioContent: "Mi nombre es Tatiana Vanessa Menjivar Flores de 20 años de edad, nací el 17 de mayo de 2003 en el Hospital 1º de mayo, de nacionalidad salvadoreña y soltera, actualmente vivo en el departamento de San Salvador, municipio de Mejicanos, una de mis mayores aspiraciones es poder finalizar la carrera que estoy cursando la cual es Ingeniería en Ciencias de la Computación. Desde muy pequeña me gusta mucho el arte y la pintura, también patinar y jugar fútbol, en el Instituto Técnico Ricaldone, fui parte de la selección en dicho deporte, ganando un torneo a nivel colegial en el estadio Mágico Gonzales, me gradué con honores y fui parte del Concejo Estudiantil donde fui coordinadora de la comisión de Seguridad y Emergencia, actualmente estudio en la Universidad Francisco Gavidia la carrera antes mencionada, soy una persona pro activa, carismática, perseverante y respetuosa, mi objetivo es mejor siempre y claro, compartir de buenas amistades.",
        skills: "Habilidades: ",
        skillsContent: "Inglés intermedio, CCNA1, Técnico en Desarrollo de Software, Ofimática, Ortografía y caligrafía",
        image: learnerImage5,
      },
    ],
  };

  const [expanded, setExpanded] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 250 });
  }, []);

  useEffect(() => {
    adjustContainerHeight();
  }, [expanded]);

  const handleMemberClick = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
    setPopupOpen(true);
    document.body.classList.add("no-scroll");
    adjustContainerHeight();
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setExpanded(null);
    document.body.classList.remove("no-scroll");
    adjustContainerHeight();
  };

  const adjustContainerHeight = () => {
    const container = containerRef.current;
    if (container) {
      container.style.paddingBottom = expanded !== null ? `${container.offsetHeight}px` : "42%";
    }
  };

  return (
    <div className="about">
      <Title title="Conócenos" />
      <div className="main-ABOUT-container" ref={containerRef}>
        {data.members.map((member, index) => (
          <div
            className={`info-container ${expanded === index ? "selected" : ""}`}
            data-aos="fade-up-right"
            key={index}
            onClick={() => handleMemberClick(index)}
          >
            <div className="icon-cont">
              <img alt={member.name} src={member.image} />
            </div>
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>
      {popupOpen && (
        <div className="popup">
          <h3>{data.members[expanded].name}</h3>
          <p>
            <strong>{data.members[expanded].bio}</strong>
            {data.members[expanded].bioContent}
          </p>
          <p>
            <strong>{data.members[expanded].skills}</strong>
            {data.members[expanded].skillsContent}
          </p>
          <span className="close-btn" onClick={handleClosePopup}>
            Cerrar
          </span>
        </div>
      )}
    </div>
  );
};

export default About;
