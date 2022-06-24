const mongoose = require("mongoose");



var mongoDB = 'mongodb://localhost:27017/mongopractice';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("connection Successfull......."))
.catch((err) => console.log(err));


//Schema
const platListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    courseType: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

//Model  //class
//collection creation
const PlayList = new mongoose.model("PlayList", platListSchema);

//create document or insert
const createDocument = async () =>{
    try{
        const mongoPlaylist = new PlayList({
            name: "MongoDB",
            courseType: "Database",
            videos: 35,
            author: "Lohit",
            active: true,
           
        })

        const jsPlaylist = new PlayList({
            name: "javascript",
            courseType: "Frontend",
            videos: 160,
            author: "Lohit",
            active: true,
           
        })

        const mongoosePlaylist = new PlayList({
            name: "Mongoose JS",
            courseType: "Database",
            videos: 90,
            author: "Lohit",
            active: true,
           
        })

        const expressPlaylist = new PlayList({
            name: "Express JS",
            courseType: "Backend",
            videos: 90,
            author: "Lohit",
            active: true,
           
        })
        const result = await PlayList.insertMany([mongoPlaylist, expressPlaylist, mongoosePlaylist, jsPlaylist]);
        console.log(result)
    }
    
    catch(err){
        console.log(err)
    }
}
//createDocument();

const getDocument = async () =>{

    try{
        const result = await PlayList
        .find({ $and:[{courseType:["Backend", "Database"]},
             {videos:{$gt: 50}}]})
        .select({name: 1})
        .countDocuments();
        //.limit(1);
        console.log(result);
    } catch(err){
        console.log(err);
    }

    
}


getDocument();

