const {createEquipment} = require('../controller/equipmentController');
const {upload} = require('../middlewares/multer');
const router = require('express').Router();

router.post('/equipment/:organizationId', upload.array('images', 5), createEquipment);
 
module.exports = router;  