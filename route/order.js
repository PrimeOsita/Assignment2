const {createOrder} = require('../controller/orderController');
const {upload} = require('../middlewares/multer');
const router = require('express').Router();

router.post('/order/:staffId', upload.array('images', 2), createOrder);
 
module.exports = router;   