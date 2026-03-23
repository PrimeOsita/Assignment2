const {createStaff} = require('../controller/staffController');
const {upload} = require('../middlewares/multer');
const router = require('express').Router();

router.post('/staff/:organizationId', upload.fields([{ name: 'staffDp', maxCount: 1 }, { name: 'profilePhoto', maxCount: 1 }]), createStaff);
 
module.exports = router; 
 