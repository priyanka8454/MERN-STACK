let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let enquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Enquiry', enquirySchema);
// This code defines a Mongoose schema for an "Enquiry" model, which includes fields for name, email, message, and a timestamp for when the enquiry was created. The model is then exported for use in other parts of the application.