const router = require('express').Router();
const userController = require('../controllers/userController');

router.use('/home', (req,res)=>{
          return res.status(200).send({
                    status: 200,
                    message: 'Welcome'
          })
})

router.post('/register', userController.register);

module.exports = router;