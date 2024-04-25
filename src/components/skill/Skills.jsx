import "../skill/Skills.css";
import javaLogo from "../img/imgTecnologias/javaLogo.jpg";
import springLogo from "../img/imgTecnologias/springbootLogo.jpg";
import springSLogo from "../img/imgTecnologias/springSecLogo.jpg";
import mysql from "../img/imgTecnologias/sqlLogo.jpg";
import postgre from "../img/imgTecnologias/postgreLogo.jpg";
import react from "../img/imgTecnologias/reactLogo.jpg";
import git from "../img/imgTecnologias/gitLogo.jpg";
import gitHub from "../img/imgTecnologias/githubLogo.jpg";
import html from "../img/imgTecnologias/htmlLogo.jpg";
import css from "../img/imgTecnologias/cssLogo.jpg";
import postman from "../img/imgTecnologias/postmanLogo.jpg";
import swagger from "../img/imgTecnologias/swagger.jpg";

function Skills(){
    return(
        <div className="skills" id="skills">
           <section className="skillsSec">
                <div className="infoSkills">
                    <h1>Skills</h1>
                    <p>Formación y aprendizaje contínuo de las tecnologías que se encuentran a la vanguardia en el desarrollo web</p>
                </div>
                
                <div className="cardSkill">
                    <ul className="listaSkills">
                        <li>
                        <img src={javaLogo} alt="" className="springBLogo"/>
                        <h2>Java</h2>
                        </li>
                        <li>
                        <img src={springLogo} alt="" className="springBLogo"/>
                        <h2>Spring Boot</h2>
                        </li>
                        <li>
                        <img src={springSLogo} alt="" className="springBLogo"/>
                        <h2>Spring Security</h2>
                        </li>
                        <li>
                        <img src={mysql} alt="" className="springBLogo"/>
                        <h2>MySQL</h2>
                        </li>
                    </ul>
                </div>
                 <div className="cardSkill">
                    <ul className="listaSkills">
                        <li>
                        <img src={postgre} alt="" className="springBLogo"/>
                        <h2>PostgreSQL</h2>
                        </li>
                        <li>
                        <img src={react} alt="" className="springBLogo"/>
                        <h2>React</h2>
                        </li>
                        <li>
                        <img src={git} alt="" className="springBLogo"/>
                        <h2>Git</h2>
                        </li>
                        <li>
                        <img src={gitHub} alt="" className="springBLogo"/>
                        <h2>GitHub</h2>
                        </li>
                    </ul>
                </div>
                <div className="cardSkill">
                    <ul className="listaSkills">
                        <li>
                        <img src={html} alt="" className="springBLogo"/>
                        <h2>HTML5</h2>
                        </li>
                        <li>
                        <img src={css} alt="" className="springBLogo"/>
                        <h2>CSS</h2>
                        </li>
                        <li>
                        <img src={postman} alt="" className="springBLogo"/>
                        <h2>Postman</h2>
                        </li>
                        <li>
                        <img src={swagger} alt="" className="springBLogo"/>
                        <h2>Swagger</h2>
                        </li>
                    </ul>
                </div>
             </section>
    
        </div>
    );
}
export default Skills;