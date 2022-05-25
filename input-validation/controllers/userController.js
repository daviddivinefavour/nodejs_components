const router = require('express').Router();
const {registerUser} = require('../validator/userValidator');

exports.register = async (req,res)=>{

        await console.log(req.url)
          try {
                        registerUser.validate(req.body)
                        return res.send({
                        status:200,
                        message: 'Registration Successful'
                })
          } catch (error) {
                    console.log('Validation failed')
                    return res.send({
                              status:500,
                              message: 'Oops... An error occurred'
                    })
          }
}
