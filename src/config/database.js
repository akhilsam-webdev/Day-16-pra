const mongoose = require("mongoose")

function connectTODb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to mongo db")
    })
}

module.exports = connectTODb