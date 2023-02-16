import { Project } from './Project';
import { taskTag, projectTag } from './Tags';
import { makeToDo, ToDo } from './ToDo';

export const displayTasks = (project: Project) => {
  const tasks = document.getElementById('todos') as HTMLDivElement;
  const range = document.createRange();
  range.selectNode(tasks);
  tasks.textContent = '';
  project.tasks.forEach((task, i) => {
    const isImportant = task.priority === 'Important' ? 'checked' : '';
    const isDone = task.done === true ? 'checked' : '';
    const date =
      task.dueDate === 'No Date Due'
        ? 'No Date Due'
        : task.dueDate.toDateString();
    const taskFragment = taskTag(
      task.title,
      date,
      task.desc,
      isImportant,
      isDone,
      i
    );
    tasks.appendChild(range.createContextualFragment(taskFragment));
  });
};

export const displayBoard = (board: Project[]) => {
  const listBoard = document.querySelector('#project-list') as HTMLElement;
  const range = document.createRange();
  range.selectNode(listBoard);
  listBoard.textContent = '';
  board.forEach((project, i) => {
    const projectFragment = projectTag(project.projectName, i);
    listBoard.appendChild(range.createContextualFragment(projectFragment));
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
  const errorTitle = document.getElementById('title-error') as HTMLSpanElement;
  if (!taskTitle.value) {
    errorTitle.classList.remove('hidden');
    return;
  }
  errorTitle.classList.add('hidden');
  const taskDesc = document.getElementById('task-desc') as HTMLInputElement;
  const taskDate = document.getElementById('task-date') as HTMLInputElement;
  const taskPriority = document.getElementById(
    'task-priority'
  ) as HTMLInputElement;

  const priority = taskPriority.checked ? 'Important' : 'Not Important';
  const date = taskDate.value ? new Date(taskDate.value) : 'No Date Due';
  const task = makeToDo(taskTitle.value, taskDesc.value, date, priority, false);
  return task;
};

export const newProjectForm = () => {
  const newProjectInp = document.querySelector(
    '#project-name-inp'
  ) as HTMLInputElement;

  const openProjectInp = () => {
    newProjectInp.classList.remove('hidden');
  };

  const closeProjectInp = () => {
    newProjectInp.classList.add('hidden');
  };

  return {
    openProjectInp,
    closeProjectInp,
    newProjectInp,
  };
};
