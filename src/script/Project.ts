import { ToDo } from './ToDo';

export interface Project {
  projectName: string;
  tasks: ToDo[];
  setName: (name: string) => void;
  addToDo: (toDo: ToDo) => void;
  removeToDo: (toDo: ToDo) => void;
  getProject: () => Project;
}

export const makeProject = (projectName: string) => {
  const tasks: ToDo[] = [];

  const getProject = (): Project => {
    return { projectName, tasks, setName, addToDo, removeToDo, getProject };
  };

  const setName = (name: string) => {
    projectName = name;
  };

  const addToDo = (toDo: ToDo) => {
    let exists = false;
    tasks.forEach((task) => {
      if (task === toDo) {
        exists = true;
      }
    });
    if (!exists) {
      tasks.push(toDo);
    }
  };

  const removeToDo = (toDo: ToDo) => {
    tasks.forEach((task, i) => {
      if (task === toDo) {
        tasks.splice(i, 1);
      }
    });
  };

  return {
    getProject,
    addToDo,
    removeToDo,
    setName,
  };
};
