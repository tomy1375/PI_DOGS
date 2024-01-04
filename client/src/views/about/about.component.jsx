import './about.css';
import React from 'react';

function About() {
  return (
    <div className="card-container">
      <h2 className="blue-heading">Acerca de mí</h2>
      <p>Soy un músico que decidió incursionar en la programación.</p>
      <div className="image-container">
        <img
          src="https://th.bing.com/th/id/OIG.ZjPuaIX3OyCTU79Iv6bn?pid=ImgGn"
          alt=""
          className="image"
        />
      </div>
    </div>
  );
}

export default About;
