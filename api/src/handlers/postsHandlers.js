const { createDogDb } = require("../controllers/usersControllers")

const createPostHandler = async (req,res)=>{
    const {name,life_span,weight,height,reference_image_id} = req.body

    try {
        const response = await createDogDb(name,life_span,weight,height,reference_image_id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    // res.status(200).send(`el perro ${name} con ${añosDeVida} de vida ah sido creado`)
    //los datos necesarios para crear un nuevo perro y relacionarlo con los temperamentos asociados
}

module.exports = createPostHandler