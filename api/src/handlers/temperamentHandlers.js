const { getTemperament } = require("../controllers/temperamentController");

  
const temperamentHandler = async (req, res) => {
    try {
      const temperament = await getTemperament();
      res.status(200).json({ temperament });
    } catch (error) {
      res.status(500).send('Error interno del servidor: ' + error.message);
    }
  };


module.exports = temperamentHandler