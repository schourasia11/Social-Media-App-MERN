import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
import postRoutes from './routes/posts.js';

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());

const CONNCTION_URL ='mongodb+srv://user123:Password123@cluster0.oodps4q.mongodb.net/merntutorial?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNCTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch((err)=>console.log(err.message));
// mongoose.set('useFindAndModify', false); //dont get any warnings in the console