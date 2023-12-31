const { Sequelize } = require('sequelize')
const {Dog} = require('../db')
const axios = require("axios")
const Temperament = require('../models/Temperament')

const getAndSaveTemperament = async () => {
    try {
      // Obtener información de un solo perro de la API
      const apiURL = 'https://api.thedogapi.com/v1/breeds/1'; // Cambia el '1' por el ID del perro que deseas obtener
      const response = await axios.get(apiURL);
      const dogInfo = response.data;
  
      // Limpiar la tabla antes de guardar el nuevo temperamento
      await Temperament.destroy({ where: {} });
  
      // Guardar el temperamento en la base de datos
      const temperament = dogInfo.temperament;
      if (temperament) {
        await Temperament.create({ temperament });
      }
  
      return 'Temperamento obtenido y guardado exitosamente en la base de datos.';
    } catch (error) {
      console.error(`Error en el controlador de temperamentos (getAndSaveTemperament): ${error.message}`);
      throw new Error('Error al procesar el temperamento.');
    }
  };

  const getTemperament = async () => {
    try {
      const temperaments = await Temperament.findAll({
        attributes: ['temperament'],
      });
  
      return temperaments.map((record) => record.temperament);
    } catch (error) {
      console.error(`Error en el controlador de temperamentos (getTemperament): ${error.message}`);
      throw new Error('Error al procesar el temperamento.');
    }
  };

  module.exports = {
    getAndSaveTemperament,
    getTemperament
  }