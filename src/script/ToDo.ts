export interface ToDo {
  title: string;
  desc: string;
  dueDate: Date | 'No Date Due';
  priority: priority;
  done: boolean;
  updatePrio: () => void;
  isDone: () => void;
}

export type priority = 'Important' | 'Not Important';

export const makeToDo = (
  title: string,
  desc: string,
  dueDate: Date | 'No Date Due',
  priority: priority,
  done: boolean
) => {
  const updatePrio = () => {
    priority = priority === 'Important' ? 'Not Important' : 'Important';
  };

  const isDone = () => {
    done = done ? false : true;
  };

  const getToDo = (): ToDo => {
    return {
      title,
      desc,
      dueDate,
      priority,
      done,
      updatePrio,
      isDone,
    };
  };

  return {
    updatePrio,
    getToDo,
    isDone,
  };
};
