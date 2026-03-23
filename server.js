require('dotenv').config();
const express = require('express');
const sequelize = require('./database/database');
const organizationTable = require('./route/organization');
const staffTable = require('./route/staff');
const equipmentTable = require('./route/equipment');
const orderTable = require('./route/order');
const deliveryTable = require('./route/delivery');
const PORT = 5000;
const app = express();
const multer = require('multer');

app.use(express.json());
app.use(organizationTable)
app.use(staffTable)
app.use(equipmentTable)
app.use(orderTable)
app.use(deliveryTable)
const database = async () => {
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error.message);
}
}
database()

app.use((err, req, res, next) => {
    if (err) {
        console.log(err instanceof multer.MulterError, err.code)
        res.status(500).json({ error: err.message })

    }
    next()
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});