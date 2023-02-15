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
      defaultProject.addToDo(task!.getToDo());
      makeModals().closeModal();
      displayTasks(defaultProject.getProject());
      taskForm.reset();
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
        const idNum = Number(p.getAttribute('data-id-proj'));
        const project = mainBoard.getBoard()[idNum];
        console.log(project);
        displayTasks(project);
      });
    });
  };

  return {
    addTask,
    addProject,
    triggerProject,
  };
})();

listeners.addTask();
listeners.addProject();
listeners.triggerProject();
