const express  = require('express');
const bodyParser = require('body-parser');
const cors =  require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url,{useNewUrlParser:true})
    .then( ()=> {console.log("successfully connected data base")})
    .catch( (err) => {
        console.log("some error", err);
        process.exit();
    })

// app.get('/',function(req,res){
//     res.send("Hello from server");
// })
app.get('/',(req,res) =>{
    res.json({"message":"Welcomne to the app"});
})

require('./app/routes/employee.routes.js')(app);


app.listen(PORT,function(){
    console.log("Server running on port Number " + PORT)
})








