// expressjs framework Nodejs (manage req and res)

import express from 'express';
import dotenv from 'dotenv';
import comments from './comments.js';
import productRoutes from './routes/productsRoute.js';
import userRoutes from './routes/usersRoute.js';
import cors from 'cors';
import { authRoute } from './routes/authRoute.js';

const app = express();
dotenv.config();


app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to Backend")
})


// use 

// .get

app.use('/products',productRoutes);
app.use('/users',userRoutes);
app.use('/auth',authRoute);




// app.get('/profile/',(req,res)=>{
//     res.status(200).send("welcome to profile page")
// })

// app.get('/users/:id',(req,res)=>{
//      const id = req.params.id;
//     res.status(200).send(`Welcome to my product ${id}`)
// })

// app.get('/comments',(req,res)=>{
//     res.status(200).send({status:200,message:"success",data:comments})
// })

// // status , message data 
// //  200  ,  "all data present", data=comments 

// // app.get('/login',(req,res)=>{
// //     res.status(200).send({status:200,message:"You are logged in",data:comments})
// // })




// app.get('*',(req,res)=>{
//     res.status(404).send("Page not found")
// })






const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})