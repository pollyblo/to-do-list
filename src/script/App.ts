import { makeToDo } from './ToDo';
import { makeProject, Project } from './Project';
import { board } from './Board';
import {
  displayTasks,
  makeModals,
  saveTaskForm,
  newProjectForm,
  displayBoard,
} from './DomMaker';
import '../style/style.scss';

const mainBoard = board();
const defaultProject = makeProject('Default');
mainBoard.addProject(defaultProject.getProject());

const listeners = (() => {
  let idProj = 0;

  const addTask = () => {
    const openModalBtn = document.querySelector('#add-btn') as HTMLDivElement;
    const closeModalBtn = document.querySelector(
      '#close-btn'
    ) as HTMLDivElement;
    const confirmModalBtn = document.querySelector(
      '#submit-task-btn'
    ) as HTMLDivElement;
    const taskForm = document.querySelector('#task-form') as HTMLFormElement;

    openModalBtn.addEventListener('click', makeModals().openModal);

    closeModalBtn.addEventListener('click', makeModals().closeModal);

    confirmModalBtn.addEventListener('click', () => {
      const task = saveTaskForm();
      const project = mainBoard.getBoard()[idProj];
      project.addToDo(task!.getToDo());
      makeModals().closeModal();
      displayTasks(project.getProject());
      taskForm.reset();
      openToDo();
    });
  };

  const addProject = () => {
    const newProjectBtn = document.querySelector(
      '#new-project-btn'
    ) as HTMLButtonElement;

    newProjectBtn.addEventListener('click', newProjectForm().openProjectInp);

    newProjectForm().newProjectInp.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const projectName = newProjectForm().newProjectInp.value;
        const project = makeProject(projectName);
        mainBoard.addProject(project.getProject());
        newProjectForm().closeProjectInp();
        displayBoard(mainBoard.getBoard());
        newProjectForm().newProjectInp.value = '';
        triggerProject();
      }
    });
  };

  const triggerProject = () => {
    const projectList = document.querySelectorAll('.project-list-item');
    projectList.forEach((p) => {
      p.addEventListener('click', () => {
        idProj = Number(p.getAttribute('data-id-proj'));
        const project = mainBoard.getBoard()[idProj];
        displayTasks(project);
        openToDo();
      });
    });
  };

  const openToDo = () => {
    const toDoContainer = document.querySelectorAll('.todo-container');
    const toDoDesc = document.querySelectorAll('.todo-desc');
    const checkImportant = document.querySelectorAll('.check-important');
    toDoContainer.forEach((t, i) => {
      t.addEventListener('click', () => {
        toDoDesc[i].classList.toggle('hidden');
        checkImportant[i].classList.toggle('hidden');
      });
    });
  };

  return {
    addTask,
    addProject,
    triggerProject,
    openToDo,
  };
})();

listeners.addTask();
listeners.addProject();
listeners.triggerProject();
listeners.openToDo();
