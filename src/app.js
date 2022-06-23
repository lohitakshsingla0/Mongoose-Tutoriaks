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
        const reactPlaylist = new PlayList({
            name: "Node JS",
            courseType: "Backend",
            videos: 90,
            author: "Lohit",
            active: true,
           
        })
        const result = await reactPlaylist.save();
        console.log(result)
    }
    
    catch(err){
        console.log(err)
    }
}

createDocument();