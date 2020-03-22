const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
        id:String,
        name:String,
        email:String,
        mobile:String,
        address:String
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model('Employee',EmployeeSchema);