
require('dotenv').config();
module.exports = {
    // url:'mongodb://localhost:27017/school'
    // url:'mongodb+srv://gokulthehunter:funtrack1$@cluster0-0q5qs.mongodb.net/test?retryWrites=true&w=majority'
    // url:'mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASS+process.env.DB_HOST
    url:`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}${process.env.DB_HOST}`
}