let express = require ("express")
require("dotenv").config() //importing dotenv to use environment variables
const{ checkToken} = require("./middleware") //importing the middleware function from middleware.js

let app  =express()
console.log(process.env.MYTOKEN) //accessing the environment variable
app.use(express.json())

//let myToken = "12345"
// Middleware function to check token

//let checkToken = (req,res,next)=>{
    //console.log("welome to middleware") 

    //next(); //next() is a function that, when called, executes the next middleware function in the stack.
//}
app.use(checkToken) //middleware
//middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
app.get("/",(req,res)=>{

    res.send({status:1,msg:"Home Page"})
})
app.get('/news',(req,res)=>{     
    res.send({
        status:1,
        msg:"News Page"}) //localhost:8000/news
})
app.get("/news/:id",(req,res)=>{
    let currentId = req.params.id
    res.send("News api ")
})
app.post('/login',(req,res)=>{  
    console.log(req.body)   //object
    res.send({
        status:1,
        msg:"login Page",
        bodyData:req.body,
    queryData:req.query}) //localhost:8000/news
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
