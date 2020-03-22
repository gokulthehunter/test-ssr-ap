module.exports = (app) => {
    const employees = require('../controllers/employee.controller.js');
    app.post('/employees',employees.create);
    app.get('/employees',employees.findAll);
    app.get('/employees:employeeid',employees.findOne);
    // app.put('/employees:employeeid',employees.update);
    // app.delete('/employees:employeeid',employees.delete);
}