let express = require ('express');
var mongoose = require('mongoose');
const{ enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate } = require('./APP/controller/web/userEnquiryController');
const enquiryRoutes = require('./APP/routes/web/enquiryRoutes');
 require('dotenv').config();

// Connect to MongoDB
let app = express();


app.use(express.json());
app.use("/web/api/enquiry", enquiryRoutes)

//http://localhost:3000/web/api/enquiry/enquiry-insert

mongoose.connect(process.env.DBURL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port "+process.env.PORT);
    })
})


