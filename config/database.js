const mongoose  = require('mongoose')
const database_url  = "mongodb://127.0.0.1:27017/Users"

const connect = ()=>{
   return mongoose.connect(database_url)
}

exports.connect = connect



