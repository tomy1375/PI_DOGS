const { Router } = require('express');
const usersRouter = require('./usersRouters');
const postRouter = require('./postRouters');
const temperamentRouter = require('./temperamentRouters');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs',usersRouter)
router.use('/dogs',postRouter)
router.use('/temperaments',temperamentRouter)


module.exports = router;
