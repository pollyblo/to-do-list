export const taskTag = (
  title: string,
  date: string,
  desc: string,
  checkImportant: string,
  checkDone: string,
  i: number
) => {
  return `<div class="todo-container">
  <div>
    <h2 class="todo-title">${title}</h2>
    <span class="todo-date">${date}</span>
  </div>
  <p class="todo-desc hidden" data-id-task=${i}>${desc}</p>
  <div class="hidden check-important">
    <label for="important">Important</label>
    <input type="checkbox" id="todo-important" name="important"  ${checkImportant}/>
    <label for="done">Done</label>
    <input type="checkbox" name="done" id="todo-done" ${checkDone}/>
  </div>
  </div>`;
};

export const projectTag = (projectName: string, i: number) => {
  return `<li class="project-list-item" data-id-proj="${i}">${projectName}</li>`;
};
