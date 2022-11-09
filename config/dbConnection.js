import mongoose from "mongoose";


const db = "mongodb://ecommerce:8u5qgGf7dec5l7AA@cluster0-shard-00-00.jjwmo.mongodb.net:27017,cluster0-shard-00-01.jjwmo.mongodb.net:27017,cluster0-shard-00-02.jjwmo.mongodb.net:27017/Minions?ssl=true&replicaSet=atlas-3rw3w5-shard-0&authSource=admin&retryWrites=true&w=majority"

const dbConnection = async() =>{
    await mongoose.connect(db).then(()=>{
        console.log('DB Connected');
        
    });
}

export default dbConnection