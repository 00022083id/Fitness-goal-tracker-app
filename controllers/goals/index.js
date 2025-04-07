const goalService = require('../../services/goals');
const { validationResult } = require('express-validator');

exports.listGoals = (req, res) => {
  const goals = goalService.getAllGoals();
  res.render('goals', { title: 'All Fitness Goals', goals });
};

exports.newGoalForm = (req, res) => {
  res.render('goalForm', { title: 'Add New Fitness Goal', goal: {} });
};

exports.createGoal = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('goalForm', { title: 'Add New Fitness Goal', goal: req.body, errors: errors.array() });
  }
  goalService.createGoal(req.body);
  res.redirect('/goals');
};

exports.getGoal = (req, res) => {
  const goal = goalService.getGoalById(req.params.id);
  if (!goal) {
    return res.status(404).send('Goal not found');
  }
  res.render('goalDetail', { title: 'Goal Details', goal });
};

exports.editGoalForm = (req, res) => {
  const goal = goalService.getGoalById(req.params.id);
  if (!goal) {
    return res.status(404).send('Goal not found');
  }
  res.render('goalForm', { title: 'Edit Fitness Goal', goal });
};

exports.updateGoal = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.body.id = req.params.id;
    return res.render('goalForm', { title: 'Edit Fitness Goal', goal: req.body, errors: errors.array() });
  }
  const updated = goalService.updateGoal(req.params.id, req.body);
  if (!updated) {
    return res.status(404).send('Goal not found');
  }
  res.redirect('/goals');
};

exports.deleteGoal = (req, res) => {
  const deleted = goalService.deleteGoal(req.params.id);
  if (!deleted) {
    return res.status(404).send('Goal not found');
  }
  res.redirect('/goals');
};
