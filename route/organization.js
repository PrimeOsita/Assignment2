const {createOrganization} = require('../controller/organizationController');
const {upload} = require('../middlewares/multer');
const router = require('express').Router();

router.post('/organizations', upload.single('logo'), createOrganization);
 
module.exports = router; 
 
