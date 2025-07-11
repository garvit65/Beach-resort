/**
 * @name Hotel Room Booking System
 * @author Garvit
 * @description Hotel Room Booking and Management System Software ~ Developed By Garvit
 * @copyright ©2025 ― Garvit. All rights reserved.
 * @version v0.0.1
 *
 */

const currentDateTime = require('../lib/current.date.time');

/**
 * function to all API same formatted success response provider
 * @param {Number} resultCode API response defined custom result_code
 * @param {String} title API response title based on result_code
 * @param {String} message API response your defined message
 * @param {*} data Send any kind of data in API response
 * @param {*} maintenance API provide any kind of maintenance information
 * @returns success response return for all API's
 */
exports.successResponse = (resultCode, title, message, data, maintenance) => ({
  result_code: resultCode,
  time: currentDateTime(),
  maintenance_info: maintenance || null,
  result: {
    title, message, data
  }
});

/**
 * function to all API same formatted error response provider
 * @param {Number} resultCode API response defined custom result_code
 * @param {String} title API response title based on result_code
 * @param {*} error Send any kind or error in API response
 * @param {*} maintenance API provide any kind of maintenance information
 * @returns error response return for all API's
 */
exports.errorResponse = (resultCode, title, error, maintenance) => ({
  result_code: resultCode,
  time: currentDateTime(),
  maintenance_info: maintenance || null,
  result: {
    title, error
  }
});
