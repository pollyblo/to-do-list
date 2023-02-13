import { Project } from './Project';

export const board = () => {
  const mainBoard: Project[] = [];

  const getBoard = (): Project[] => {
    return mainBoard;
  };

  const addProject = (project: Project) => {
    let exists = false;
    mainBoard.forEach((proj) => {
      if (proj === project) {
        exists = true;
      }
    });
    if (!exists) {
      mainBoard.push(project);
    }
  };

  const removeProject = (project: Project) => {
    mainBoard.forEach((proj, i) => {
      console.log(i, proj);
      if (proj.tasks === project.tasks) {
        mainBoard.splice(i, 1);
      }
    });
    return mainBoard;
  };

  return {
    getBoard,
    addProject,
    removeProject,
  };
};
