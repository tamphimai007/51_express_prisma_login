const express = require('express')
const router = express.Router()
// import Controllers
const { register,login } = require('../controllers/auth')

router.post('/register',register)
router.post('/login',login)

// Export 
module.exports = router