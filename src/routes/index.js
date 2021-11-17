const {Router} = require('express');
const router = Router();

const { getCounty, getState } = require('../controllers/index.controller');
router.get('/county', getCounty);
router.get('/state', getState);

module.exports = router;