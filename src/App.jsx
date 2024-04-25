import Navbar from "./components/navBar/Navbar";
import Principal from "./components/principal/Principal";
import Skills from "./components/skill/Skills";
import Services from "./components/services/Services";
import Contacto from "./components/contact/Contacto";
import PiePag from "./components/footer/PiePag";

import "./App.css"

function App() {
  return (
    <div className='app'>
    <Navbar></Navbar>
    <Principal></Principal>
    <Skills></Skills>
    <Services/>
    <Contacto/>
    <PiePag/>
    </div>
  );
}

export default App;
