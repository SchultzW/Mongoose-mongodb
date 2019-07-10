const mongoose=require('mongoose');
const Dishes=require('./models/dishes');

const url='mongodb://localhost:27017/conFusion';
const connect=mongoose.connect(url);

connect.then((db)=>{
    console.log("Connected to server");

    Dishes.create({
       name:"Uthapizza",
        description:"test"
    })
        .then((dish)=>{
            console.log(dish);
            //finds all the dishes 
            return Dishes.findByIdAndUpdate(dish._id,{
                $set:{description:'updated test'}},
                {
                    new:true//new:true will return updated dish back to us
            }).exec();
        })
        .then((dish)=>{
            console.log(dish);
            dish.comments.push({
                rating:5,
                comment:'great!',
                author:'Me'
            });
            return dish.save();
        })
        .then((dish)=>{
        
        
            console.log(dish);
            console.log('dish deleted');
            return Dishes.deleteOne({name:Uthapizza});
            
        })
        .then(()=>{
            return mongoose.connection.close();
        })
        .catch((err)=>
        {
            console.log(err);
        });
});