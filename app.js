const express = require('express');
const userRouter = require('./routes/user.routes');
const app = express ();
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require('./config/db')
connectToDB();
const cookiparser = require('cookie-parser')
const indexRouter =require('./routes/index.routes')

app.set('view engine','ejs');
app.use(cookiparser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',indexRouter)
app.use('/user',userRouter)

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})