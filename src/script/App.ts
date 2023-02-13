import { makeToDo } from './ToDo';
import { makeProject } from './Project';
import { board } from './Board';
import { displayTasks, makeModals } from './DomMaker';
import '../style/style.scss';

const first = makeToDo('Eat', 'Eat tonight', new Date(), 'Important', true);
const project = makeProject('Hey');
project.addToDo(first.getToDo());
displayTasks(project.getProject());

const modalListener = (() => {
  const openModalBtn = document.querySelector('#add-btn') as HTMLDivElement;
  const closeModalBtn = document.querySelector('#close-btn') as HTMLDivElement;

  openModalBtn.addEventListener('click', makeModals().openModal);
  closeModalBtn.addEventListener('click', makeModals().closeModal);
})();
