/**
 * @name Hotel Room Booking System
 * @author Garvit
 * @description Hotel Room Booking and Management System Software ~ Developed By Garvit
 * @copyright ©2025 ― Garvit. All rights reserved.
 * @version v0.0.1
 *
 */

const { errorResponse } = require('../configs/app.response');

// 404 - not found error handler
// eslint-disable-next-line no-unused-vars
exports.notFoundRoute = (_req, res, _next) => {
  res.status(404).json(errorResponse(
    4,
    'UNKNOWN ACCESS',
    'Sorry! Your request url was not found.'
  ));
};

// 500 - internal server error handler
exports.errorHandler = (err, _req, res, next) => {
  if (res.headersSent) {
    return next('Something went wrong. App server error.');
  }
  if (err.message) {
    res.status(500).json(errorResponse(
      2,
      'SERVER SIDE ERROR',
      err.message
    ));
  } else {
    res.status(500).json(errorResponse(
      2,
      'SERVER SIDE ERROR',
      'Something went wrong. There was an error.'
    ));
  }
};
