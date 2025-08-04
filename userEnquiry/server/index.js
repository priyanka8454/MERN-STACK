let express = require('express');
let mongoose = require('mongoose');
require('dotenv').config();
let cors = require('cors');
// Importing the necessary modules and setting up the environment
let app = express();
app.use(cors()); // Enable CORS for all routes

app.use(express.json());

// Corrected path to your router
const enquiryRouter = require('./App/routes/web/enquiryRoutes');

app.use('/api/website/enquiry', enquiryRouter);

//connect mongodb
mongoose.connect(process.env.DBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => { console.log(err) });








