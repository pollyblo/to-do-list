import { Project } from './Project';
import { makeTask } from './Tags';
import { makeToDo, ToDo } from './ToDo';

export const displayTasks = (project: Project) => {
  const tasks = document.getElementById('todos') as HTMLDivElement;
  const range = document.createRange();
  range.selectNode(tasks);
  project.tasks.forEach((task) => {
    const isImportant = task.priority === 'Important' ? 'checked' : '';
    const isDone = task.done === true ? 'checked' : '';
    const taskFragment = makeTask(
      task.title,
      task.dueDate.toDateString(),
      task.desc,
      isImportant,
      isDone
    );
    tasks.appendChild(range.createContextualFragment(taskFragment));
  });
};

export const makeModals = () => {
  const modal = document.querySelector('.modal') as HTMLElement;
  const overlay = document.querySelector('.overlay') as HTMLElement;

  const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  return {
    openModal,
    closeModal,
  };
};

export const saveTaskForm = () => {
  const taskTitle = document.getElementById('task-title') as HTMLInputElement;
  const taskDesc = document.getElementById('task-desc') as HTMLInputElement;
  const taskDate = document.getElementById('task-date') as HTMLInputElement;
  const taskPriority = document.getElementById(
    'task-priority'
  ) as HTMLInputElement;
  const priority = taskPriority.checked ? 'Important' : 'Not Important';
  const date = new Date(taskDate.value);
  const task = makeToDo(taskTitle.value, taskDesc.value, date, priority, false);
  return task;
};
