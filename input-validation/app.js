const express = require('express');
const {sequelize} = require('./models');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const routes = require('./routes');
const { route } = require('./routes/userRoutes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

routes(app);

app.listen(port, ()=>{
          try {
                    sequelize.authenticate()
                    .then(console.log(`Server is running on ${port}, Database connected...`))
          } catch (error) {
                    console.log('Unable to connect to database... \n ', error)
          }
})