const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert = (req, res) => {

    let {name, email, phone, message} = req.body;
        let enquiry = new enquiryModel({
            name,
            email,
            phone,
            message
        });
    
        enquiry.save().then(() => {
            res.send({ status: 1, message: "Data saved successfully" });
        }).catch((err) => {
            console.error(err);
            res.send({ status: 0, message: "Error saving data", error: err.message });
        })
}
module.exports = {enquiryInsert};
