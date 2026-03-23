const {createDelivery} = require('../controller/deliveryController');
const {upload} = require('../middlewares/multer');
const router = require('express').Router();

router.post('/deliveries/:orderId', upload.fields([{ name: 'images', maxCount: 2 }]), createDelivery);
 
module.exports = router;  