const {Router} = require('express');
const router = Router();

const { getState, getCountyById } = require('../controllers/index.controller');

router.get('/state', getState);
router.get('/county/:id', getCountyById);

module.exports = router;