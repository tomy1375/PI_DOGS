const { Router } = require('express');
const { getUserHandler, getDetailHandler, getQueryHandler } = require('../handlers/usersHandlers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const usersRouter = Router();

usersRouter.get('/:id',getDetailHandler)//params

usersRouter.get('/',getQueryHandler)//query

usersRouter.get('/',getUserHandler)



module.exports = usersRouter