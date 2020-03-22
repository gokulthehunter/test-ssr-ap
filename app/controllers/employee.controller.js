const Employee = require('../models/employee.model.js');

exports.create = (req,res) => {
    if(!req.body.email){
        return res.status(400).send({message:'empolyee email cannot be empty'})
    }

    const employee =  new Employee({
        name:req.body.name || 'Jhon',
        email: req.body.email,
        mobile: req.body.mobile,
        address: req.body.address
    })

    employee.save()
        .then(data => {
            req.send(data)
        })
        .catch(err => {
            req.status(500).send({message:err.message || "some server error occured"})
       
        })

}

exports.findAll = (req,res) => {
    Employee.find()
        .then(employees => {
            res.send(employees)
        })
        .catch(err=>{
            res.status(400).send({message:err.message || "some error from finall method"})
        }) 
}

// exports.findOne = (req,res) => {
//     Employee.find(req)
//         .then(employee => {
//             res.send(employee)
//         })
//         .catch(err=>{
//             res.status(400).send({message:err.message || "some error from finall method"})
//         }) 
// }

exports.findOne = (req, res) => {
    console.log("sssssssssss",req)
	Employee.findById(req.params.employeeId)
        .then(employee =>{
            if(!employee){
                return res.status(400).send({
                    message: "Employee not found with id " + req.params.employeeId
                });
            }
            res.send(employee);
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                message: "Employee not found with id " + req.params.employeeId
            });
            
        }
        return res.status(500).send({
            message: "Error retrieve employee with id " + req.params.employeeId
        });
	});
};