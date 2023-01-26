/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Bindings/AppControlBindings.ts":
/*!********************************************!*\
  !*** ./src/Bindings/AppControlBindings.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appControlContainer": () => (/* binding */ appControlContainer)
/* harmony export */ });
/* harmony import */ var obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! obs-tau-blend */ "../obs-tau-blend/dist/index.js");

(0,obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.injected)(obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.CentralController, obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.CENTRAL_TOKENS.serviceAdapters, obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.SHARED_TOKENS.portMessageAdapter, obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.SHARED_TOKENS.frameworkEventBus);
const appControlContainer = new obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.Container();
appControlContainer.extend(obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.centralContainer);
appControlContainer.bind(obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.CENTRAL_TOKENS.centralController)
    .toInstance(obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.CentralController)
    .inSingletonScope();



/***/ }),

/***/ "../obs-tau-blend/dist/Entry/Central.js":
/*!**********************************************!*\
  !*** ../obs-tau-blend/dist/Entry/Central.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCentral": () => (/* binding */ initCentral)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '#root/Bindings/CentralTokens'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '#shared'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


const initCentral = async (container, configUri) => {
    const config = await Object(function webpackMissingModule() { var e = new Error("Cannot find module '#shared'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(configUri);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '#shared'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(config);
    const controller = container.get(Object(function webpackMissingModule() { var e = new Error("Cannot find module '#root/Bindings/CentralTokens'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    controller.init(Object(function webpackMissingModule() { var e = new Error("Cannot find module '#shared'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("centralController", {}));
    const onconnect = controller.onSharedWorkerConnect;
};
//# sourceMappingURL=Central.js.map

/***/ }),

/***/ "../obs-tau-blend/dist/index.js":
/*!**************************************!*\
  !*** ../obs-tau-blend/dist/index.js ***!
  \**************************************/
/***/ (() => {

/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
Object(function webpackMissingModule() { var e = new Error("Cannot find module '#root/Bindings/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '#root/Infrastructure/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '#root/Overlay/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '#root/Shared/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




//# sourceMappingURL=index.js.map

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/control_entry.ts ***!
  \******************************/
/* harmony import */ var _Bindings_AppControlBindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bindings/AppControlBindings */ "./src/Bindings/AppControlBindings.ts");
/* harmony import */ var obs_tau_blend_Entry_Central__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! obs-tau-blend/Entry/Central */ "../obs-tau-blend/dist/Entry/Central.js");


(0,obs_tau_blend_Entry_Central__WEBPACK_IMPORTED_MODULE_1__.initCentral)(_Bindings_AppControlBindings__WEBPACK_IMPORTED_MODULE_0__.appControlContainer, '/config.json');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbF93b3JrZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPdUI7QUFFdkIsdURBQVEsQ0FDTiw0REFBaUIsRUFDakIseUVBQThCLEVBQzlCLDJFQUFnQyxFQUNoQywwRUFBK0IsQ0FDaEMsQ0FBQztBQUVGLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxvREFBUyxFQUFFLENBQUM7QUFFNUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLDJEQUFnQixDQUFDLENBQUM7QUFFN0MsbUJBQW1CLENBQUMsSUFBSSxDQUFDLDJFQUFnQyxDQUFDO0tBQ3JELFVBQVUsQ0FBQyw0REFBaUIsQ0FBQztLQUM3QixnQkFBZ0IsRUFBRSxDQUFDO0FBRU87Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QitCO0FBQ0o7QUFDbkQ7QUFDUCx5QkFBeUIsc0lBQVU7QUFDbkMsSUFBSSxzSUFBUztBQUNiLHFDQUFxQywySkFBZ0M7QUFDckUsb0JBQW9CLHNJQUFRLHdCQUF3QjtBQUNwRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RxQztBQUNNO0FBQ1A7QUFDRDtBQUNuQzs7Ozs7O1VDSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7Ozs7Ozs7O0FDQW9FO0FBQ1Y7QUFHMUQsd0VBQVcsQ0FBQyw2RUFBbUIsRUFBRSxjQUFjLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL292ZXJsYXkvLi9zcmMvQmluZGluZ3MvQXBwQ29udHJvbEJpbmRpbmdzLnRzIiwid2VicGFjazovL292ZXJsYXkvLi4vb2JzLXRhdS1ibGVuZC9kaXN0L0VudHJ5L0NlbnRyYWwuanMiLCJ3ZWJwYWNrOi8vb3ZlcmxheS8uLi9vYnMtdGF1LWJsZW5kL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3ZlcmxheS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vdmVybGF5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vdmVybGF5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3ZlcmxheS8uL3NyYy9jb250cm9sX2VudHJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNlbnRyYWxDb250YWluZXIsXG4gIENlbnRyYWxDb250cm9sbGVyLFxuICBDRU5UUkFMX1RPS0VOUyxcbiAgQ29udGFpbmVyLFxuICBpbmplY3RlZCxcbiAgU0hBUkVEX1RPS0VOUyxcbn0gZnJvbSBcIm9icy10YXUtYmxlbmRcIjtcblxuaW5qZWN0ZWQoXG4gIENlbnRyYWxDb250cm9sbGVyLFxuICBDRU5UUkFMX1RPS0VOUy5zZXJ2aWNlQWRhcHRlcnMsXG4gIFNIQVJFRF9UT0tFTlMucG9ydE1lc3NhZ2VBZGFwdGVyLFxuICBTSEFSRURfVE9LRU5TLmZyYW1ld29ya0V2ZW50QnVzXG4pO1xuXG5jb25zdCBhcHBDb250cm9sQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuXG5hcHBDb250cm9sQ29udGFpbmVyLmV4dGVuZChjZW50cmFsQ29udGFpbmVyKTtcblxuYXBwQ29udHJvbENvbnRhaW5lci5iaW5kKENFTlRSQUxfVE9LRU5TLmNlbnRyYWxDb250cm9sbGVyKVxuICAgIC50b0luc3RhbmNlKENlbnRyYWxDb250cm9sbGVyKVxuICAgIC5pblNpbmdsZXRvblNjb3BlKCk7XG5cbmV4cG9ydCB7IGFwcENvbnRyb2xDb250YWluZXIgfTtcbiIsImltcG9ydCB7IENFTlRSQUxfVE9LRU5TIH0gZnJvbSBcIiNyb290L0JpbmRpbmdzL0NlbnRyYWxUb2tlbnNcIjtcbmltcG9ydCB7IGNvbmZfZmV0Y2gsIGNvbmZfZ2V0LCBjb25mX2xvYWQgfSBmcm9tIFwiI3NoYXJlZFwiO1xuZXhwb3J0IGNvbnN0IGluaXRDZW50cmFsID0gYXN5bmMgKGNvbnRhaW5lciwgY29uZmlnVXJpKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgY29uZl9mZXRjaChjb25maWdVcmkpO1xuICAgIGNvbmZfbG9hZChjb25maWcpO1xuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBjb250YWluZXIuZ2V0KENFTlRSQUxfVE9LRU5TLmNlbnRyYWxDb250cm9sbGVyKTtcbiAgICBjb250cm9sbGVyLmluaXQoY29uZl9nZXQoXCJjZW50cmFsQ29udHJvbGxlclwiLCB7fSkpO1xuICAgIGNvbnN0IG9uY29ubmVjdCA9IGNvbnRyb2xsZXIub25TaGFyZWRXb3JrZXJDb25uZWN0O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNlbnRyYWwuanMubWFwIiwiZXhwb3J0ICogZnJvbSBcIiNyb290L0JpbmRpbmdzL2luZGV4XCI7XG5leHBvcnQgKiBmcm9tIFwiI3Jvb3QvSW5mcmFzdHJ1Y3R1cmUvaW5kZXhcIjtcbmV4cG9ydCAqIGZyb20gXCIjcm9vdC9PdmVybGF5L2luZGV4XCI7XG5leHBvcnQgKiBmcm9tIFwiI3Jvb3QvU2hhcmVkL2luZGV4XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7IGFwcENvbnRyb2xDb250YWluZXIgfSBmcm9tIFwiLi9CaW5kaW5ncy9BcHBDb250cm9sQmluZGluZ3NcIjtcbmltcG9ydCB7IGluaXRDZW50cmFsIH0gZnJvbSBcIm9icy10YXUtYmxlbmQvRW50cnkvQ2VudHJhbFwiO1xuXG5cbmluaXRDZW50cmFsKGFwcENvbnRyb2xDb250YWluZXIsICcvY29uZmlnLmpzb24nKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==