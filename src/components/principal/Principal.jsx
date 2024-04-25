import "../principal/Principal.css";
import imgPrincipal from "../img/psoFoto.jpg";
import flechaAbajo from "../img/flechaAbajo.png";
import curriculum from "../img/PSandovalCV.pdf";

function Principal(){
return (
 <div className="principal" id="index">

   <div className="infoPrincipal">
      <h1>Hola, Soy Paúl Sandoval</h1>
      <div className="container">

      <div className="textoAnimado">
      <h3 data-text="Backend Devoloper">Backend Devoloper</h3>

      </div>
      
      </div>
      <p>Soy un apasionado programador con experiencia en el desarrollo de software backend. Tengo un fuerte 
         dominio de Java y me apasiona crear soluciones innovadoras y eficientes.
         Soy una persona proactiva, con gran capacidad de aprendizaje y trabajo en equipo.
         Me adapto fácilmente a nuevos entornos y dispuesto a afrontar nuevos retos.
      </p>
      
      <div className="infoButtons">
      <a className="infoButtonOne" href="#contacto">
         Hablemos!
      </a>   
       <a className="infoButtonTwo" href={curriculum} download="PSandovalCV.pdf">
         Descargar CV
         </a>
       </div>
      
      <a className="flechaAbajo" href="#skills">
         <img src={flechaAbajo} alt="flechaAbajo" />
      </a>
   </div>

   <div className="imgPrincipal">
      <div className="box">
          <div className="content">                 
            <img src={imgPrincipal} alt=""/>
         </div>
      </div>
   </div>

 </div>);    
}
export default Principal;