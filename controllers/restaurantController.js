const Restaurant = require('../models/Restaurant');

//Get all Restaurants
const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};


//Add a new Restaurant
const addRestaurant = async (req, res) => {
    const { name, description, location, contactNumber } = req.body;

    try {
        const newRestaurant = new Restaurant({ name, description, location, contactNumber });
        const restaurant = await newRestaurant.save();
        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update restaurant details
const updateRestaurant = async (req, res) => {
    const { name, description, location, contactNumber } = req.body;

    try {
        let restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ msg: 'Restaurant not found' });

        restaurant = await Restaurant.findByIdAndUpdate(req.params.id, { name, description, location, contactNumber }, { new: true });
        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};


// Delete a restaurant
const deleteRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ msg: 'Restaurant not found' });

        await Restaurant.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Restaurant removed' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Search a restaurant
const searchRestaurant = async (req, res) => {
    const { q } = req.query;

    try {
        const restaurants = q.length ? await Restaurant.find({
            $text: { $search: q}
        }) : await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllRestaurants,
    addRestaurant,
    updateRestaurant,
    deleteRestaurant,
    searchRestaurant
};