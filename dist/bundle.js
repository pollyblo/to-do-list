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
/* harmony export */   "makeModals": () => (/* binding */ makeModals)
/* harmony export */ });
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tags */ "./src/script/Tags.ts");

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
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo */ "./src/script/ToDo.ts");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/script/Project.ts");
/* harmony import */ var _DomMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DomMaker */ "./src/script/DomMaker.ts");
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/style.scss */ "./src/style/style.scss");




const first = (0,_ToDo__WEBPACK_IMPORTED_MODULE_0__.makeToDo)('Eat', 'Eat tonight', new Date(), 'Important', true);
const project = (0,_Project__WEBPACK_IMPORTED_MODULE_1__.makeProject)('Hey');
project.addToDo(first.getToDo());
(0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(project.getProject());
const modalListener = (() => {
    const openModalBtn = document.querySelector('#add-btn');
    const closeModalBtn = document.querySelector('#close-btn');
    openModalBtn.addEventListener('click', (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.makeModals)().openModal);
    closeModalBtn.addEventListener('click', (0,_DomMaker__WEBPACK_IMPORTED_MODULE_2__.makeModals)().closeModal);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQzNCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLCtDQUFRO0FBQ3JDO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNCTztBQUNQO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hDTztBQUNQO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTTtBQUNuQyw4QkFBOEIsS0FBSztBQUNuQztBQUNBLHlCQUF5QixLQUFLO0FBQzlCO0FBQ0E7QUFDQSxtRUFBbUUsZUFBZTtBQUNsRjtBQUNBLHdEQUF3RCxVQUFVO0FBQ2xFO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN4QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNNO0FBQ2M7QUFDekI7QUFDN0IsY0FBYywrQ0FBUTtBQUN0QixnQkFBZ0IscURBQVc7QUFDM0I7QUFDQSx1REFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxREFBVTtBQUNyRCw0Q0FBNEMscURBQVU7QUFDdEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvc3R5bGUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdC9Eb21NYWtlci50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdC9Qcm9qZWN0LnRzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvc2NyaXB0L1RhZ3MudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHQvVG9Eby50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHQvQXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IG1ha2VUYXNrIH0gZnJvbSAnLi9UYWdzJztcbmV4cG9ydCBjb25zdCBkaXNwbGF5VGFza3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJyk7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHJhbmdlLnNlbGVjdE5vZGUodGFza3MpO1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCBpc0ltcG9ydGFudCA9IHRhc2sucHJpb3JpdHkgPT09ICdJbXBvcnRhbnQnID8gJ2NoZWNrZWQnIDogJyc7XG4gICAgICAgIGNvbnN0IGlzRG9uZSA9IHRhc2suZG9uZSA9PT0gdHJ1ZSA/ICdjaGVja2VkJyA6ICcnO1xuICAgICAgICBjb25zdCB0YXNrRnJhZ21lbnQgPSBtYWtlVGFzayh0YXNrLnRpdGxlLCB0YXNrLmR1ZURhdGUudG9EYXRlU3RyaW5nKCksIHRhc2suZGVzYywgaXNJbXBvcnRhbnQsIGlzRG9uZSk7XG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCh0YXNrRnJhZ21lbnQpKTtcbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3QgbWFrZU1vZGFscyA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfTtcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIG9wZW5Nb2RhbCxcbiAgICAgICAgY2xvc2VNb2RhbCxcbiAgICB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBtYWtlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gW107XG4gICAgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgcHJvamVjdE5hbWUsIHRhc2tzIH07XG4gICAgfTtcbiAgICBjb25zdCBzZXROYW1lID0gKG5hbWUpID0+IHtcbiAgICAgICAgcHJvamVjdE5hbWUgPSBuYW1lO1xuICAgIH07XG4gICAgY29uc3QgYWRkVG9EbyA9ICh0b0RvKSA9PiB7XG4gICAgICAgIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2sgPT09IHRvRG8pIHtcbiAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgIHRhc2tzLnB1c2godG9Ebyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVRvRG8gPSAodG9EbykgPT4ge1xuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFzayA9PT0gdG9Ebykge1xuICAgICAgICAgICAgICAgIHRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQcm9qZWN0LFxuICAgICAgICBhZGRUb0RvLFxuICAgICAgICByZW1vdmVUb0RvLFxuICAgICAgICBzZXROYW1lLFxuICAgIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IG1ha2VUYXNrID0gKHRpdGxlLCBkYXRlLCBkZXNjLCBjaGVja0ltcG9ydGFudCwgY2hlY2tEb25lKSA9PiB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidG9kby1jb250YWluZXJcIj5cbiAgPGRpdj5cbiAgICA8aDIgY2xhc3M9XCJ0b2RvLXRpdGxlXCI+JHt0aXRsZX08L2gyPlxuICAgIDxzcGFuIGNsYXNzPVwidG9kby1kYXRlXCI+JHtkYXRlfTwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxwIGNsYXNzPVwidG9kby1kZXNjXCI+JHtkZXNjfTwvcD5cbiAgPGRpdj5cbiAgICA8bGFiZWwgZm9yPVwiaW1wb3J0YW50XCI+SW1wb3J0YW50PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0b2RvLWltcG9ydGFudFwiIG5hbWU9XCJpbXBvcnRhbnRcIiAgJHtjaGVja0ltcG9ydGFudH0vPlxuICAgIDxsYWJlbCBmb3I9XCJkb25lXCI+RG9uZTwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkb25lXCIgaWQ9XCJ0b2RvLWRvbmVcIiAke2NoZWNrRG9uZX0vPlxuICA8L2Rpdj5cbiAgPC9kaXY+YDtcbn07XG4iLCJleHBvcnQgY29uc3QgbWFrZVRvRG8gPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lKSA9PiB7XG4gICAgY29uc3QgdG9Eb09iamVjdCA9IHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2MsXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBkb25lLFxuICAgIH07XG4gICAgY29uc3QgdXBkYXRlUHJpbyA9ICgpID0+IHtcbiAgICAgICAgdG9Eb09iamVjdC5wcmlvcml0eSA9XG4gICAgICAgICAgICB0b0RvT2JqZWN0LnByaW9yaXR5ID09PSAnSW1wb3J0YW50JyA/ICdOb3QgSW1wb3J0YW50JyA6ICdJbXBvcnRhbnQnO1xuICAgICAgICByZXR1cm4gdG9Eb09iamVjdDtcbiAgICB9O1xuICAgIGNvbnN0IGlzRG9uZSA9ICgpID0+IHtcbiAgICAgICAgdG9Eb09iamVjdC5kb25lID0gdG9Eb09iamVjdC5kb25lID8gZmFsc2UgOiB0cnVlO1xuICAgIH07XG4gICAgY29uc3QgZ2V0VG9EbyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvRG9PYmplY3Q7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGVQcmlvLFxuICAgICAgICBnZXRUb0RvLFxuICAgICAgICBpc0RvbmUsXG4gICAgfTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG1ha2VUb0RvIH0gZnJvbSAnLi9Ub0RvJztcbmltcG9ydCB7IG1ha2VQcm9qZWN0IH0gZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCB7IGRpc3BsYXlUYXNrcywgbWFrZU1vZGFscyB9IGZyb20gJy4vRG9tTWFrZXInO1xuaW1wb3J0ICcuLi9zdHlsZS9zdHlsZS5zY3NzJztcbmNvbnN0IGZpcnN0ID0gbWFrZVRvRG8oJ0VhdCcsICdFYXQgdG9uaWdodCcsIG5ldyBEYXRlKCksICdJbXBvcnRhbnQnLCB0cnVlKTtcbmNvbnN0IHByb2plY3QgPSBtYWtlUHJvamVjdCgnSGV5Jyk7XG5wcm9qZWN0LmFkZFRvRG8oZmlyc3QuZ2V0VG9EbygpKTtcbmRpc3BsYXlUYXNrcyhwcm9qZWN0LmdldFByb2plY3QoKSk7XG5jb25zdCBtb2RhbExpc3RlbmVyID0gKCgpID0+IHtcbiAgICBjb25zdCBvcGVuTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWJ0bicpO1xuICAgIGNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtYnRuJyk7XG4gICAgb3Blbk1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZU1vZGFscygpLm9wZW5Nb2RhbCk7XG4gICAgY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VNb2RhbHMoKS5jbG9zZU1vZGFsKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=