const express = require('express');
const router = express.Router();

const {
    getAllRestaurants,
    addRestaurant,
    updateRestaurant,
    deleteRestaurant,
    searchRestaurant
} = require('../controllers/restaurantController');


// @route   GET /api/restaurants
// @desc    Get all restaurants
// @access  Public
router.get('/', getAllRestaurants);

// @route   POST /api/restaurants
// @desc    Add a new restaurant
// @access  Public
router.post('/', addRestaurant);

// @route   PUT /api/restaurants/:id
// @desc    Update restaurant details
// @access  Public
router.put('/:id', updateRestaurant);

// @route   DELETE /api/restaurants/:id
// @desc    Delete a restaurant
// @access  Public
router.delete('/:id', deleteRestaurant);

// @route GET /api/restaurants
// @desc    Search a query
// @access  Public
router.get('/search', searchRestaurant    );

module.exports = router;