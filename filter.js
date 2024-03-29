const Data = require('../models/model');

exports.filterBySector = async (req, res) => {
    try {
      const sector = req.params.sector;
      const filteredData = await Data.find({ sector: sector });
      res.json(filteredData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

// Controller function for filtering data by country
exports.filterByCountry = async (req, res) => {
    try {
        const country = req.params.country;
        const filteredData = await Data.find({ country: country });
        res.json(filteredData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.filterByIntensity = async(req, res)=>{
    try {
        const intensity = req.params.intensity;
        const filteredData = await Data.find({ intensity: intensity });
        res.json(filteredData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.filterByRegion = async(req, res)=>{
    try {
        const region = req.params.region;
        const filteredData = await Data.find({ region: region });
        res.json(filteredData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.filterByTopic = async(req, res)=>{
    try {
        const topic = req.params.topic;
        const filteredData = await Data.find({ topic: topic });
        res.json(filteredData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.filterBySource = async(req, res)=>{
    try {
        const source = req.params.source;
        const filteredData = await Data.find({ source: source });
        res.json(filteredData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.filterByPestle = async(req, res)=>{
    try {
        const pestle = req.params.pestle;
        const filteredData = await Data.find({ pestle: pestle });
        res.json(filteredData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.filterBySwot = async (req, res) => {
    try {
      const category = req.params.category;
      let filteredData;
  
      switch (category) {
        case 'strengths':
          filteredData = await Data.find({ intensity: { $gt: 4 } });
          break;
        case 'weaknesses':
          filteredData = await Data.find({ intensity: { $lte: 4 } });
          break;
        case 'opportunities':
          filteredData = await Data.find({ impact: 'increase' });
          break;
        case 'threats':
          filteredData = await Data.find({ impact: 'decrease' });
          break;
        default:
          res.status(400).json({ message: 'Invalid SWOT category' });
          return;
      }
  
      res.json(filteredData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

  exports.filterByEndyear = async (req, res) => {
    try {
        const end_year = req.params.end_year;
        const filteredData = await Data.find({ end_year: end_year });
        res.json(filteredData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.filterByRelevance = async (req, res) => {
    try {
        const relevance = req.params.relevance;
        const filteredData = await Data.find({ relevance: relevance });
        res.json(filteredData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.filterByLikelihood = async (req, res) => {
    try {
        const likelihood = req.params.likelihood;
        const filteredData = await Data.find({ likelihood: likelihood });
        res.json(filteredData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};