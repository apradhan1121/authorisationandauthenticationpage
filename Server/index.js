const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors');
const path = require('path');


dotenv.config()
const { Double } = require('mongodb')
const bodyParser = require('body-parser')
const UserRouter = require('./routes/Users.js')
const {isUserLoggedIn,
isAdmin,
isPremiumUser} = require('./middleware/Users.js')
app.use(cors());
app.use(express.json()); 
app.use(bodyParser.urlencoded())
app.use(UserRouter)


/* app.get('/',(req,res)=>{
    res.send({
        status:200,
        now:new date()
    })
})

//Authorisation Pages(Once the user is logged in he gets access to the following websites)


app.get('/userDashboard',isUserLoggedIn, (req,res)=>{

    res.send("Welcome to the user dashboard")
})

app.get('/premiumUser',isUserLoggedIn,isPremiumUser,(req,res)=>{
    res.send("Welcome to the premium page")
})


app.get('/Admin',isUserLoggedIn,isAdmin,(req,res)=>{
    res.send("Welcome to the Admin page")
})
 */




app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.send({ status: 200, now: new Date() });
});

app.get('/userDashboardB', isUserLoggedIn, (req, res) => {
    res.json({
        status: 'SUCCESS',
        message: 'Welcome to the user dashboard',
        user: req.user // Include user information in the response
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});





app.listen(5000, (req,res)=>{
     mongoose.connect("mongodb+srv://abhijitpradhan1536:Abhijit1121@cluster1.hqzvmpl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
    .then(()=>
        console.log("db connected")

    )
    .catch((e)=>{
        console.log("Cannot connect to db with error: ", e)
       /*  res.json({
            status:500,
            message:"unable to connect to db"
        }) */
    })
})





/* 
const express = require('express')
const app = express()
    const ejs = require('ejs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const { Double } = require('mongodb')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())

const Customer = mongoose.model('Customer',{
    Name:String,
    City:String
})

app.get('/customer',async(req,res)=>{
    try{
    console.log("GET is used");
    const Customers = await Customer.find()
    res.json({
        status:200,
        data: Customers
    })
    }
    catch(error){
        console.log(error)
        res.json({
            status:500,
            message:"internal server error"
        })
    }
})

app.post('/customer',async(req,res)=>{
    try{
    console.log(req.body)
    const {Name,City} = req.body
    await Customer.create({Name,City})
    console.log("Customer data stored in db")
    res.json({
        status:"success"
    })
    }
    catch(error){
        console.log("Failed to do a post operation in the db, error: ",error)
        res.json({
            status:500,
            message:"internal server error"
        })
    }
    
})

app.patch('/customer/:id',async(req,res)=>{
    try{
    console.log("Patch opereation")
    const {id} = req.params
    const {Name, City}= req.body
    await Customer.findByIdAndUpdate(id,{Name, City})
    res.json({
        status:200
    })
}
catch(error){
    console.log(error)
}
})

app.delete('/customer/:id',async(req,res)=>{
    try{
    console.group("Delete operation")
    const {id} = req.params
    await Customer.findByIdAndDelete(id)
    res.json({
        status:200
    })
    }
    catch(error){
        console.log("Delete operation is not done",error)
    }
    
})



app.listen(process.env.PORT, (req,res)=>{
     mongoose.connect(process.env.MONGODB_URL)
    .then(()=>
        console.log("db connected")

    )
    .catch((e)=>{
        console.log(e)
        res.json({
            status:500,
            message:"unable to connect to db"
        })
    })
})

 */







