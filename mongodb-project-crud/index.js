let express = require("express");
const {dbConnection }= require("./dbConnection");
let app= express();

app.use(express.json())

app.get("/student.read", async (req, res) => {
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students");
    let data = await studentCollection.find().toArray();
    let resObj = {
        status: 1,
        msg: "Student List",
        data
    };

    res.send(resObj);
});

app.post("/student.insert",async(req,res)=>{
let myDB = await dbConnection();
let studentCollection = myDB.collection("students")

let obj = {
    sName: req.body.sName,   
    sEmail: req.body.sEmail,
    sid: req.body.sid,         
}
console.log(obj);
let insertResult = await studentCollection.insertOne(obj);
let resObj ={
    status:1,
    msg:"Data insert",
    insertResult
}

    res.send(resObj)
})

app.listen("8000", () => {
  
});

// http://localhost:8000/student.read