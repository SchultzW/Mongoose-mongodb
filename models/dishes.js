const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const commentSchema= new Schema({
    rating:{
        type:Number,
        min:1,
        max: 5,
        required: true
    },
    comment:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true}
    },{
    
        timestamps:true



});
//a new schema that tells us what a dish is
const dishSchema=new Schema(
{
    name:{
        type: String,
        required:true,
        unique: true
    },
        description:{
            type: String,
            required: true
    },
        //array of comments inside dish doc this is a subdocument
        comments:[commentSchema]
    },
    
    {
    
        timestamps:true
    });


let Dishes=mongoose.model('Dish',dishSchema);

//we can now use this model eslewhere
module.exports = Dishes;