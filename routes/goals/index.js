const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const goalsController = require('../../controllers/goals');

router.get('/', goalsController.listGoals);

router.get('/new', goalsController.newGoalForm);

router.post('/new', 
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required')
  ],
  goalsController.createGoal
);

router.get('/:id', goalsController.getGoal);

router.get('/:id/edit', goalsController.editGoalForm);

router.post('/:id/edit',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required')
  ],
  goalsController.updateGoal
);

router.post('/:id/delete', goalsController.deleteGoal);

module.exports = router;
