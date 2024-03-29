const Data = require('../models/model');
const projection = {
    _id: 1,
    end_year: 1,
    intensity: 1,
    sector: 1,
    topic: 1,
    insight: 1,
    url: 1,
    added: 1,
    published: 1,
    country: 1,
    relevance: 1,
    pestle: 1,
    source: 1,
    title: 1,
    likelihood: 1
};

exports.getData = async (req, res) => {
  try {
      const data = await Data.find({}, projection).limit(10000);
      res.json(data);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
  }
};


exports.projection = projection;
