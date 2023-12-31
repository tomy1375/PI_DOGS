const { getUserById, getAllUser, getUserByName } = require("../controllers/usersControllers");

const getUserHandler =(req,res)=>{
    res.status(200).send('Obtiene un arreglo de objetos')
}
const getQueryHandler = async(req,res)=>{
    const {name} = req.query

    //'Esta ruta debe obtener todas aquellas razas de perros que coinciden con el nombre recibido por query'
    try {
    if(name){
        const userByName =  await getUserByName(name)
        res.status(200).json(userByName)
    } else{
        const response = await getAllUser()
        res.status(200).json(response)
    }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getDetailHandler = async (req,res)=>{
    const {id}= req.params
    const source = isNaN(id)? "dbb" : "api"
    try {
        const response = await getUserById(id, source)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports = {
    getUserHandler,
    getDetailHandler,
    getQueryHandler
}