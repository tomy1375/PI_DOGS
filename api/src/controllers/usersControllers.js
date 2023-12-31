const { Sequelize } = require('sequelize')
const {Dog} = require('../db')
const axios = require("axios")
const Temperament = require('../models/Temperament')
require('dotenv').config();
const apiKey = process.env.API_KEY;

const createDogDb = async (name,life_span,weight,height,reference_image_id)=>{
    return await Dog.create({name,life_span,weight,height,reference_image_id})
    
}
const getUserById = async(id,source)=>{
const user =  source ===  "api" ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?api_key=${apiKey}`)).data
: await Dog.findByPk(id);
return user
}

const infoCleaner = (arr) =>arr.map ( user =>{
    return{
        name: user.name,
        life_span: user.life_span,
        weight: user.weight,
        height: user.height,
        reference_image_id: user.reference_image_id,
        created: false
    }
})

const getAllUser = async()=>{
    const usersDB =  await Dog.findAll()
    const infoApi = (await axios.get(
        `https://api.thedogapi.com/v1/breeds/?api_key=${apiKey}`
    )).data
     const usersApi = infoCleaner(infoApi)   

    return[...usersDB,...usersApi]// de esta manera juntos tanto usersDB como userApi
}

const getUserByName = async(name)=>{
    const infoApi = (await axios.get(
        `https://api.thedogapi.com/v1/breeds/?api_key=${apiKey}`
    )).data
     const usersApi = infoCleaner(infoApi)  
     // Convertir el nombre de búsqueda y los nombres de la API a minusculas
    const lowerCaseSearchName = name.toLowerCase(); 
    const userFiltered = usersApi.filter(user => user.name.toLowerCase() === lowerCaseSearchName);
    const userDb = await Dog.findAll({
        where: {
          name: {
            // Utilizar la función de Sequelize 'iLike' para hacer la busqueda insensible a mayusculas y minusculas
            [Sequelize.Op.iLike]: `%${name}%`
          }
        }
      });
      if (userFiltered.length === 0 && userDb.length === 0) {
        // Si no se encuentra ningun perro
        return [{ message: "El perro que está buscando no existe o escribió mal su nombre." }];
      }
    
     return[...userFiltered,...userDb]
}


module.exports = {
    createDogDb,
    getUserById,
    getAllUser,
    getUserByName
}