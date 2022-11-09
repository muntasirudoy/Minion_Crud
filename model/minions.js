import mongoose from "mongoose";

const Schema = mongoose.Schema;


const minionsSchema = new Schema({
    name: {
    type: String,
    },
    age:{
    type:Number,
    },
    color:{
    type:String,
    }
})


const  minionsModel = mongoose.model('minions', minionsSchema);
export default minionsModel