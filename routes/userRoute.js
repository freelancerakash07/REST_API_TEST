const express = require('express');
const { getAllUser , createUser} = require('../controllers/userControllers');



// init router
const router = express.Router();




router.get('/', getAllUser)
router.post('/', createUser)






module.exports = router ;