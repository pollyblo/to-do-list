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
    project.tasks.forEach((task, i) => {
        const isImportant = task.priority === 'Important' ? 'checked' : '';
        const isDone = task.done === true ? 'checked' : '';
        const date = task.dueDate === 'No Date Due'
            ? 'No Date Due'
            : task.dueDate.toDateString();
        const taskFragment = (0,_Tags__WEBPACK_IMPORTED_MODULE_0__.taskTag)(task.title, date, task.desc, isImportant, isDone, i);
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
        return { projectName, tasks, setName, addToDo, removeToDo, getProject };
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
const taskTag = (title, date, desc, checkImportant, checkDone, i) => {
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
    const updatePrio = () => {
        priority = priority === 'Important' ? 'Not Important' : 'Important';
    };
    const isDone = () => {
        done = done ? false : true;
    };
    const getToDo = () => {
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
    let idProj = 0;
    const addTask = () => {
        const openModalBtn = document.querySelector('#add-btn');
        const closeModalBtn = document.querySelector('#close-btn');
        const confirmModalBtn = document.querySelector('#submit-task-btn');
        const taskForm = document.querySelector('#task-form');
        openModalBtn.addEventListener('click', (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.makeModals)().openModal);
        closeModalBtn.addEventListener('click', (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.makeModals)().closeModal);
        confirmModalBtn.addEventListener('click', () => {
            const task = (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.saveTaskForm)();
            const project = mainBoard.getBoard()[idProj];
            project.addToDo(task.getToDo());
            (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.makeModals)().closeModal();
            (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(project.getProject());
            taskForm.reset();
            openToDo();
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
                idProj = Number(p.getAttribute('data-id-proj'));
                const project = mainBoard.getBoard()[idProj];
                (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(project);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0M7QUFDQSxnQkFBZ0IseURBQWM7QUFDOUIsZ0JBQWdCLHVEQUFZO0FBQzVCLGdCQUFnQix5REFBYztBQUM5QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFZO0FBQzVCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzPzQ1NmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHQvQm9hcmQudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHQvRG9tTWFrZXIudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHQvUHJvamVjdC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdC9UYWdzLnRzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvc2NyaXB0L1RvRG8udHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvc2NyaXB0L0FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY29uc3QgYm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkJvYXJkID0gW107XG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBtYWluQm9hcmQ7XG4gICAgfTtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgICAgICBtYWluQm9hcmQuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2ogPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgIG1haW5Cb2FyZC5wdXNoKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgbWFpbkJvYXJkLmZvckVhY2goKHByb2osIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGksIHByb2opO1xuICAgICAgICAgICAgaWYgKHByb2oudGFza3MgPT09IHByb2plY3QudGFza3MpIHtcbiAgICAgICAgICAgICAgICBtYWluQm9hcmQuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1haW5Cb2FyZDtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEJvYXJkLFxuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICByZW1vdmVQcm9qZWN0LFxuICAgIH07XG59O1xuIiwiaW1wb3J0IHsgdGFza1RhZywgcHJvamVjdFRhZyB9IGZyb20gJy4vVGFncyc7XG5pbXBvcnQgeyBtYWtlVG9EbyB9IGZyb20gJy4vVG9Ebyc7XG5leHBvcnQgY29uc3QgZGlzcGxheVRhc2tzID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpO1xuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICByYW5nZS5zZWxlY3ROb2RlKHRhc2tzKTtcbiAgICB0YXNrcy50ZXh0Q29udGVudCA9ICcnO1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xuICAgICAgICBjb25zdCBpc0ltcG9ydGFudCA9IHRhc2sucHJpb3JpdHkgPT09ICdJbXBvcnRhbnQnID8gJ2NoZWNrZWQnIDogJyc7XG4gICAgICAgIGNvbnN0IGlzRG9uZSA9IHRhc2suZG9uZSA9PT0gdHJ1ZSA/ICdjaGVja2VkJyA6ICcnO1xuICAgICAgICBjb25zdCBkYXRlID0gdGFzay5kdWVEYXRlID09PSAnTm8gRGF0ZSBEdWUnXG4gICAgICAgICAgICA/ICdObyBEYXRlIER1ZSdcbiAgICAgICAgICAgIDogdGFzay5kdWVEYXRlLnRvRGF0ZVN0cmluZygpO1xuICAgICAgICBjb25zdCB0YXNrRnJhZ21lbnQgPSB0YXNrVGFnKHRhc2sudGl0bGUsIGRhdGUsIHRhc2suZGVzYywgaXNJbXBvcnRhbnQsIGlzRG9uZSwgaSk7XG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCh0YXNrRnJhZ21lbnQpKTtcbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3QgZGlzcGxheUJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgbGlzdEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICByYW5nZS5zZWxlY3ROb2RlKGxpc3RCb2FyZCk7XG4gICAgbGlzdEJvYXJkLnRleHRDb250ZW50ID0gJyc7XG4gICAgYm9hcmQuZm9yRWFjaCgocHJvamVjdCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0RnJhZ21lbnQgPSBwcm9qZWN0VGFnKHByb2plY3QucHJvamVjdE5hbWUsIGkpO1xuICAgICAgICBsaXN0Qm9hcmQuYXBwZW5kQ2hpbGQocmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHByb2plY3RGcmFnbWVudCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBjb25zdCBtYWtlTW9kYWxzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9O1xuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3Blbk1vZGFsLFxuICAgICAgICBjbG9zZU1vZGFsLFxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHNhdmVUYXNrRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZScpO1xuICAgIGNvbnN0IGVycm9yVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtZXJyb3InKTtcbiAgICBpZiAoIXRhc2tUaXRsZS52YWx1ZSkge1xuICAgICAgICBlcnJvclRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVycm9yVGl0bGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjJyk7XG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlJyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stcHJpb3JpdHknKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IHRhc2tQcmlvcml0eS5jaGVja2VkID8gJ0ltcG9ydGFudCcgOiAnTm90IEltcG9ydGFudCc7XG4gICAgY29uc3QgZGF0ZSA9IHRhc2tEYXRlLnZhbHVlID8gbmV3IERhdGUodGFza0RhdGUudmFsdWUpIDogJ05vIERhdGUgRHVlJztcbiAgICBjb25zdCB0YXNrID0gbWFrZVRvRG8odGFza1RpdGxlLnZhbHVlLCB0YXNrRGVzYy52YWx1ZSwgZGF0ZSwgcHJpb3JpdHksIGZhbHNlKTtcbiAgICByZXR1cm4gdGFzaztcbn07XG5leHBvcnQgY29uc3QgbmV3UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdElucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtaW5wJyk7XG4gICAgY29uc3Qgb3BlblByb2plY3RJbnAgPSAoKSA9PiB7XG4gICAgICAgIG5ld1Byb2plY3RJbnAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfTtcbiAgICBjb25zdCBjbG9zZVByb2plY3RJbnAgPSAoKSA9PiB7XG4gICAgICAgIG5ld1Byb2plY3RJbnAuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGVuUHJvamVjdElucCxcbiAgICAgICAgY2xvc2VQcm9qZWN0SW5wLFxuICAgICAgICBuZXdQcm9qZWN0SW5wLFxuICAgIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IG1ha2VQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBbXTtcbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyBwcm9qZWN0TmFtZSwgdGFza3MsIHNldE5hbWUsIGFkZFRvRG8sIHJlbW92ZVRvRG8sIGdldFByb2plY3QgfTtcbiAgICB9O1xuICAgIGNvbnN0IHNldE5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgICBwcm9qZWN0TmFtZSA9IG5hbWU7XG4gICAgfTtcbiAgICBjb25zdCBhZGRUb0RvID0gKHRvRG8pID0+IHtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFzayA9PT0gdG9Ebykge1xuICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgdGFza3MucHVzaCh0b0RvKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlVG9EbyA9ICh0b0RvKSA9PiB7XG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGkpID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrID09PSB0b0RvKSB7XG4gICAgICAgICAgICAgICAgdGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldFByb2plY3QsXG4gICAgICAgIGFkZFRvRG8sXG4gICAgICAgIHJlbW92ZVRvRG8sXG4gICAgICAgIHNldE5hbWUsXG4gICAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgdGFza1RhZyA9ICh0aXRsZSwgZGF0ZSwgZGVzYywgY2hlY2tJbXBvcnRhbnQsIGNoZWNrRG9uZSwgaSkgPT4ge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInRvZG8tY29udGFpbmVyXCI+XG4gIDxkaXY+XG4gICAgPGgyIGNsYXNzPVwidG9kby10aXRsZVwiPiR7dGl0bGV9PC9oMj5cbiAgICA8c3BhbiBjbGFzcz1cInRvZG8tZGF0ZVwiPiR7ZGF0ZX08L3NwYW4+XG4gIDwvZGl2PlxuICA8cCBjbGFzcz1cInRvZG8tZGVzYyBoaWRkZW5cIiBkYXRhLWlkLXRhc2s9JHtpfT4ke2Rlc2N9PC9wPlxuICA8ZGl2IGNsYXNzPVwiaGlkZGVuIGNoZWNrLWltcG9ydGFudFwiPlxuICAgIDxsYWJlbCBmb3I9XCJpbXBvcnRhbnRcIj5JbXBvcnRhbnQ8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRvZG8taW1wb3J0YW50XCIgbmFtZT1cImltcG9ydGFudFwiICAke2NoZWNrSW1wb3J0YW50fS8+XG4gICAgPGxhYmVsIGZvcj1cImRvbmVcIj5Eb25lPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRvbmVcIiBpZD1cInRvZG8tZG9uZVwiICR7Y2hlY2tEb25lfS8+XG4gIDwvZGl2PlxuICA8L2Rpdj5gO1xufTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0VGFnID0gKHByb2plY3ROYW1lLCBpKSA9PiB7XG4gICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJwcm9qZWN0LWxpc3QtaXRlbVwiIGRhdGEtaWQtcHJvaj1cIiR7aX1cIj4ke3Byb2plY3ROYW1lfTwvbGk+YDtcbn07XG4iLCJleHBvcnQgY29uc3QgbWFrZVRvRG8gPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlUHJpbyA9ICgpID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSBwcmlvcml0eSA9PT0gJ0ltcG9ydGFudCcgPyAnTm90IEltcG9ydGFudCcgOiAnSW1wb3J0YW50JztcbiAgICB9O1xuICAgIGNvbnN0IGlzRG9uZSA9ICgpID0+IHtcbiAgICAgICAgZG9uZSA9IGRvbmUgPyBmYWxzZSA6IHRydWU7XG4gICAgfTtcbiAgICBjb25zdCBnZXRUb0RvID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjLFxuICAgICAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICAgICAgZG9uZSxcbiAgICAgICAgICAgIHVwZGF0ZVByaW8sXG4gICAgICAgICAgICBpc0RvbmUsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGVQcmlvLFxuICAgICAgICBnZXRUb0RvLFxuICAgICAgICBpc0RvbmUsXG4gICAgfTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG1ha2VQcm9qZWN0IH0gZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCB7IGJvYXJkIH0gZnJvbSAnLi9Cb2FyZCc7XG5pbXBvcnQgeyBkaXNwbGF5VGFza3MsIG1ha2VNb2RhbHMsIHNhdmVUYXNrRm9ybSwgbmV3UHJvamVjdEZvcm0sIGRpc3BsYXlCb2FyZCwgfSBmcm9tICcuL0RvbU1ha2VyJztcbmltcG9ydCAnLi4vc3R5bGUvc3R5bGUuc2Nzcyc7XG5jb25zdCBtYWluQm9hcmQgPSBib2FyZCgpO1xuY29uc3QgZGVmYXVsdFByb2plY3QgPSBtYWtlUHJvamVjdCgnRGVmYXVsdCcpO1xubWFpbkJvYXJkLmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QuZ2V0UHJvamVjdCgpKTtcbmNvbnN0IGxpc3RlbmVycyA9ICgoKSA9PiB7XG4gICAgbGV0IGlkUHJvaiA9IDA7XG4gICAgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb3Blbk1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1idG4nKTtcbiAgICAgICAgY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1idG4nKTtcbiAgICAgICAgY29uc3QgY29uZmlybU1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC10YXNrLWJ0bicpO1xuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKTtcbiAgICAgICAgb3Blbk1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZU1vZGFscygpLm9wZW5Nb2RhbCk7XG4gICAgICAgIGNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlTW9kYWxzKCkuY2xvc2VNb2RhbCk7XG4gICAgICAgIGNvbmZpcm1Nb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBzYXZlVGFza0Zvcm0oKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBtYWluQm9hcmQuZ2V0Qm9hcmQoKVtpZFByb2pdO1xuICAgICAgICAgICAgcHJvamVjdC5hZGRUb0RvKHRhc2suZ2V0VG9EbygpKTtcbiAgICAgICAgICAgIG1ha2VNb2RhbHMoKS5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MocHJvamVjdC5nZXRQcm9qZWN0KCkpO1xuICAgICAgICAgICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIG9wZW5Ub0RvKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1idG4nKTtcbiAgICAgICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3RGb3JtKCkub3BlblByb2plY3RJbnApO1xuICAgICAgICBuZXdQcm9qZWN0Rm9ybSgpLm5ld1Byb2plY3RJbnAuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0Rm9ybSgpLm5ld1Byb2plY3RJbnAudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG1ha2VQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICBtYWluQm9hcmQuYWRkUHJvamVjdChwcm9qZWN0LmdldFByb2plY3QoKSk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdEZvcm0oKS5jbG9zZVByb2plY3RJbnAoKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Qm9hcmQobWFpbkJvYXJkLmdldEJvYXJkKCkpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3RGb3JtKCkubmV3UHJvamVjdElucC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRyaWdnZXJQcm9qZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgdHJpZ2dlclByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbGlzdC1pdGVtJyk7XG4gICAgICAgIHByb2plY3RMaXN0LmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWRQcm9qID0gTnVtYmVyKHAuZ2V0QXR0cmlidXRlKCdkYXRhLWlkLXByb2onKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG1haW5Cb2FyZC5nZXRCb2FyZCgpW2lkUHJval07XG4gICAgICAgICAgICAgICAgZGlzcGxheVRhc2tzKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIG9wZW5Ub0RvKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBvcGVuVG9EbyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0b0RvRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWRlc2MnKTtcbiAgICAgICAgY29uc3QgY2hlY2tJbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2staW1wb3J0YW50Jyk7XG4gICAgICAgIHRvRG9Db250YWluZXIuZm9yRWFjaCgodCwgaSkgPT4ge1xuICAgICAgICAgICAgdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0b0RvRGVzY1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBjaGVja0ltcG9ydGFudFtpXS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFRhc2ssXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIHRyaWdnZXJQcm9qZWN0LFxuICAgICAgICBvcGVuVG9EbyxcbiAgICB9O1xufSkoKTtcbmxpc3RlbmVycy5hZGRUYXNrKCk7XG5saXN0ZW5lcnMuYWRkUHJvamVjdCgpO1xubGlzdGVuZXJzLnRyaWdnZXJQcm9qZWN0KCk7XG5saXN0ZW5lcnMub3BlblRvRG8oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==