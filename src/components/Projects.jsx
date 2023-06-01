import React, { useEffect, useState, useCallback } from "react";
import Title from "./Title";
import { makeStyles } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
import imagenEccomerce from "../assets/Tiernda2.jpg";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    background: "#303030",
    boxShadow: theme.shadows[5],
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    borderRadius: 30,
    width: 500,
    maxWidth: "90%",
    transition: "ease-in",
  },
}));

function Projects() {
  const styles = useStyles();
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedOne, setIsClickedOne] = useState(false);
  const [isClickedTwo, setIsClickedTwo] = useState(false);
  const [isClickedThree, setIsClickedThree] = useState(false);
  const [isClickedFour, setIsClickedFour] = useState(false);
  const [isEsc, setIsEsc] = useState(false);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setIsClicked(false);
      setIsClickedOne(false);
      setIsClickedTwo(false);
      setIsClickedThree(false);
      setIsClickedFour(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
      setIsEsc(false);
    };
  }, [escFunction]);

  const titles = [
    "Moisés Project",
    "Diana Project",
    "Tatiana Project",
    "Daniela Project",
    "Eliseo Project",
  ];
  const infor = [
    "Este proyecto fue creado con el objetivo de identificar la temperatura de diversas ciudades alrededor del mundo, ayudando a los viajeros a tomar en cuenta estos aspectos importantes en la planificación de su recorrido. ",
    "Es una página web de una academia de inglés, en donde se puede pedir información, ver oferta académica y consultar precios",
    "Realizar tus compras nunca fue tan sencillo, por medio de esta pagina podrás acceder a nuestro catalogo, permitiéndote identificar lo que necesitas para tu día a día, con las ofertas y productos actualizados. Te esperamos.",
    "Una forma simple e innovadora en el cual podrás encontrar los lugares turísticos mas icónicos de las ciudades de tu interés, además de presentarte diversas alternativas de estadías, incluyendo descripción y promociones vigentes.",
    "Un proyecto simple pero profundo, en el cual podrás encontrar frases que te permitan iniciar tu día con un proposito y agrandar tu conocimiento acerca de diversos escritores y pensadores.",
  ];
  const imgURL = [
    "https://media.nationalgeographic.org/assets/photos/000/263/26383.jpg",
    "https://cdn.lifehack.org/wp-content/uploads/2015/01/most-inspirational-quotes.jpeg",
    imagenEccomerce,
    "https://www.mueblesantonan.es/wp-content/uploads/2020/12/COSMO-by-Eos-dormitorios-modernos-Glicerio-Chaves-Hornero-COMP-9-de-venta-en-Muebles-ANTONAN-Leon.jpg",
    "https://www3.gobiernodecanarias.org/medusa/ecoescuela/autoformacion/files/2011/09/wordle_blog_laroca.gif",
  ];
  const projectURLS = [
    "https://peaceful-bell-f4706e.netlify.app/",
    "https://nifty-sammet-03df98.netlify.app/",
    "https://eduardodevolmedo.github.io/Your-Destiny/venta.html",
    "https://iadianairahe.wixsite.com/innovationacademy",
    "https://drive.google.com/drive/folders/1_gSfgnc1prhwci4JAD-xcuxus0t65KUm",
  ];

  function Modal(props) {
    return (
      <div className="modal-cont" id="main">
        <div className={styles.modal}>
          <img alt="project-desc" src={props.img}></img>
          <span className="close-modal" onClick={props.function}>
            X
          </span>
          <div className="project-descr">
            <h5>{props.title}</h5>
            <p>{props.text}</p>
            <div className="modal-tecs">
              <div>
                <a rel="noopener noreferrer" target="_blank" href={props.link}>
                  GoTo Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function handleClick() {
    setIsClicked(!isClicked);
  }

  function handleClickOne() {
    setIsClickedOne(!isClickedOne);
  }

  function handleClickTwo() {
    setIsClickedTwo(!isClickedTwo);
  }

  function handleClickThree() {
    setIsClickedThree(!isClickedThree);
  }

  function handleClickFour() {
    setIsClickedFour(!isClickedFour);
  }

  useEffect(() => {
    Aos.init({ duration: 10000 }); // Cambia el valor de duración a 300ms (o el valor deseado)
  }, []);
  

  return (
    <section
      id="projects"
      style={{ padding: isClicked || isClickedOne || isClickedTwo || isClickedThree || isClickedFour ? "0px" : "3% 7%" }}
    >
      {isClicked ? (
        <Modal
          title={titles[0]}
          img={imgURL[0]}
          text={infor[0]}
          icons={["sass", "react", "postman", "js", "css"]}
          link={projectURLS[0]}
          function={handleClick}
        />
      ) : null}
      {isClickedOne ? (
        <Modal
          title={titles[1]}
          img={imgURL[1]}
          text={infor[1]}
          icons={["sass", "react", "postman", "js", "html"]}
          link={projectURLS[3]}
          function={handleClickOne}
        />
      ) : null}
      {isClickedTwo ? (
        <Modal
          title={titles[2]}
          img={imgURL[2]}
          text={infor[2]}
          icons={["sass", "html", "js", "css"]}
          link={projectURLS[4]}
          function={handleClickTwo}
        />
      ) : null}
      {isClickedThree ? (
        <Modal
          title={titles[3]}
          img={imgURL[3]}
          text={infor[3]}
          icons={["sass", "react", "postman", "js", "html"]}
          link={projectURLS[2 ]}
          function={handleClickThree}
        />
      ) : null}
      {isClickedFour ? (
        <Modal
          title={titles[4]}
          img={imgURL[4]}
          text={infor[4]}
          icons={["sass", "html", "js", "css"]}
          link={projectURLS[1]}
          function={handleClickFour}
        />
      ) : null}

      <Title title="Proyectos de los Integrantes" />
      <div className="projects-title-cont">
        <h2>
          Estos son algunos de los proyectos hechos por cada integrante del{" "}
          <b>grupo 7</b>:
        </h2>
      </div>
      <div
        className="box-container"
        style={{ filter: isClicked || isClickedOne || isClickedTwo || isClickedThree || isClickedFour ? "blur(8px)" : "initial" }}
      >
        <div className="box" data-aos="fade-up">
          <img alt="first-project" src={imgURL[0]}></img>
          <div className="project-desc">
            <h5>{titles[0]}</h5>
            <p>{infor[0].substring(0, 100)}...</p>
            <div className="project-tecs">
              <a href="#main" onClick={handleClick}>
                See More
              </a>
              <span className="icon react"></span>
              <span className="icon sass"></span>
              <span className="icon postman"></span>
              <span className="icon js"></span>
              <span className="icon css"></span>
            </div>
          </div>
        </div>
        <div className="box" data-aos="fade-up">
          <img alt="second-project" src={imgURL[1]}></img>
          <div className="project-desc">
            <h5>{titles[1]}</h5>
            <p>{infor[1].substring(0, 100)}...</p>
            <div className="project-tecs">
              <a href="#main" onClick={handleClickOne}>
                See More
              </a>
              <span className="icon sass"></span>
              <span className="icon react"></span>
              <span className="icon postman"></span>
              <span className="icon js"></span>
              <span className="icon html"></span>
            </div>
          </div>
        </div>
        <div className="box" data-aos="fade-up">
          <img alt="third-project" src={imgURL[2]}></img>
          <div className="project-desc">
            <h5>{titles[2]}</h5>
            <p>{infor[2].substring(0, 100)}...</p>
            <div className="project-tecs">
              <a href="#main" onClick={handleClickTwo}>
                See More
              </a>
              <span className="icon sass"></span>
              <span className="icon html"></span>
              <span className="icon js"></span>
              <span className="icon css"></span>
            </div>
          </div>
        </div>
        <div className="box" data-aos="fade-up">
          <img alt="fourth-project" src={imgURL[3]}></img>
          <div className="project-desc">
            <h5>{titles[3]}</h5>
            <p>{infor[3].substring(0, 100)}...</p>
            <div className="project-tecs">
              <a href="#main" onClick={handleClickThree}>
                See More
              </a>
              <span className="icon sass"></span>
              <span className="icon react"></span>
              <span className="icon postman"></span>
              <span className="icon js"></span>
              <span className="icon html"></span>
            </div>
          </div>
        </div>
        <div className="box" data-aos="fade-up">
          <img alt="fifth-project" src={imgURL[4]}></img>
          <div className="project-desc">
            <h5>{titles[4]}</h5>
            <p>{infor[4].substring(0, 100)}...</p>
            <div className="project-tecs">
              <a href="#main" onClick={handleClickFour}>
                See More
              </a>
              <span className="icon sass"></span>
              <span className="icon html"></span>
              <span className="icon js"></span>
              <span className="icon css"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
