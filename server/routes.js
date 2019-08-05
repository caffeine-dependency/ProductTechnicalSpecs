const router = require('express').Router();
const controller = require('./controllers.js');

router
    .route('/product/:id')
    .get(controller.getTechSpec)
    .post(controller.createTechSpec)
    .delete(controller.removeTechSpec)

router
    .route('/imgcarousel/:productid')
    .post(controller.insertImg)

router
    .route('/questions/:productid')
    .post(controller.insertQuestion)




module.exports = router