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

/***/ "./src/script/DomMaker.ts":
/*!********************************!*\
  !*** ./src/script/DomMaker.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "makeModals": () => (/* binding */ makeModals),
/* harmony export */   "saveTaskForm": () => (/* binding */ saveTaskForm)
/* harmony export */ });
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tags */ "./src/script/Tags.ts");
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDo */ "./src/script/ToDo.ts");


const displayTasks = (project) => {
    const tasks = document.getElementById('todos');
    const range = document.createRange();
    range.selectNode(tasks);
    project.tasks.forEach((task) => {
        const isImportant = task.priority === 'Important' ? 'checked' : '';
        const isDone = task.done === true ? 'checked' : '';
        const taskFragment = (0,_Tags__WEBPACK_IMPORTED_MODULE_0__.makeTask)(task.title, task.dueDate.toDateString(), task.desc, isImportant, isDone);
        tasks.appendChild(range.createContextualFragment(taskFragment));
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
    const taskDesc = document.getElementById('task-desc');
    const taskDate = document.getElementById('task-date');
    const taskPriority = document.getElementById('task-priority');
    const priority = taskPriority.checked ? 'Important' : 'Not Important';
    const date = new Date(taskDate.value);
    const task = (0,_ToDo__WEBPACK_IMPORTED_MODULE_1__.makeToDo)(taskTitle.value, taskDesc.value, date, priority, false);
    return task;
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
/* harmony export */   "makeTask": () => (/* binding */ makeTask)
/* harmony export */ });
const makeTask = (title, date, desc, checkImportant, checkDone) => {
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
        if (toDoObject.done === undefined)
            toDoObject.done = false;
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
/* harmony import */ var _DomMaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomMaker */ "./src/script/DomMaker.ts");
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/style.scss */ "./src/style/style.scss");



const defaultProject = (0,_Project__WEBPACK_IMPORTED_MODULE_0__.makeProject)('Default');
const listeners = (() => {
    const openModalBtn = document.querySelector('#add-btn');
    const closeModalBtn = document.querySelector('#close-btn');
    const confirmModalBtn = document.querySelector('#submit-task-btn');
    const taskForm = document.querySelector('#task-form');
    openModalBtn.addEventListener('click', (0,_DomMaker__WEBPACK_IMPORTED_MODULE_1__.makeModals)().openModal);
    closeModalBtn.addEventListener('click', (0,_DomMaker__WEBPACK_IMPORTED_MODULE_1__.makeModals)().closeModal);
    confirmModalBtn.addEventListener('click', () => {
        const task = (0,_DomMaker__WEBPACK_IMPORTED_MODULE_1__.saveTaskForm)();
        console.log(task.getToDo());
        defaultProject.addToDo(task.getToDo());
        console.log(defaultProject.getProject());
        (0,_DomMaker__WEBPACK_IMPORTED_MODULE_1__.makeModals)().closeModal();
        (0,_DomMaker__WEBPACK_IMPORTED_MODULE_1__.displayTasks)(defaultProject.getProject());
        taskForm.reset();
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDQTtBQUMzQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwrQ0FBUTtBQUNyQztBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsK0NBQVE7QUFDekI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdENPO0FBQ1A7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENPO0FBQ1A7QUFDQTtBQUNBLDZCQUE2QixNQUFNO0FBQ25DLDhCQUE4QixLQUFLO0FBQ25DO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBLG1FQUFtRSxlQUFlO0FBQ2xGO0FBQ0Esd0RBQXdELFVBQVU7QUFDbEU7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNkTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMxQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQzRCO0FBQ3ZDO0FBQzdCLHVCQUF1QixxREFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHFEQUFVO0FBQ3JELDRDQUE0QyxxREFBVTtBQUN0RDtBQUNBLHFCQUFxQix1REFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFVO0FBQ2xCLFFBQVEsdURBQVk7QUFDcEI7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvc3R5bGUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdC9Eb21NYWtlci50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdC9Qcm9qZWN0LnRzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvc2NyaXB0L1RhZ3MudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHQvVG9Eby50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHQvQXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IG1ha2VUYXNrIH0gZnJvbSAnLi9UYWdzJztcbmltcG9ydCB7IG1ha2VUb0RvIH0gZnJvbSAnLi9Ub0RvJztcbmV4cG9ydCBjb25zdCBkaXNwbGF5VGFza3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJyk7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHJhbmdlLnNlbGVjdE5vZGUodGFza3MpO1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCBpc0ltcG9ydGFudCA9IHRhc2sucHJpb3JpdHkgPT09ICdJbXBvcnRhbnQnID8gJ2NoZWNrZWQnIDogJyc7XG4gICAgICAgIGNvbnN0IGlzRG9uZSA9IHRhc2suZG9uZSA9PT0gdHJ1ZSA/ICdjaGVja2VkJyA6ICcnO1xuICAgICAgICBjb25zdCB0YXNrRnJhZ21lbnQgPSBtYWtlVGFzayh0YXNrLnRpdGxlLCB0YXNrLmR1ZURhdGUudG9EYXRlU3RyaW5nKCksIHRhc2suZGVzYywgaXNJbXBvcnRhbnQsIGlzRG9uZSk7XG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCh0YXNrRnJhZ21lbnQpKTtcbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3QgbWFrZU1vZGFscyA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfTtcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIG9wZW5Nb2RhbCxcbiAgICAgICAgY2xvc2VNb2RhbCxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBzYXZlVGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUnKTtcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2MnKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRhdGUnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1wcmlvcml0eScpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gdGFza1ByaW9yaXR5LmNoZWNrZWQgPyAnSW1wb3J0YW50JyA6ICdOb3QgSW1wb3J0YW50JztcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGFza0RhdGUudmFsdWUpO1xuICAgIGNvbnN0IHRhc2sgPSBtYWtlVG9Ebyh0YXNrVGl0bGUudmFsdWUsIHRhc2tEZXNjLnZhbHVlLCBkYXRlLCBwcmlvcml0eSwgZmFsc2UpO1xuICAgIHJldHVybiB0YXNrO1xufTtcbiIsImV4cG9ydCBjb25zdCBtYWtlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gW107XG4gICAgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgcHJvamVjdE5hbWUsIHRhc2tzIH07XG4gICAgfTtcbiAgICBjb25zdCBzZXROYW1lID0gKG5hbWUpID0+IHtcbiAgICAgICAgcHJvamVjdE5hbWUgPSBuYW1lO1xuICAgIH07XG4gICAgY29uc3QgYWRkVG9EbyA9ICh0b0RvKSA9PiB7XG4gICAgICAgIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2sgPT09IHRvRG8pIHtcbiAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgIHRhc2tzLnB1c2godG9Ebyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVRvRG8gPSAodG9EbykgPT4ge1xuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFzayA9PT0gdG9Ebykge1xuICAgICAgICAgICAgICAgIHRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQcm9qZWN0LFxuICAgICAgICBhZGRUb0RvLFxuICAgICAgICByZW1vdmVUb0RvLFxuICAgICAgICBzZXROYW1lLFxuICAgIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IG1ha2VUYXNrID0gKHRpdGxlLCBkYXRlLCBkZXNjLCBjaGVja0ltcG9ydGFudCwgY2hlY2tEb25lKSA9PiB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidG9kby1jb250YWluZXJcIj5cbiAgPGRpdj5cbiAgICA8aDIgY2xhc3M9XCJ0b2RvLXRpdGxlXCI+JHt0aXRsZX08L2gyPlxuICAgIDxzcGFuIGNsYXNzPVwidG9kby1kYXRlXCI+JHtkYXRlfTwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxwIGNsYXNzPVwidG9kby1kZXNjXCI+JHtkZXNjfTwvcD5cbiAgPGRpdj5cbiAgICA8bGFiZWwgZm9yPVwiaW1wb3J0YW50XCI+SW1wb3J0YW50PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0b2RvLWltcG9ydGFudFwiIG5hbWU9XCJpbXBvcnRhbnRcIiAgJHtjaGVja0ltcG9ydGFudH0vPlxuICAgIDxsYWJlbCBmb3I9XCJkb25lXCI+RG9uZTwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkb25lXCIgaWQ9XCJ0b2RvLWRvbmVcIiAke2NoZWNrRG9uZX0vPlxuICA8L2Rpdj5cbiAgPC9kaXY+YDtcbn07XG4iLCJleHBvcnQgY29uc3QgbWFrZVRvRG8gPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lKSA9PiB7XG4gICAgY29uc3QgdG9Eb09iamVjdCA9IHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2MsXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBkb25lLFxuICAgIH07XG4gICAgY29uc3QgdXBkYXRlUHJpbyA9ICgpID0+IHtcbiAgICAgICAgdG9Eb09iamVjdC5wcmlvcml0eSA9XG4gICAgICAgICAgICB0b0RvT2JqZWN0LnByaW9yaXR5ID09PSAnSW1wb3J0YW50JyA/ICdOb3QgSW1wb3J0YW50JyA6ICdJbXBvcnRhbnQnO1xuICAgICAgICByZXR1cm4gdG9Eb09iamVjdDtcbiAgICB9O1xuICAgIGNvbnN0IGlzRG9uZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRvRG9PYmplY3QuZG9uZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdG9Eb09iamVjdC5kb25lID0gZmFsc2U7XG4gICAgICAgIHRvRG9PYmplY3QuZG9uZSA9IHRvRG9PYmplY3QuZG9uZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldFRvRG8gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0b0RvT2JqZWN0O1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlUHJpbyxcbiAgICAgICAgZ2V0VG9EbyxcbiAgICAgICAgaXNEb25lLFxuICAgIH07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBtYWtlUHJvamVjdCB9IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgeyBkaXNwbGF5VGFza3MsIG1ha2VNb2RhbHMsIHNhdmVUYXNrRm9ybSB9IGZyb20gJy4vRG9tTWFrZXInO1xuaW1wb3J0ICcuLi9zdHlsZS9zdHlsZS5zY3NzJztcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbWFrZVByb2plY3QoJ0RlZmF1bHQnKTtcbmNvbnN0IGxpc3RlbmVycyA9ICgoKSA9PiB7XG4gICAgY29uc3Qgb3Blbk1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1idG4nKTtcbiAgICBjb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWJ0bicpO1xuICAgIGNvbnN0IGNvbmZpcm1Nb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtdGFzay1idG4nKTtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKTtcbiAgICBvcGVuTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlTW9kYWxzKCkub3Blbk1vZGFsKTtcbiAgICBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZU1vZGFscygpLmNsb3NlTW9kYWwpO1xuICAgIGNvbmZpcm1Nb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IHNhdmVUYXNrRm9ybSgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrLmdldFRvRG8oKSk7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LmFkZFRvRG8odGFzay5nZXRUb0RvKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC5nZXRQcm9qZWN0KCkpO1xuICAgICAgICBtYWtlTW9kYWxzKCkuY2xvc2VNb2RhbCgpO1xuICAgICAgICBkaXNwbGF5VGFza3MoZGVmYXVsdFByb2plY3QuZ2V0UHJvamVjdCgpKTtcbiAgICAgICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=