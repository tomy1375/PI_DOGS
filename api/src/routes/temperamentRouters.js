const { Router } = require('express');
const temperamentHandler = require('../handlers/temperamentHandlers');

const temperamentRouter = Router();

temperamentRouter.get('/', temperamentHandler)

module.exports = temperamentRouter