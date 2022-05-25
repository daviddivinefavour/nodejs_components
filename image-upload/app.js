require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');

const storage = multer.diskStorage({
          destination:  'public/uploads',
          filename:  (req, file, cb) =>{
                    const uniqueName = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
                    cb(null,uniqueName )
          }
});

const upload = multer({ storage: storage });
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use('/profile', upload.single('avatar'),(req,res)=>{
          return res.status(200).send({
                    message: 'Image uploaded successfully.',
                    url: `${req.file.path}`
          })
});

app.listen(port,  async ()=>{
          try {
                       await  sequelize.authenticate()
                       .then(console.log(`Server is running on port ${port}, Database connected.`))                    
             } catch (error) {
                    console.log(`Error: Unable to connect to database. `)   
             }
   })