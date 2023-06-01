import React from "react";
import Title from "./Title";
import { useState, useLayoutEffect, useEffect} from "react";
import Aos from "aos"
import "aos/dist/aos.css"
 
function Bio() {

    const abilities = [ 'Innovadores',
      'Novedosos',
      'Atentos',
      'Creativos',
      'Pioneros',]

    const [data, setData] = useState("Carismaticos");
    let count = 0;

    useEffect(() => {
        Aos.init({duration: 400})
    }, [abilities])


    useLayoutEffect(() => {
        const interval = setInterval(() => {
          if(count < abilities.length){
            setData(abilities[count++])
          }
          else {
              count = 0;
          }
        }, 2000);
        return () => clearInterval(interval);
     }, []);


  return(
    <div data-aos="fade-up" id="biography" >
        <Title title="Sobre Nosotros"/>
        <h3>Hola, somos el <b>Grupo 7 </b></h3>
        <p>Y estamos compuestos por Daniela, Moisés, Eliseo, Tatiana y Diana.</p>
        <div className="contains-data">
                <b className="data-eff">{data}</b>
        </div>
        <p className="description"> Cada uno de nosotros tiene diferentes talentos y habilidades, pero todos compartimos el deseo de ser los mejores y superarnos cada día. Hoy enfrentamos un gran desafío: innovar en un área que está en constante evolución. Pero con un buen liderazgo, trabajo en equipo y comunicación, estamos seguros de que podemos superar este obstáculo. 
        Queremos hacer una contribución significativa en esta área y marcar la diferencia.</p>
    </div>
  )
}


export {Bio}