const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
 
app.listen(6667,()=>{
          console.log('Server is ready at port 6667')
})