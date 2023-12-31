const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue : DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      // autoIncrement:true,
      allowNull: false,
  },
  reference_image_id:{
    type: DataTypes.STRING,
      allowNull: false,
  },
  weight:{
    type: DataTypes.STRING,
      allowNull: false,
  },
  height:{
    type: DataTypes.STRING,
      allowNull: false,
  },
  life_span:{
    type: DataTypes.STRING,
      allowNull: false,
  },
  created:{
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  temperament: {
    type: DataTypes.STRING,
    allowNull: false,
  }
  },{
    timestamps: false
  });
};
