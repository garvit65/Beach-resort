/**
 * @name Hotel Room Booking System
 * @author Garvit
 * @description Hotel Room Booking and Management System Software ~ Developed By Garvit
 * @copyright ©2025 ― Garvit. All rights reserved.
 * @version v0.0.1
 *
 */

const router = require('express').Router();
const roomImageUpload = require('../middleware/room.image.upload');
const { isAuthenticatedUser, isAdmin } = require('../middleware/app.authentication');

const {
  createRoom, getRoomsList, getRoomByIdOrSlugName, editRoomByAdmin, deleteRoomById, getFeaturedRoomsList
} = require('../controllers/room.controllers');

// route for create new room
router.route('/create-room').post(isAuthenticatedUser, isAdmin, roomImageUpload.array('room_images', 5), createRoom);

// routes for get all, single and featured rooms list
router.route('/all-rooms-list').get(getRoomsList);
router.route('/get-room-by-id-or-slug-name/:id').get(getRoomByIdOrSlugName);
router.route('/featured-rooms-list').get(getFeaturedRoomsList);

// routes for edit and delete room by admin
router.route('/edit-room/:id').put(isAuthenticatedUser, isAdmin, roomImageUpload.array('room_images', 5), editRoomByAdmin);
router.route('/delete-room/:id').delete(isAuthenticatedUser, isAdmin, deleteRoomById);

module.exports = router;
