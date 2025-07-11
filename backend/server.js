/**
 * @name Hotel Room Booking System
 * @author Garvit
 * @description Hotel Room Booking and Management System Software ~ Developed By Garvit
 * @copyright ©2025 ― Garvit. All rights reserved.
 * @version v0.0.1
 *
 */

/*
 * Name: Hotel Room Booking System ~ Backend
 * Description: Build an Hotel Room Booking System using node.js, express.js application from the scratch
 * Author: Garvit
 * Last Modified: 11/07/2025
 * Version: v0.0.1
 *
 */

require('dotenv').config();
console.log('Loaded ENV:', process.env.MONGO_URI);
console.log('Port:', process.env.APP_PORT);


// imports modules & dependencies
const app = require('./src/app');
const logger = require('./src/middleware/winston.logger');

// app listens to .env defined port
app.listen(process.env.APP_PORT, () => {
  logger.info(`App server running on: ${process.env.APP_BASE_URL}`);
});
