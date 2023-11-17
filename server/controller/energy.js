const Energy = require("../models/energy");

const getAllEnergies = async (req, res) => {
  try {
    console.log('Fetching energy data...');
    const energy = await Energy.find({});
    console.log('Fetched energy data:', energy);
    res.status(200).json({
      energy,
    });
  } catch (e) {
    console.error('Error:', e);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

module.exports = { getAllEnergies };
