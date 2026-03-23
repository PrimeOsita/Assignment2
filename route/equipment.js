const {createEquipment} = require('../controller/equipmentController');
const {upload} = require('../middlewares/multer');
const router = require('express').Router();

router.post('/equipment/:organizationId', upload.fields([{ name: 'images', maxCount: 2 }]), createEquipment);
 
module.exports = router;  