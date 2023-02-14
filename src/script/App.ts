import { makeToDo } from './ToDo';
import { makeProject } from './Project';
import { board } from './Board';
import { displayTasks, makeModals, saveTaskForm } from './DomMaker';
import '../style/style.scss';

const defaultProject = makeProject('Default');

const listeners = (() => {
  const openModalBtn = document.querySelector('#add-btn') as HTMLDivElement;
  const closeModalBtn = document.querySelector('#close-btn') as HTMLDivElement;
  const confirmModalBtn = document.querySelector(
    '#submit-task-btn'
  ) as HTMLDivElement;
  const taskForm = document.querySelector('#task-form') as HTMLFormElement;

  openModalBtn.addEventListener('click', makeModals().openModal);
  closeModalBtn.addEventListener('click', makeModals().closeModal);
  confirmModalBtn.addEventListener('click', () => {
    const task = saveTaskForm();
    console.log(task.getToDo());
    defaultProject.addToDo(task.getToDo());
    console.log(defaultProject.getProject());
    makeModals().closeModal();
    displayTasks(defaultProject.getProject());
    taskForm.reset();
  });
})();
