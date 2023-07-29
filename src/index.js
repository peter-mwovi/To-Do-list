import './style.css';
import {
  createTaskElement,
  deleteTaskElement,
  updateTaskText,
  arrangeIndexes,
} from './taskFunction.js';

let tasksLocal = [];

window.loadTasksToLocalStorage = () => {
  const text = JSON.stringify(tasksLocal);
  localStorage.setItem('tasks', text);
};

const displayTaskElement = (task) => {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-list');

  const taskIndex = document.createElement('span');
  taskIndex.classList.add('task-index');
  taskIndex.value = task.index;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checked');
  checkbox.checked = task.completed;

  const taskText = document.createElement('input');
  taskText.classList.add('task-name');
  taskText.value = task.name;
  if (task.completed) {
    taskText.classList.add('completed-task');
  }

  const moreIcon = document.createElement('span');
  moreIcon.classList.add('three-dot');
  moreIcon.innerHTML = '⋮';

  const deleteIcon = document.createElement('span');
  deleteIcon.classList.add('trash-icon');
  deleteIcon.classList.add('hide-icon');
  deleteIcon.innerHTML = '&#128465;';

  taskItem.appendChild(taskIndex);
  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskText);
  taskItem.appendChild(moreIcon);
  taskItem.appendChild(deleteIcon);

  return taskItem;
};

function activateDeleteListener(container) {
  container.addEventListener('click', (e) => {
    const delBtn = e.target.closest('.trash-icon');
    if (delBtn) {
      const parent = delBtn.parentNode;
      const taskIndex = Number(parent.querySelector('.task-index').value);
      deleteTaskElement(tasksLocal, taskIndex);
      arrangeIndexes(tasksLocal); // Reassign correct indexes after deletion
      displayTasks(); // Redisplay the updated task list
    }
  });
}

function activateMoreListeners() {
  const moreBtn = document.querySelectorAll('.three-dot');
  moreBtn.forEach((mb) => {
    mb.addEventListener('click', (e) => {
      const clickedBtn = e.target;
      const parent = clickedBtn.parentNode;
      const delBtn = parent.getElementsByClassName('trash-icon')[0];
      if (delBtn.classList.contains('hide-icon')) {
        delBtn.classList.remove('hide-icon');
        activateDeleteListener(delBtn);
      } else {
        delBtn.classList.add('hide-icon');
      }
    });
  });
}

function activateCheckboxListeners() {
  const checkboxInput = document.querySelectorAll('.checked');
  checkboxInput.forEach((cbi) => {
    cbi.addEventListener('change', (e) => {
      const clickedCheck = e.target;
      const parent = clickedCheck.parentNode;
      const taskInput = parent.getElementsByClassName('task-name')[0];
      if (clickedCheck.checked) {
        taskInput.classList.add('completed-task');
      } else {
        taskInput.classList.remove('completed-task');
      }
    });
  });
}

function activateTaskInputListeners() {
  const taskInput = document.querySelectorAll('.task-name');
  taskInput.forEach((ti) => {
    const parent = ti.parentNode;
    const taskIndex = Number(
      parent.getElementsByClassName('task-index')[0].value,
    );
    ti.addEventListener('change', () => {
      updateTaskText(ti.value, taskIndex, tasksLocal);
    });
  });
}

const displayTasks = () => {
  const taskList = document.getElementById('lists');
  // Clear the existing tasks from the DOM
  taskList.innerHTML = '';
  if (tasksLocal.length > 0) {
    tasksLocal.forEach((task) => {
      const taskItem = document.createElement('li'); // Create the <li> element
      const taskElement = displayTaskElement(task);
      taskItem.appendChild(taskElement); // Append the task element to the <li>
      taskList.appendChild(taskItem); // Append the <li> to the task list container
    });
    activateMoreListeners();
    activateCheckboxListeners();
    activateTaskInputListeners();
  }
  // Pass the taskList container to the activateDeleteListener function
  activateDeleteListener(taskList);
};

document.getElementById('add-btn').addEventListener('click', () => {
  const taskInput = document.getElementById('task-input');
  const taskName = taskInput.value.trim();
  if (taskName !== '') {
    createTaskElement(taskName, tasksLocal);
    tasksLocal = JSON.parse(localStorage.getItem('tasks'));
    document.getElementById('lists').innerHTML = ''; // Clear the existing task list
    displayTasks(); // Redisplay the updated task list
    taskInput.value = '';
  }
});

const loadTasksFromLocalStorage = () => {
  tasksLocal = localStorage.getItem('tasks')
    ? JSON.parse(localStorage.getItem('tasks'))
    : [];
};

window.onload = () => {
  loadTasksFromLocalStorage();
  displayTasks();
};

// Use DOMContentLoaded event to ensure the code executes after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', () => {
  loadTasksFromLocalStorage();
  displayTasks();
});
