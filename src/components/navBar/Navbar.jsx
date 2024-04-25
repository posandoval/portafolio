import React, {useState} from "react";
import "../navBar/NavBar.css";
import logoOD from "../img/logoOD.png";

function NavBar(){
    const[isOpen, setIsOpen]=useState(false)
    
    return(
        <div className="navBar">
            <div className="leftNB">
                <img src={logoOD} alt="logoOmarDev" />
                <p>Omar.Dev</p>
            </div>

            <div className={`rightNB ${isOpen && "open"}`}>
                <a href="#index" className="active">Inicio</a>
                <a href="#skills" >Skills</a>
                <a href="#services">Servicios</a>            
                <a href="#contacto" >Contacto</a>
            
            </div>
            
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
            </div>


        </div>
    ); 
        
}
export default NavBar;