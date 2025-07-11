/**
 * @name Hotel Room Booking System
 * @author Garvit
 * @description Hotel Room Booking and Management System Software ~ Developed By Garvit
 * @copyright ©2025 ― Garvit. All rights reserved.
 * @version v0.0.1
 *
 */

const router = require('express').Router();
const { getDashboardData } = require('../controllers/apps.controllers');
const { isAuthenticatedUser, isBlocked, isAdmin } = require('../middleware/app.authentication');

// get dashboard info by admin
router.route('/dashboard').get(isAuthenticatedUser, isBlocked, isAdmin, getDashboardData);

module.exports = router;
