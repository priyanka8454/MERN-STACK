const express = require('express');
const router = express.Router();
const { enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate } = require('../../controller/web/userEnquiryController');

router.post('/enquiry-insert', enquiryInsert);
router.get('/enquiry-list', enquiryList);
router.delete('/enquiry-delete/:id', enquiryDelete);
router.put('/enquiry-update/:id', enquiryUpdate);

module.exports = router;