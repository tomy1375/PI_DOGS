import React, { useEffect, useState } from 'react'
import "./card.styles.css"
const apiKey = process.env.API_KEY;

function Card({ user }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Hacer la solicitud a la API para obtener la URL de la imagen
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://api.thedogapi.com/v1/images/${user.reference_image_id}?api_key=${apiKey}`);
        const data = await response.json();
        setImageUrl(data.url);
      } catch (error) {
        console.error('Error al obtener la imagen:', error);
      }
    };

    fetchImage();
  }, [user.reference_image_id]);

  const { name, temperament ,} = user;

  return (
    <div className='card-container'>
      <h2>{name}</h2>
      <p>{temperament}</p>
      {/* <p>{`Weight (imperial): ${weight.imperial}, Weight (metric): ${weight.metric}`}</p> */}
      <img className='dog-image' src={imageUrl} alt={name} />
    </div>
  );
}

export default Card;