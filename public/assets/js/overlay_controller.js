/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Bindings/AppOverlayBindings.ts":
/*!********************************************!*\
  !*** ./src/Bindings/AppOverlayBindings.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appOverlayContainer": () => (/* binding */ appOverlayContainer)
/* harmony export */ });
/* harmony import */ var obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! obs-tau-blend */ "../obs-tau-blend/dist/index.js");

(0,obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.injected)(obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.OverlayController, obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.OVERLAY_TOKENS.controlWorker, obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.SHARED_TOKENS.frameworkEventBus);
const appOverlayContainer = new obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.Container();
appOverlayContainer.extend(obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.overlayContainer);
appOverlayContainer.bind(obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.OVERLAY_TOKENS.overlayController)
    .toInstance(obs_tau_blend__WEBPACK_IMPORTED_MODULE_0__.OverlayController)
    .inSingletonScope();



/***/ }),

/***/ "../obs-tau-blend/dist/Entry/Central.js":
/*!**********************************************!*\
  !*** ../obs-tau-blend/dist/Entry/Central.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export initCentral */
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
  !*** ./src/overlay_entry.ts ***!
  \******************************/
/* harmony import */ var _Bindings_AppOverlayBindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bindings/AppOverlayBindings */ "./src/Bindings/AppOverlayBindings.ts");
/* harmony import */ var obs_tau_blend_Entry_Overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! obs-tau-blend/Entry/Overlay */ "../obs-tau-blend/dist/Entry/Central.js");


(0,obs_tau_blend_Entry_Overlay__WEBPACK_IMPORTED_MODULE_1__.initOverlay)(_Bindings_AppOverlayBindings__WEBPACK_IMPORTED_MODULE_0__.appOverlayContainer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheV9jb250cm9sbGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdIO0FBR3hILHVEQUFRLENBQUMsNERBQWlCLEVBQUUsdUVBQTRCLEVBQUUsMEVBQStCLENBQUMsQ0FBQztBQUUzRixNQUFNLG1CQUFtQixHQUFHLElBQUksb0RBQVMsRUFBRSxDQUFDO0FBRTVDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQywyREFBZ0IsQ0FBQyxDQUFDO0FBRTdDLG1CQUFtQixDQUFDLElBQUksQ0FBQywyRUFBZ0MsQ0FBQztLQUNyRCxVQUFVLENBQUMsNERBQWlCLENBQUM7S0FDN0IsZ0JBQWdCLEVBQUUsQ0FBQztBQUl2Qjs7Ozs7Ozs7Ozs7Ozs7QUNmNkQ7QUFDSjtBQUNuRDtBQUNQLHlCQUF5QixzSUFBVTtBQUNuQyxJQUFJLHNJQUFTO0FBQ2IscUNBQXFDLDJKQUFnQztBQUNyRSxvQkFBb0Isc0lBQVEsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHFDO0FBQ007QUFDUDtBQUNEO0FBQ25DOzs7Ozs7VUNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7Ozs7Ozs7Ozs7QUNBb0U7QUFDVjtBQUUxRCx3RUFBVyxDQUFDLDZFQUFtQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdmVybGF5Ly4vc3JjL0JpbmRpbmdzL0FwcE92ZXJsYXlCaW5kaW5ncy50cyIsIndlYnBhY2s6Ly9vdmVybGF5Ly4uL29icy10YXUtYmxlbmQvZGlzdC9FbnRyeS9DZW50cmFsLmpzIiwid2VicGFjazovL292ZXJsYXkvLi4vb2JzLXRhdS1ibGVuZC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL292ZXJsYXkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3ZlcmxheS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb3ZlcmxheS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL292ZXJsYXkvLi9zcmMvb3ZlcmxheV9lbnRyeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPVkVSTEFZX1RPS0VOUywgb3ZlcmxheUNvbnRhaW5lciwgT3ZlcmxheUNvbnRyb2xsZXIsIFNIQVJFRF9UT0tFTlMsIGluamVjdGVkLCBDb250YWluZXIgfSBmcm9tIFwib2JzLXRhdS1ibGVuZFwiO1xuXG5cbmluamVjdGVkKE92ZXJsYXlDb250cm9sbGVyLCBPVkVSTEFZX1RPS0VOUy5jb250cm9sV29ya2VyLCBTSEFSRURfVE9LRU5TLmZyYW1ld29ya0V2ZW50QnVzKTtcblxuY29uc3QgYXBwT3ZlcmxheUNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcblxuYXBwT3ZlcmxheUNvbnRhaW5lci5leHRlbmQob3ZlcmxheUNvbnRhaW5lcik7XG5cbmFwcE92ZXJsYXlDb250YWluZXIuYmluZChPVkVSTEFZX1RPS0VOUy5vdmVybGF5Q29udHJvbGxlcilcbiAgICAudG9JbnN0YW5jZShPdmVybGF5Q29udHJvbGxlcilcbiAgICAuaW5TaW5nbGV0b25TY29wZSgpO1xuXG5leHBvcnQge1xuICAgIGFwcE92ZXJsYXlDb250YWluZXIsXG59XG4iLCJpbXBvcnQgeyBDRU5UUkFMX1RPS0VOUyB9IGZyb20gXCIjcm9vdC9CaW5kaW5ncy9DZW50cmFsVG9rZW5zXCI7XG5pbXBvcnQgeyBjb25mX2ZldGNoLCBjb25mX2dldCwgY29uZl9sb2FkIH0gZnJvbSBcIiNzaGFyZWRcIjtcbmV4cG9ydCBjb25zdCBpbml0Q2VudHJhbCA9IGFzeW5jIChjb250YWluZXIsIGNvbmZpZ1VyaSkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGNvbmZfZmV0Y2goY29uZmlnVXJpKTtcbiAgICBjb25mX2xvYWQoY29uZmlnKTtcbiAgICBjb25zdCBjb250cm9sbGVyID0gY29udGFpbmVyLmdldChDRU5UUkFMX1RPS0VOUy5jZW50cmFsQ29udHJvbGxlcik7XG4gICAgY29udHJvbGxlci5pbml0KGNvbmZfZ2V0KFwiY2VudHJhbENvbnRyb2xsZXJcIiwge30pKTtcbiAgICBjb25zdCBvbmNvbm5lY3QgPSBjb250cm9sbGVyLm9uU2hhcmVkV29ya2VyQ29ubmVjdDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DZW50cmFsLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gXCIjcm9vdC9CaW5kaW5ncy9pbmRleFwiO1xuZXhwb3J0ICogZnJvbSBcIiNyb290L0luZnJhc3RydWN0dXJlL2luZGV4XCI7XG5leHBvcnQgKiBmcm9tIFwiI3Jvb3QvT3ZlcmxheS9pbmRleFwiO1xuZXhwb3J0ICogZnJvbSBcIiNyb290L1NoYXJlZC9pbmRleFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgeyBhcHBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSBcIi4vQmluZGluZ3MvQXBwT3ZlcmxheUJpbmRpbmdzXCI7XG5pbXBvcnQgeyBpbml0T3ZlcmxheSB9IGZyb20gXCJvYnMtdGF1LWJsZW5kL0VudHJ5L092ZXJsYXlcIjtcblxuaW5pdE92ZXJsYXkoYXBwT3ZlcmxheUNvbnRhaW5lcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=