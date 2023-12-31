function createTaskElement(taskName, tasksLocal) {
  // If tasksLocal is not already an array, initialize it as an empty array
  if (!Array.isArray(tasksLocal)) {
    tasksLocal = [];
  }

  const index = tasksLocal.length + 1;
  const complete = false;
  const taskString = { index, name: taskName, completed: complete };
  tasksLocal.push(taskString);
  localStorage.setItem('tasks', JSON.stringify(tasksLocal));
}

function arrangeIndexes(tasksLocal) {
  for (let i = 0; i < tasksLocal.length; i += 1) {
    tasksLocal[i].index = i + 1;
  }
}

function deleteTaskElement(tasksLocal, taskIndex) {
  tasksLocal = tasksLocal.filter((t) => t.index !== taskIndex);
  arrangeIndexes(tasksLocal); // Reassign correct indexes after deletion
  localStorage.setItem('tasks', JSON.stringify(tasksLocal));
  document.location.reload();
}

function updateTaskText(value, index, tasksLocal) {
  // Check if the task index is valid
  if (index < 1 || index > tasksLocal.length) {
    console.error('Invalid task index.');
    return;
  }

  // Update the task text if the task exists
  tasksLocal[index - 1].name = value;
  localStorage.setItem('tasks', JSON.stringify(tasksLocal));
}

export {
  createTaskElement, deleteTaskElement, updateTaskText, arrangeIndexes,
};