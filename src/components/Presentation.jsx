import React from "react"



function Presentation(){
  return(
  <section>
    <div className="absolute-pos">
      <h1>Grupo 7</h1>
      <p>"Buddy"</p>
    </div>
    <a href="#biography" className="absolute-pos-arrow">
      <div title="View Projects" href="null">Mira nuestro trabajo</div>
      <span><img src = "https://freesvg.org/img/Arrow-002.png" width="30px" height="30px" ></img></span>
    </a>
  </section>
  )
}


export {Presentation}
