let goals = [];
let currentId = 1;

exports.getAllGoals = () => {
  return goals;
};

exports.createGoal = (data) => {
  const goal = {
    id: currentId.toString(),
    title: data.title,
    description: data.description,
    target: data.target || '',
    progress: data.progress || ''
  };
  currentId++;
  goals.push(goal);
  return goal;
};

exports.getGoalById = (id) => {
  return goals.find(goal => goal.id === id);
};

exports.updateGoal = (id, data) => {
  const goal = goals.find(goal => goal.id === id);
  if (goal) {
    goal.title = data.title;
    goal.description = data.description;
    goal.target = data.target || '';
    goal.progress = data.progress || '';
    return true;
  }
  return false;
};

exports.deleteGoal = (id) => {
  const index = goals.findIndex(goal => goal.id === id);
  if (index !== -1) {
    goals.splice(index, 1);
    return true;
  }
  return false;
};
