import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.js'
import videoRoutes from './routes/video.js'
import commentsRoutes from './routes/comments.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'

dotenv.config()

const app=express()

//CORS policy
app.use(cors())
app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use('/uploads', express.static(path.join('uploads')))


app.get('/',(req, res)=>{
    res.send("Hello")
})

app.use(bodyParser.json())
app.use('/user', userRoutes)
app.use('/video', videoRoutes)
app.use('/comment', commentsRoutes)


const PORT= process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server running on the PORT ${PORT}`);
})

const DB_URL= process.env.CONNECTION_URL
mongoose.connect(DB_URL, {
    useNewUrlParser: true,      // Deprecated in MongoDB driver v4.0.0
    useUnifiedTopology: true // Deprecated in MongoDB driver v4.0.0
    // useFindAndModify: false,   // To disable deprecated findOneAndUpdate() and findOneAndRemove()
    // useCreateIndex: true       // To enable mongoose to use createIndex() instead of ensureIndex()
  }).then(()=>{
    console.log("MongoDB connected");
}).catch((error)=>{
    console.log(error);
});
