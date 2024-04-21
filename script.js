document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');
    const addTaskButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const deleteAllButton = document.getElementById('delete-all-btn');
  
    addTaskButton.addEventListener('click', () => {
      const taskDescription = taskInput.value.trim();
      const selectedDate = dateInput.value;
  
      if (taskDescription !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
  
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        taskItem.appendChild(checkbox);
  
        const taskText = document.createElement('span');
        taskText.textContent = taskDescription;
        taskItem.appendChild(taskText);
  
        const taskDate = document.createElement('span');
        taskDate.textContent = selectedDate;
        taskDate.className = 'task-date';
        taskItem.appendChild(taskDate);
  
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-task';
        taskItem.appendChild(deleteBtn);
  
        taskList.appendChild(taskItem);
        taskInput.value = '';
        dateInput.value = '';
  
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            taskText.classList.add('completed-task');
            showCongratulations(taskDescription);
          } else {
            taskText.classList.remove('completed-task');
          }
        });
  
        deleteBtn.addEventListener('click', () => {
          taskList.removeChild(taskItem);
        });
      }
    });
  
    deleteAllButton.addEventListener('click', () => {
      while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
      }
    });
  
    function showCongratulations(taskDescription) {
      alert(`Congratulations! You completed the task: ${taskDescription}`);
    }
  });