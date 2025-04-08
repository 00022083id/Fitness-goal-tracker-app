const express = require('express');
const router = express.Router();
const goalsController = require('../controllers/goals/index');

router.get('/new', goalsController.newGoalForm);

// GET home page
router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Fitness Goal Tracker', 
    message: 'This web application was created to fulfill Web Technology module’s requirements and does not represent an actual company or service.' 
  });
});

module.exports = router;
