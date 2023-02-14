export interface ToDo {
  title: string;
  desc: string;
  dueDate: Date;
  priority: priority;
  done: boolean;
}

export type priority = 'Important' | 'Not Important';

export const makeToDo = (
  title: string,
  desc: string,
  dueDate: Date,
  priority: priority,
  done: boolean
) => {
  const toDoObject: ToDo = {
    title,
    desc,
    dueDate,
    priority,
    done,
  };

  const updatePrio = (): ToDo => {
    toDoObject.priority =
      toDoObject.priority === 'Important' ? 'Not Important' : 'Important';
    return toDoObject;
  };

  const isDone = () => {
    if (toDoObject.done === undefined) toDoObject.done = false;
    toDoObject.done = toDoObject.done ? false : true;
  };

  const getToDo = (): ToDo => {
    return toDoObject;
  };

  return {
    updatePrio,
    getToDo,
    isDone,
  };
};
