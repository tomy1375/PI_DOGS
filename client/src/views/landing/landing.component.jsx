import "./landing.styles.css";
import React from 'react';
import { useHistory } from 'react-router-dom';

function Landing() {
    const history = useHistory();
    const handleClick = () => {
        // Redirigir a la nueva página
        history.push('/home');
      };
  return (
    <div className="landing-container">
      <h1 className="titulo">Dogs Henry</h1>
      <h2 className="subtitulo">Aqui podras buscar distinas razas de perros y hasta crear el tuyo</h2>
      <button className="buttonInicio" type="button" onClick={handleClick}>ingresar</button>
      <img className="img_landing" src="https://images8.alphacoders.com/133/1331724.png" alt="" />
    </div>
  );
}

export default Landing;