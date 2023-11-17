const express = require('express');
const router = express.Router();


const { getAllEnergies } = require('../controller/energy');

router.route('/getDatas').post(getAllEnergies);  // Adjust the route path as needed
router.route('/getFilters').get(getAllEnergies);  // Adjust the route path as needed

module.exports = router;
