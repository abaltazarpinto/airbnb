import logo from './logo.svg';
import './App.css';
import React from "react"
import "./style.css"; 
import lista from "./img/lista_airbnb.png"; 
import Logo from "./img/airbnb.png"; 

function App() {
  return <>
    <div className='nav'>
      <div className='logomMain'> 
        <img className='logo' src={Logo} /> 
      </div>
      <div className=''>
        <img className='lista' src={lista} />
      </div> 
    </div>
  </>;
}

export default App;
