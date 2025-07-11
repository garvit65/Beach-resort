/**
 * @name Hotel Room Booking System
 * @author Garvit
 * @description Hotel Room Booking and Management System Software ~ Developed By Garvit
 * @copyright ©2025 ― Garvit. All rights reserved.
 * @version v0.0.1
 *
 */

const allowedOrigins = [
  'http://localhost:3033',
  'http://localhost:3034',
  'http://localhost:5500',
  'https://api-beach-resort.srmukul.com',
  'https://admin-beach-resort.vercel.app',
  'https://mukul-beach-resort.vercel.app'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS origin'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

module.exports = corsOptions;
