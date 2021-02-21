const dotenv = require('dotenv');
dotenv.config({path : './config.env'});
const app = require('./app');
const mongoose = require('mongoose');


const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);


mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then( () =>{
    console.log('Database connection successful');
    }
)



const port = 4000 || process.env.PORT;
app.listen(port, ()=>{

    console.log(`app running on port : ${port}...`);

});
