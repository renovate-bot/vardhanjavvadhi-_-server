const express = require('express');
const router = express.Router();
const Controller = require('../controller/controller');
const projection = require('../controller/controller').projection;
const filterController = require('../controller/filter');
const Data = require('../models/model');

 router.get('/data', (req, res) => Controller.getData(req, res, projection));



// Route for filtering data by sector
router.get('/data/sector/:sector', filterController.filterBySector);

// Route for filtering data by country
router.get('/data/country/:country', filterController.filterByCountry);

//route for filtering data by intensity
router.get('/data/intensity/:intensity', filterController.filterByIntensity);

//route for filtering data by region
router.get('/data/region/:region', filterController.filterByRegion)

//route for filtering data by topic
router.get('/data/topic/:topic', filterController.filterByTopic)

//route for filtering data by source
router.get('/data/source/:source', filterController.filterBySource)

//route for filtering data by source
router.get('/data/pestle/:pestle', filterController.filterByPestle)

//route for filtering data by endyear
router.get('/data/end_year/:end_year', filterController.filterByEndyear);

//route for filtering data by endyear
router.get('/data/relevance/:relevance', filterController.filterByRelevance);

//route for filtering data by endyear
router.get('/data/likelihood/:likelihood', filterController.filterByLikelihood);

//route for filtering data by swot
router.get('/data/swot/:category', filterController.filterBySwot);

module.exports = router;
 