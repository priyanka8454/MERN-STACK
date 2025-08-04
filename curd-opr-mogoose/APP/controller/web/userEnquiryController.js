const enquiryModel = require("../../model/web/userEnquiryModel");

let  enquiryInsert = (req,res) => {
    
    let {sName, sEmail, sPhone, sMessage} = req.body;
    let enquiry = new enquiryModel({
        name: sName,
        email: sEmail,
        phone: sPhone,
        message: sMessage
    });

    enquiry.save().then(() => {
        res.send({ status: 1, message: "Data saved successfully" });
    }).catch((err) => {
        console.error(err); // Add this line
        res.send({ status: 0, message: "Error saving data" });
    })

}
let enquiryList = async (req, res) => {
   let enquiryList =  await enquiryModel.find();
   res.status(200).json({
        status: 1,
        message: "Enquiry list fetched successfully",
        data: enquiryList
    })
}

let enquiryDelete =   async (req, res) => {
    let enquiryId = req.params.id;
    let deletedEnquiry = await enquiryModel.deleteOne({_id:enquiryId});
    res.send({ status: 1, message: "Enquiry deleted successfully", id :enquiryId, delRes:deletedEnquiry });
}

let enquiryUpdate = async (req, res) => {
    let enquiryId = req.params.id;
    let {sName, sEmail, sPhone, sMessage} = req.body;
    let updateOj = {
        name: sName,
        email: sEmail,
        phone: sPhone,
        message: sMessage
    }
    let updatedRes = await enquiryModel.updateOne({_id: enquiryId},updateOj);
    res.send({ status: 1, message: "Enquiry updated successfully", id :enquiryId });
}

module.exports={enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate};