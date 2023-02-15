/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/script/Board.ts":
/*!*****************************!*\
  !*** ./src/script/Board.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "board": () => (/* binding */ board)
/* harmony export */ });
const board = () => {
    const mainBoard = [];
    const getBoard = () => {
        return mainBoard;
    };
    const addProject = (project) => {
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
    const removeProject = (project) => {
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


/***/ }),

/***/ "./src/script/DomMaker.ts":
/*!********************************!*\
  !*** ./src/script/DomMaker.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayBoard": () => (/* binding */ displayBoard),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "makeModals": () => (/* binding */ makeModals),
/* harmony export */   "newProjectForm": () => (/* binding */ newProjectForm),
/* harmony export */   "saveTaskForm": () => (/* binding */ saveTaskForm)
/* harmony export */ });
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tags */ "./src/script/Tags.ts");
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDo */ "./src/script/ToDo.ts");


const displayTasks = (project) => {
    const tasks = document.getElementById('todos');
    const range = document.createRange();
    range.selectNode(tasks);
    tasks.textContent = '';
    project.tasks.forEach((task) => {
        const isImportant = task.priority === 'Important' ? 'checked' : '';
        const isDone = task.done === true ? 'checked' : '';
        const date = task.dueDate === 'No Date Due'
            ? 'No Date Due'
            : task.dueDate.toDateString();
        const taskFragment = (0,_Tags__WEBPACK_IMPORTED_MODULE_0__.taskTag)(task.title, date, task.desc, isImportant, isDone);
        tasks.appendChild(range.createContextualFragment(taskFragment));
    });
};
const displayBoard = (board) => {
    const listBoard = document.querySelector('#project-list');
    const range = document.createRange();
    range.selectNode(listBoard);
    listBoard.textContent = '';
    board.forEach((project, i) => {
        const projectFragment = (0,_Tags__WEBPACK_IMPORTED_MODULE_0__.projectTag)(project.projectName, i);
        listBoard.appendChild(range.createContextualFragment(projectFragment));
    });
};
const makeModals = () => {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
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
const saveTaskForm = () => {
    const taskTitle = document.getElementById('task-title');
    const errorTitle = document.getElementById('title-error');
    if (!taskTitle.value) {
        errorTitle.classList.remove('hidden');
        return;
    }
    errorTitle.classList.add('hidden');
    const taskDesc = document.getElementById('task-desc');
    const taskDate = document.getElementById('task-date');
    const taskPriority = document.getElementById('task-priority');
    const priority = taskPriority.checked ? 'Important' : 'Not Important';
    const date = taskDate.value ? new Date(taskDate.value) : 'No Date Due';
    const task = (0,_ToDo__WEBPACK_IMPORTED_MODULE_1__.makeToDo)(taskTitle.value, taskDesc.value, date, priority, false);
    return task;
};
const newProjectForm = () => {
    const newProjectInp = document.querySelector('#project-name-inp');
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


/***/ }),

/***/ "./src/script/Project.ts":
/*!*******************************!*\
  !*** ./src/script/Project.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeProject": () => (/* binding */ makeProject)
/* harmony export */ });
const makeProject = (projectName) => {
    const tasks = [];
    const getProject = () => {
        return { projectName, tasks };
    };
    const setName = (name) => {
        projectName = name;
    };
    const addToDo = (toDo) => {
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
    const removeToDo = (toDo) => {
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


/***/ }),

/***/ "./src/script/Tags.ts":
/*!****************************!*\
  !*** ./src/script/Tags.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectTag": () => (/* binding */ projectTag),
/* harmony export */   "taskTag": () => (/* binding */ taskTag)
/* harmony export */ });
const taskTag = (title, date, desc, checkImportant, checkDone) => {
    return `<div class="todo-container">
  <div>
    <h2 class="todo-title">${title}</h2>
    <span class="todo-date">${date}</span>
  </div>
  <p class="todo-desc">${desc}</p>
  <div>
    <label for="important">Important</label>
    <input type="checkbox" id="todo-important" name="important"  ${checkImportant}/>
    <label for="done">Done</label>
    <input type="checkbox" name="done" id="todo-done" ${checkDone}/>
  </div>
  </div>`;
};
const projectTag = (projectName, i) => {
    return `<li class="project-list-item" data-id-proj="${i}">${projectName}</li>`;
};


/***/ }),

/***/ "./src/script/ToDo.ts":
/*!****************************!*\
  !*** ./src/script/ToDo.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeToDo": () => (/* binding */ makeToDo)
/* harmony export */ });
const makeToDo = (title, desc, dueDate, priority, done) => {
    const toDoObject = {
        title,
        desc,
        dueDate,
        priority,
        done,
    };
    const updatePrio = () => {
        toDoObject.priority =
            toDoObject.priority === 'Important' ? 'Not Important' : 'Important';
        return toDoObject;
    };
    const isDone = () => {
        toDoObject.done = toDoObject.done ? false : true;
    };
    const getToDo = () => {
        return toDoObject;
    };
    return {
        updatePrio,
        getToDo,
        isDone,
    };
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/script/App.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/script/Project.ts");
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ "./src/script/Board.ts");
/* harmony import */ var _DomMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DomMaker */ "./src/script/DomMaker.ts");
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/style.scss */ "./src/style/style.scss");




const mainBoard = (0,_Board__WEBPACK_IMPORTED_MODULE_1__.board)();
const defaultProject = (0,_Project__WEBPACK_IMPORTED_MODULE_0__.makeProject)('Default');
mainBoard.addProject(defaultProject.getProject());
const listeners = (() => {
    const addTask = () => {
        const openModalBtn = document.querySelector('#add-btn');
        const closeModalBtn = document.querySelector('#close-btn');
        const confirmModalBtn = document.querySelector('#submit-task-btn');
        const taskForm = document.querySelector('#task-form');
        openModalBtn.addEventListener('click', (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.makeModals)().openModal);
        closeModalBtn.addEventListener('click', (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.makeModals)().closeModal);
        confirmModalBtn.addEventListener('click', () => {
            const task = (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.saveTaskForm)();
            defaultProject.addToDo(task.getToDo());
            (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.makeModals)().closeModal();
            (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(defaultProject.getProject());
            taskForm.reset();
        });
    };
    const addProject = () => {
        const newProjectBtn = document.querySelector('#new-project-btn');
        newProjectBtn.addEventListener('click', (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.newProjectForm)().openProjectInp);
        (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.newProjectForm)().newProjectInp.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const projectName = (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.newProjectForm)().newProjectInp.value;
                const project = (0,_Project__WEBPACK_IMPORTED_MODULE_0__.makeProject)(projectName);
                mainBoard.addProject(project.getProject());
                (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.newProjectForm)().closeProjectInp();
                (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.displayBoard)(mainBoard.getBoard());
                (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.newProjectForm)().newProjectInp.value = '';
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
                (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(project);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzlCLGdCQUFnQix1REFBWTtBQUM1QixnQkFBZ0IseURBQWM7QUFDOUI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFZO0FBQzVCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvc3R5bGUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdC9Cb2FyZC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdC9Eb21NYWtlci50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdC9Qcm9qZWN0LnRzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvc2NyaXB0L1RhZ3MudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHQvVG9Eby50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHQvQXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBjb25zdCBib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQm9hcmQgPSBbXTtcbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG1haW5Cb2FyZDtcbiAgICB9O1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gICAgICAgIG1haW5Cb2FyZC5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvaiA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgbWFpbkJvYXJkLnB1c2gocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBtYWluQm9hcmQuZm9yRWFjaCgocHJvaiwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaSwgcHJvaik7XG4gICAgICAgICAgICBpZiAocHJvai50YXNrcyA9PT0gcHJvamVjdC50YXNrcykge1xuICAgICAgICAgICAgICAgIG1haW5Cb2FyZC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWFpbkJvYXJkO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgeyB0YXNrVGFnLCBwcm9qZWN0VGFnIH0gZnJvbSAnLi9UYWdzJztcbmltcG9ydCB7IG1ha2VUb0RvIH0gZnJvbSAnLi9Ub0RvJztcbmV4cG9ydCBjb25zdCBkaXNwbGF5VGFza3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJyk7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHJhbmdlLnNlbGVjdE5vZGUodGFza3MpO1xuICAgIHRhc2tzLnRleHRDb250ZW50ID0gJyc7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzSW1wb3J0YW50ID0gdGFzay5wcmlvcml0eSA9PT0gJ0ltcG9ydGFudCcgPyAnY2hlY2tlZCcgOiAnJztcbiAgICAgICAgY29uc3QgaXNEb25lID0gdGFzay5kb25lID09PSB0cnVlID8gJ2NoZWNrZWQnIDogJyc7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0YXNrLmR1ZURhdGUgPT09ICdObyBEYXRlIER1ZSdcbiAgICAgICAgICAgID8gJ05vIERhdGUgRHVlJ1xuICAgICAgICAgICAgOiB0YXNrLmR1ZURhdGUudG9EYXRlU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IHRhc2tGcmFnbWVudCA9IHRhc2tUYWcodGFzay50aXRsZSwgZGF0ZSwgdGFzay5kZXNjLCBpc0ltcG9ydGFudCwgaXNEb25lKTtcbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQocmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHRhc2tGcmFnbWVudCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBjb25zdCBkaXNwbGF5Qm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBsaXN0Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHJhbmdlLnNlbGVjdE5vZGUobGlzdEJvYXJkKTtcbiAgICBsaXN0Qm9hcmQudGV4dENvbnRlbnQgPSAnJztcbiAgICBib2FyZC5mb3JFYWNoKChwcm9qZWN0LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RGcmFnbWVudCA9IHByb2plY3RUYWcocHJvamVjdC5wcm9qZWN0TmFtZSwgaSk7XG4gICAgICAgIGxpc3RCb2FyZC5hcHBlbmRDaGlsZChyYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQocHJvamVjdEZyYWdtZW50KSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IG1ha2VNb2RhbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH07XG4gICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGVuTW9kYWwsXG4gICAgICAgIGNsb3NlTW9kYWwsXG4gICAgfTtcbn07XG5leHBvcnQgY29uc3Qgc2F2ZVRhc2tGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlJyk7XG4gICAgY29uc3QgZXJyb3JUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1lcnJvcicpO1xuICAgIGlmICghdGFza1RpdGxlLnZhbHVlKSB7XG4gICAgICAgIGVycm9yVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXJyb3JUaXRsZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2MnKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRhdGUnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1wcmlvcml0eScpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gdGFza1ByaW9yaXR5LmNoZWNrZWQgPyAnSW1wb3J0YW50JyA6ICdOb3QgSW1wb3J0YW50JztcbiAgICBjb25zdCBkYXRlID0gdGFza0RhdGUudmFsdWUgPyBuZXcgRGF0ZSh0YXNrRGF0ZS52YWx1ZSkgOiAnTm8gRGF0ZSBEdWUnO1xuICAgIGNvbnN0IHRhc2sgPSBtYWtlVG9Ebyh0YXNrVGl0bGUudmFsdWUsIHRhc2tEZXNjLnZhbHVlLCBkYXRlLCBwcmlvcml0eSwgZmFsc2UpO1xuICAgIHJldHVybiB0YXNrO1xufTtcbmV4cG9ydCBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0SW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZS1pbnAnKTtcbiAgICBjb25zdCBvcGVuUHJvamVjdElucCA9ICgpID0+IHtcbiAgICAgICAgbmV3UHJvamVjdElucC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9O1xuICAgIGNvbnN0IGNsb3NlUHJvamVjdElucCA9ICgpID0+IHtcbiAgICAgICAgbmV3UHJvamVjdElucC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIG9wZW5Qcm9qZWN0SW5wLFxuICAgICAgICBjbG9zZVByb2plY3RJbnAsXG4gICAgICAgIG5ld1Byb2plY3RJbnAsXG4gICAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgbWFrZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xuICAgIGNvbnN0IGdldFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHByb2plY3ROYW1lLCB0YXNrcyB9O1xuICAgIH07XG4gICAgY29uc3Qgc2V0TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgICAgIHByb2plY3ROYW1lID0gbmFtZTtcbiAgICB9O1xuICAgIGNvbnN0IGFkZFRvRG8gPSAodG9EbykgPT4ge1xuICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrID09PSB0b0RvKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICB0YXNrcy5wdXNoKHRvRG8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUb0RvID0gKHRvRG8pID0+IHtcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2sgPT09IHRvRG8pIHtcbiAgICAgICAgICAgICAgICB0YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UHJvamVjdCxcbiAgICAgICAgYWRkVG9EbyxcbiAgICAgICAgcmVtb3ZlVG9EbyxcbiAgICAgICAgc2V0TmFtZSxcbiAgICB9O1xufTtcbiIsImV4cG9ydCBjb25zdCB0YXNrVGFnID0gKHRpdGxlLCBkYXRlLCBkZXNjLCBjaGVja0ltcG9ydGFudCwgY2hlY2tEb25lKSA9PiB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidG9kby1jb250YWluZXJcIj5cbiAgPGRpdj5cbiAgICA8aDIgY2xhc3M9XCJ0b2RvLXRpdGxlXCI+JHt0aXRsZX08L2gyPlxuICAgIDxzcGFuIGNsYXNzPVwidG9kby1kYXRlXCI+JHtkYXRlfTwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxwIGNsYXNzPVwidG9kby1kZXNjXCI+JHtkZXNjfTwvcD5cbiAgPGRpdj5cbiAgICA8bGFiZWwgZm9yPVwiaW1wb3J0YW50XCI+SW1wb3J0YW50PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0b2RvLWltcG9ydGFudFwiIG5hbWU9XCJpbXBvcnRhbnRcIiAgJHtjaGVja0ltcG9ydGFudH0vPlxuICAgIDxsYWJlbCBmb3I9XCJkb25lXCI+RG9uZTwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkb25lXCIgaWQ9XCJ0b2RvLWRvbmVcIiAke2NoZWNrRG9uZX0vPlxuICA8L2Rpdj5cbiAgPC9kaXY+YDtcbn07XG5leHBvcnQgY29uc3QgcHJvamVjdFRhZyA9IChwcm9qZWN0TmFtZSwgaSkgPT4ge1xuICAgIHJldHVybiBgPGxpIGNsYXNzPVwicHJvamVjdC1saXN0LWl0ZW1cIiBkYXRhLWlkLXByb2o9XCIke2l9XCI+JHtwcm9qZWN0TmFtZX08L2xpPmA7XG59O1xuIiwiZXhwb3J0IGNvbnN0IG1ha2VUb0RvID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IHRvRG9PYmplY3QgPSB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgZG9uZSxcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZVByaW8gPSAoKSA9PiB7XG4gICAgICAgIHRvRG9PYmplY3QucHJpb3JpdHkgPVxuICAgICAgICAgICAgdG9Eb09iamVjdC5wcmlvcml0eSA9PT0gJ0ltcG9ydGFudCcgPyAnTm90IEltcG9ydGFudCcgOiAnSW1wb3J0YW50JztcbiAgICAgICAgcmV0dXJuIHRvRG9PYmplY3Q7XG4gICAgfTtcbiAgICBjb25zdCBpc0RvbmUgPSAoKSA9PiB7XG4gICAgICAgIHRvRG9PYmplY3QuZG9uZSA9IHRvRG9PYmplY3QuZG9uZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldFRvRG8gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0b0RvT2JqZWN0O1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlUHJpbyxcbiAgICAgICAgZ2V0VG9EbyxcbiAgICAgICAgaXNEb25lLFxuICAgIH07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBtYWtlUHJvamVjdCB9IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgeyBib2FyZCB9IGZyb20gJy4vQm9hcmQnO1xuaW1wb3J0IHsgZGlzcGxheVRhc2tzLCBtYWtlTW9kYWxzLCBzYXZlVGFza0Zvcm0sIG5ld1Byb2plY3RGb3JtLCBkaXNwbGF5Qm9hcmQsIH0gZnJvbSAnLi9Eb21NYWtlcic7XG5pbXBvcnQgJy4uL3N0eWxlL3N0eWxlLnNjc3MnO1xuY29uc3QgbWFpbkJvYXJkID0gYm9hcmQoKTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbWFrZVByb2plY3QoJ0RlZmF1bHQnKTtcbm1haW5Cb2FyZC5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0LmdldFByb2plY3QoKSk7XG5jb25zdCBsaXN0ZW5lcnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wZW5Nb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtYnRuJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtYnRuJyk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1Nb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtdGFzay1idG4nKTtcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtJyk7XG4gICAgICAgIG9wZW5Nb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VNb2RhbHMoKS5vcGVuTW9kYWwpO1xuICAgICAgICBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZU1vZGFscygpLmNsb3NlTW9kYWwpO1xuICAgICAgICBjb25maXJtTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gc2F2ZVRhc2tGb3JtKCk7XG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdC5hZGRUb0RvKHRhc2suZ2V0VG9EbygpKTtcbiAgICAgICAgICAgIG1ha2VNb2RhbHMoKS5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoZGVmYXVsdFByb2plY3QuZ2V0UHJvamVjdCgpKTtcbiAgICAgICAgICAgIHRhc2tGb3JtLnJlc2V0KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1idG4nKTtcbiAgICAgICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3RGb3JtKCkub3BlblByb2plY3RJbnApO1xuICAgICAgICBuZXdQcm9qZWN0Rm9ybSgpLm5ld1Byb2plY3RJbnAuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0Rm9ybSgpLm5ld1Byb2plY3RJbnAudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG1ha2VQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICBtYWluQm9hcmQuYWRkUHJvamVjdChwcm9qZWN0LmdldFByb2plY3QoKSk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdEZvcm0oKS5jbG9zZVByb2plY3RJbnAoKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Qm9hcmQobWFpbkJvYXJkLmdldEJvYXJkKCkpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3RGb3JtKCkubmV3UHJvamVjdElucC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRyaWdnZXJQcm9qZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgdHJpZ2dlclByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbGlzdC1pdGVtJyk7XG4gICAgICAgIHByb2plY3RMaXN0LmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWROdW0gPSBOdW1iZXIocC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQtcHJvaicpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbWFpbkJvYXJkLmdldEJvYXJkKClbaWROdW1dO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrcyhwcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFRhc2ssXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIHRyaWdnZXJQcm9qZWN0LFxuICAgIH07XG59KSgpO1xubGlzdGVuZXJzLmFkZFRhc2soKTtcbmxpc3RlbmVycy5hZGRQcm9qZWN0KCk7XG5saXN0ZW5lcnMudHJpZ2dlclByb2plY3QoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==