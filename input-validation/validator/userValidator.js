const yup = require('yup');

const userValidator = {
          registerUser : yup.object().shape({
                    firstname: yup.string().required('Firstname is mandatory'),
                    lastname: yup.string().required('Lastname is mandatory'),
                    email: yup.string().email(),
                    phone: yup.string().min(11).max(11).required('Phone  is mandatory'),        
                    password: yup.string().min(6).required('Password is required'),
                    confirmPassword: yup.string().min(6).oneOf([yup.ref('password'), null], 'Password must match')
           }),
}

module.exports = userValidator