/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/controllers/Auth.js":
/*!*********************************!*\
  !*** ./app/controllers/Auth.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.AuthController = undefined;\n\nvar login = function () {\n\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n\t\tvar input, result;\n\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\twhile (1) {\n\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\tcase 0:\n\t\t\t\t\t\tinput = req.body;\n\t\t\t\t\t\t_context.prev = 1;\n\t\t\t\t\t\t_context.next = 4;\n\t\t\t\t\t\treturn _service.authService.login(input.email, input.password);\n\n\t\t\t\t\tcase 4:\n\t\t\t\t\t\tresult = _context.sent;\n\n\t\t\t\t\t\tres.status(200).send(result);\n\t\t\t\t\t\t_context.next = 11;\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase 8:\n\t\t\t\t\t\t_context.prev = 8;\n\t\t\t\t\t\t_context.t0 = _context['catch'](1);\n\n\t\t\t\t\t\tres.status(403).send(_context.t0);\n\n\t\t\t\t\tcase 11:\n\t\t\t\t\tcase 'end':\n\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t}\n\t\t\t}\n\t\t}, _callee, this, [[1, 8]]);\n\t}));\n\n\treturn function login(_x, _x2) {\n\t\treturn _ref.apply(this, arguments);\n\t};\n}();\n\nvar register = function () {\n\tvar _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n\t\tvar result;\n\t\treturn regeneratorRuntime.wrap(function _callee2$(_context2) {\n\t\t\twhile (1) {\n\t\t\t\tswitch (_context2.prev = _context2.next) {\n\t\t\t\t\tcase 0:\n\t\t\t\t\t\t_context2.prev = 0;\n\t\t\t\t\t\t_context2.next = 3;\n\t\t\t\t\t\treturn _service.authService.register(req.body);\n\n\t\t\t\t\tcase 3:\n\t\t\t\t\t\tresult = _context2.sent;\n\n\t\t\t\t\t\tres.status(200).send(result);\n\t\t\t\t\t\t_context2.next = 10;\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase 7:\n\t\t\t\t\t\t_context2.prev = 7;\n\t\t\t\t\t\t_context2.t0 = _context2['catch'](0);\n\n\t\t\t\t\t\tres.status(403).send(_context2.t0);\n\n\t\t\t\t\tcase 10:\n\t\t\t\t\tcase 'end':\n\t\t\t\t\t\treturn _context2.stop();\n\t\t\t\t}\n\t\t\t}\n\t\t}, _callee2, this, [[0, 7]]);\n\t}));\n\n\treturn function register(_x3, _x4) {\n\t\treturn _ref2.apply(this, arguments);\n\t};\n}();\n\nvar _service = __webpack_require__(/*! ../service */ \"./app/service/index.js\");\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar AuthController = exports.AuthController = {\n\tlogin: login,\n\tregister: register\n};\n\n//# sourceURL=webpack:///./app/controllers/Auth.js?");

/***/ }),

/***/ "./app/controllers/Todo.js":
/*!*********************************!*\
  !*** ./app/controllers/Todo.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.TodoController = undefined;\n\nvar getList = function () {\n\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n\t\tvar result;\n\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\twhile (1) {\n\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\tcase 0:\n\t\t\t\t\t\t_context.prev = 0;\n\t\t\t\t\t\t_context.next = 3;\n\t\t\t\t\t\treturn _service.todoService.getList();\n\n\t\t\t\t\tcase 3:\n\t\t\t\t\t\tresult = _context.sent;\n\n\t\t\t\t\t\tres.status(200).send(result);\n\t\t\t\t\t\t_context.next = 10;\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase 7:\n\t\t\t\t\t\t_context.prev = 7;\n\t\t\t\t\t\t_context.t0 = _context['catch'](0);\n\n\t\t\t\t\t\tres.status(403).send(_context.t0);\n\n\t\t\t\t\tcase 10:\n\t\t\t\t\tcase 'end':\n\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t}\n\t\t\t}\n\t\t}, _callee, this, [[0, 7]]);\n\t}));\n\n\treturn function getList(_x, _x2) {\n\t\treturn _ref.apply(this, arguments);\n\t};\n}();\n\nvar storeData = function () {\n\tvar _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n\t\tvar result;\n\t\treturn regeneratorRuntime.wrap(function _callee2$(_context2) {\n\t\t\twhile (1) {\n\t\t\t\tswitch (_context2.prev = _context2.next) {\n\t\t\t\t\tcase 0:\n\t\t\t\t\t\t_context2.prev = 0;\n\t\t\t\t\t\t_context2.next = 3;\n\t\t\t\t\t\treturn _service.todoService.storeData(req.body);\n\n\t\t\t\t\tcase 3:\n\t\t\t\t\t\tresult = _context2.sent;\n\n\t\t\t\t\t\tres.status(200).send(result);\n\t\t\t\t\t\t_context2.next = 10;\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase 7:\n\t\t\t\t\t\t_context2.prev = 7;\n\t\t\t\t\t\t_context2.t0 = _context2['catch'](0);\n\n\t\t\t\t\t\tres.status(403).send(_context2.t0);\n\n\t\t\t\t\tcase 10:\n\t\t\t\t\tcase 'end':\n\t\t\t\t\t\treturn _context2.stop();\n\t\t\t\t}\n\t\t\t}\n\t\t}, _callee2, this, [[0, 7]]);\n\t}));\n\n\treturn function storeData(_x3, _x4) {\n\t\treturn _ref2.apply(this, arguments);\n\t};\n}();\n\nvar findById = function () {\n\tvar _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n\t\tvar result;\n\t\treturn regeneratorRuntime.wrap(function _callee3$(_context3) {\n\t\t\twhile (1) {\n\t\t\t\tswitch (_context3.prev = _context3.next) {\n\t\t\t\t\tcase 0:\n\t\t\t\t\t\t_context3.prev = 0;\n\t\t\t\t\t\t_context3.next = 3;\n\t\t\t\t\t\treturn _service.todoService.findById(req.params.todoId);\n\n\t\t\t\t\tcase 3:\n\t\t\t\t\t\tresult = _context3.sent;\n\n\t\t\t\t\t\tres.status(200).send(result);\n\t\t\t\t\t\t_context3.next = 10;\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase 7:\n\t\t\t\t\t\t_context3.prev = 7;\n\t\t\t\t\t\t_context3.t0 = _context3['catch'](0);\n\n\t\t\t\t\t\tres.status(403).send(_context3.t0);\n\n\t\t\t\t\tcase 10:\n\t\t\t\t\tcase 'end':\n\t\t\t\t\t\treturn _context3.stop();\n\t\t\t\t}\n\t\t\t}\n\t\t}, _callee3, this, [[0, 7]]);\n\t}));\n\n\treturn function findById(_x5, _x6) {\n\t\treturn _ref3.apply(this, arguments);\n\t};\n}();\n\nvar updateData = function () {\n\tvar _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n\t\tvar condition, result;\n\t\treturn regeneratorRuntime.wrap(function _callee4$(_context4) {\n\t\t\twhile (1) {\n\t\t\t\tswitch (_context4.prev = _context4.next) {\n\t\t\t\t\tcase 0:\n\t\t\t\t\t\t_context4.prev = 0;\n\t\t\t\t\t\tcondition = {};\n\n\t\t\t\t\t\tcondition.id = req.params.todoId;\n\n\t\t\t\t\t\t_context4.next = 5;\n\t\t\t\t\t\treturn _service.todoService.updateData(condition, req.body);\n\n\t\t\t\t\tcase 5:\n\t\t\t\t\t\tresult = _context4.sent;\n\n\t\t\t\t\t\tres.status(200).send(result);\n\t\t\t\t\t\t_context4.next = 12;\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase 9:\n\t\t\t\t\t\t_context4.prev = 9;\n\t\t\t\t\t\t_context4.t0 = _context4['catch'](0);\n\n\t\t\t\t\t\tres.status(403).send(_context4.t0);\n\n\t\t\t\t\tcase 12:\n\t\t\t\t\tcase 'end':\n\t\t\t\t\t\treturn _context4.stop();\n\t\t\t\t}\n\t\t\t}\n\t\t}, _callee4, this, [[0, 9]]);\n\t}));\n\n\treturn function updateData(_x7, _x8) {\n\t\treturn _ref4.apply(this, arguments);\n\t};\n}();\n\nvar deleteData = function () {\n\tvar _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {\n\t\tvar condition, result;\n\t\treturn regeneratorRuntime.wrap(function _callee5$(_context5) {\n\t\t\twhile (1) {\n\t\t\t\tswitch (_context5.prev = _context5.next) {\n\t\t\t\t\tcase 0:\n\t\t\t\t\t\t_context5.prev = 0;\n\t\t\t\t\t\tcondition = {};\n\n\t\t\t\t\t\tcondition.id = req.params.todoId;\n\n\t\t\t\t\t\t_context5.next = 5;\n\t\t\t\t\t\treturn _service.todoService.deleteData(condition);\n\n\t\t\t\t\tcase 5:\n\t\t\t\t\t\tresult = _context5.sent;\n\n\t\t\t\t\t\tres.status(200).send(result);\n\t\t\t\t\t\t_context5.next = 12;\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase 9:\n\t\t\t\t\t\t_context5.prev = 9;\n\t\t\t\t\t\t_context5.t0 = _context5['catch'](0);\n\n\t\t\t\t\t\tres.status(403).send(_context5.t0);\n\n\t\t\t\t\tcase 12:\n\t\t\t\t\tcase 'end':\n\t\t\t\t\t\treturn _context5.stop();\n\t\t\t\t}\n\t\t\t}\n\t\t}, _callee5, this, [[0, 9]]);\n\t}));\n\n\treturn function deleteData(_x9, _x10) {\n\t\treturn _ref5.apply(this, arguments);\n\t};\n}();\n\nvar _service = __webpack_require__(/*! ../service */ \"./app/service/index.js\");\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar TodoController = exports.TodoController = {\n\tgetList: getList,\n\tstoreData: storeData,\n\tfindById: findById,\n\tupdateData: updateData,\n\tdeleteData: deleteData\n};\n\n//# sourceURL=webpack:///./app/controllers/Todo.js?");

/***/ }),

/***/ "./app/controllers/index.js":
/*!**********************************!*\
  !*** ./app/controllers/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Todo = __webpack_require__(/*! ./Todo */ \"./app/controllers/Todo.js\");\n\nObject.keys(_Todo).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _Todo[key];\n    }\n  });\n});\n\nvar _Auth = __webpack_require__(/*! ./Auth */ \"./app/controllers/Auth.js\");\n\nObject.keys(_Auth).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _Auth[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./app/controllers/index.js?");

/***/ }),

/***/ "./app/service/Auth.js":
/*!*****************************!*\
  !*** ./app/service/Auth.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.authService = undefined;\n\nvar _lib = __webpack_require__(/*! ../../lib */ \"./lib/index.js\");\n\nvar _encryptPassword = __webpack_require__(/*! encrypt-password */ \"encrypt-password\");\n\nvar _encryptPassword2 = _interopRequireDefault(_encryptPassword);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar User = __webpack_require__(/*! ../../models */ \"./models/index.js\").users;\nvar authService = exports.authService = {\n\tlogin: login,\n\tregister: register\n};\n\nfunction login(email, password) {\n\treturn new Promise(function (resolve, reject) {\n\t\tUser.findOne({\n\t\t\twhere: {\n\t\t\t\temail: email,\n\t\t\t\tpassword: encryptPassword(password)\n\t\t\t},\n\t\t\traw: true\n\t\t}).then(function (user) {\n\t\t\tif (!user) throw 'Email and password invalid';\n\n\t\t\tvar token = (0, _lib.createToken)(user);\n\t\t\tif (!token) throw \"Cannot generate token\";\n\n\t\t\tresolve(token);\n\t\t}).catch(function (err) {\n\t\t\treturn reject(err);\n\t\t});\n\t});\n}\n\nfunction register(data) {\n\tvar _this = this;\n\n\treturn new Promise(function () {\n\t\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {\n\t\t\tvar userEmail, user, token;\n\t\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\t\twhile (1) {\n\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t_context.prev = 0;\n\n\t\t\t\t\t\t\tif (data.name) {\n\t\t\t\t\t\t\t\t_context.next = 3;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tthrow 'Name field is required';\n\n\t\t\t\t\t\tcase 3:\n\t\t\t\t\t\t\tif (data.email) {\n\t\t\t\t\t\t\t\t_context.next = 5;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tthrow 'Email field is required';\n\n\t\t\t\t\t\tcase 5:\n\t\t\t\t\t\t\tif (data.password) {\n\t\t\t\t\t\t\t\t_context.next = 7;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tthrow 'Password field is required';\n\n\t\t\t\t\t\tcase 7:\n\t\t\t\t\t\t\t_context.next = 9;\n\t\t\t\t\t\t\treturn findUserByEmail(data.email);\n\n\t\t\t\t\t\tcase 9:\n\t\t\t\t\t\t\tuserEmail = _context.sent;\n\n\t\t\t\t\t\t\tif (!userEmail) {\n\t\t\t\t\t\t\t\t_context.next = 12;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tthrow 'Email is exist';\n\n\t\t\t\t\t\tcase 12:\n\t\t\t\t\t\t\tuser = User.create({\n\t\t\t\t\t\t\t\tname: data.name,\n\t\t\t\t\t\t\t\temail: data.email,\n\t\t\t\t\t\t\t\tpassword: encryptPassword(data.password)\n\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\t\tif (user) {\n\t\t\t\t\t\t\t\t_context.next = 15;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tthrow 'Register is failed';\n\n\t\t\t\t\t\tcase 15:\n\t\t\t\t\t\t\ttoken = (0, _lib.createToken)(user);\n\t\t\t\t\t\t\treturn _context.abrupt('return', resolve(token));\n\n\t\t\t\t\t\tcase 19:\n\t\t\t\t\t\t\t_context.prev = 19;\n\t\t\t\t\t\t\t_context.t0 = _context['catch'](0);\n\t\t\t\t\t\t\treturn _context.abrupt('return', reject(_context.t0));\n\n\t\t\t\t\t\tcase 22:\n\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, _callee, _this, [[0, 19]]);\n\t\t}));\n\n\t\treturn function (_x, _x2) {\n\t\t\treturn _ref.apply(this, arguments);\n\t\t};\n\t}());\n}\n\nfunction findUserByEmail(email) {\n\treturn new Promise(function (resolve, reject) {\n\t\tUser.findOne({\n\t\t\twhere: {\n\t\t\t\temail: email\n\t\t\t},\n\t\t\traw: true\n\t\t}).then(function (user) {\n\t\t\tresolve(user);\n\t\t}).catch(function (err) {\n\t\t\treturn reject(err);\n\t\t});\n\t});\n}\n\nfunction encryptPassword(password) {\n\tvar encryptedPassword = (0, _encryptPassword2.default)(password, {\n\t\tsecret: 'secret',\n\t\tmin: 8,\n\t\tmax: 24,\n\t\tpattern: /^\\w{8,24}$/,\n\t\tsignature: 'signature'\n\t});\n\n\treturn encryptedPassword;\n}\n\n//# sourceURL=webpack:///./app/service/Auth.js?");

/***/ }),

/***/ "./app/service/Todo.js":
/*!*****************************!*\
  !*** ./app/service/Todo.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar Todo = __webpack_require__(/*! ../../models */ \"./models/index.js\").todos;\n\nvar todoService = exports.todoService = {\n\tgetList: getList,\n\tfindById: findById,\n\tstoreData: storeData,\n\tupdateData: updateData,\n\tdeleteData: deleteData\n};\n\nfunction getList() {\n\treturn new Promise(function (resolve, reject) {\n\t\tTodo.findAll({}).then(function (result) {\n\t\t\tresolve(result);\n\t\t}).catch(function (err) {\n\t\t\treturn reject(err);\n\t\t});\n\t});\n}\n\nfunction storeData(data) {\n\treturn new Promise(function (resolve, reject) {\n\t\tTodo.create(data).then(function (result) {\n\t\t\tresolve(result);\n\t\t}).catch(function (err) {\n\t\t\treturn reject(err);\n\t\t});\n\t});\n}\n\nfunction findById(ID) {\n\treturn new Promise(function (resolve, reject) {\n\t\tTodo.findById(ID).then(function (result) {\n\t\t\tresolve(result);\n\t\t}).catch(function (err) {\n\t\t\treturn reject(err);\n\t\t});\n\t});\n}\n\nfunction updateData(condition, data) {\n\treturn new Promise(function (resolve, reject) {\n\t\tTodo.update(data, {\n\t\t\twhere: condition\n\t\t}).then(function (result) {\n\t\t\tresolve(result);\n\t\t}).catch(function (err) {\n\t\t\treturn reject(err);\n\t\t});\n\t});\n}\n\nfunction deleteData(condition) {\n\treturn new Promise(function (resolve, reject) {\n\t\tTodo.destroy({\n\t\t\twhere: condition\n\t\t}).then(function (result) {\n\t\t\tresolve(result);\n\t\t}).catch(function (err) {\n\t\t\treturn reject(err);\n\t\t});\n\t});\n}\n\n//# sourceURL=webpack:///./app/service/Todo.js?");

/***/ }),

/***/ "./app/service/index.js":
/*!******************************!*\
  !*** ./app/service/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Todo = __webpack_require__(/*! ./Todo */ \"./app/service/Todo.js\");\n\nObject.keys(_Todo).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _Todo[key];\n    }\n  });\n});\n\nvar _Auth = __webpack_require__(/*! ./Auth */ \"./app/service/Auth.js\");\n\nObject.keys(_Auth).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _Auth[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./app/service/index.js?");

/***/ }),

/***/ "./config/app.json":
/*!*************************!*\
  !*** ./config/app.json ***!
  \*************************/
/*! exports provided: NAME, ENV, URL, default */
/***/ (function(module) {

eval("module.exports = {\"NAME\":\"Simple bolierplate Express\",\"ENV\":\"development\",\"URL\":\"http://localhost\"};\n\n//# sourceURL=webpack:///./config/app.json?");

/***/ }),

/***/ "./config/auth.json":
/*!**************************!*\
  !*** ./config/auth.json ***!
  \**************************/
/*! exports provided: secretKey, default */
/***/ (function(module) {

eval("module.exports = {\"secretKey\":\"secret\"};\n\n//# sourceURL=webpack:///./config/auth.json?");

/***/ }),

/***/ "./config/database.json":
/*!******************************!*\
  !*** ./config/database.json ***!
  \******************************/
/*! exports provided: development, test, production, default */
/***/ (function(module) {

eval("module.exports = {\"development\":{\"username\":\"root\",\"password\":null,\"database\":\"todo_db\",\"host\":\"127.0.0.1\",\"dialect\":\"mysql\"},\"test\":{\"username\":\"root\",\"password\":null,\"database\":\"database_test\",\"host\":\"127.0.0.1\",\"dialect\":\"mysql\"},\"production\":{\"username\":\"root\",\"password\":null,\"database\":\"database_production\",\"host\":\"127.0.0.1\",\"dialect\":\"mysql\"}};\n\n//# sourceURL=webpack:///./config/database.json?");

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.DB_PROTOCOL = exports.DB_PASS = exports.DB_USER = exports.DB_NAME = exports.DB_HOST = exports.SERVER_PORT = exports.AUTH_KEY = exports.APP_URL = exports.APP_ENV = exports.APP_NAME = undefined;\n\nvar _app = __webpack_require__(/*! ./app.json */ \"./config/app.json\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _auth = __webpack_require__(/*! ./auth.json */ \"./config/auth.json\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _server = __webpack_require__(/*! ./server.json */ \"./config/server.json\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _database = __webpack_require__(/*! ./database.json */ \"./config/database.json\");\n\nvar _database2 = _interopRequireDefault(_database);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar APP_NAME = exports.APP_NAME = _app2.default.NAME;\nvar APP_ENV = exports.APP_ENV = _app2.default.ENV;\nvar APP_URL = exports.APP_URL = _app2.default.URL;\n\nvar AUTH_KEY = exports.AUTH_KEY = _auth2.default.secretKey;\n\nvar SERVER_PORT = exports.SERVER_PORT = _server2.default.PORT;\n\nvar DB_HOST = exports.DB_HOST = _database2.default[APP_ENV].host;\nvar DB_NAME = exports.DB_NAME = _database2.default[APP_ENV].database;\nvar DB_USER = exports.DB_USER = _database2.default[APP_ENV].username;\nvar DB_PASS = exports.DB_PASS = _database2.default[APP_ENV].password;\nvar DB_PROTOCOL = exports.DB_PROTOCOL = _database2.default[APP_ENV].protocol;\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./config/server.json":
/*!****************************!*\
  !*** ./config/server.json ***!
  \****************************/
/*! exports provided: PORT, default */
/***/ (function(module) {

eval("module.exports = {\"PORT\":3000};\n\n//# sourceURL=webpack:///./config/server.json?");

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.createToken = exports.verifyToken = undefined;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _config = __webpack_require__(/*! ../config */ \"./config/index.js\");\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar verifyToken = exports.verifyToken = function verifyToken(token) {\n\treturn new Promise(function (resolve, reject) {\n\t\t_jsonwebtoken2.default.verify(token, _config.AUTH_KEY, function (err, decodedToken) {\n\t\t\tif (err || !decodedToken) {\n\t\t\t\treturn reject(err);\n\t\t\t}\n\n\t\t\tresolve(decodedToken);\n\t\t});\n\t});\n};\n\nvar createToken = exports.createToken = function createToken(user) {\n\tif ((typeof user === 'undefined' ? 'undefined' : _typeof(user)) !== 'object') {\n\t\tuser = {};\n\t}\n\n\tuser.sessionData = _lodash2.default.reduce(user || {}, function (memo, val, key) {\n\t\tif (typeof val !== \"function\" && key !== \"password\") {\n\t\t\tmemo[key] = val;\n\t\t}\n\t\treturn memo;\n\t}, {});\n\n\tvar token = _jsonwebtoken2.default.sign({\n\t\tuser: user.sessionData\n\t}, _config.AUTH_KEY, {\n\t\texpiresIn: 3600,\n\t\talgorithm: 'HS256'\n\t});\n\n\treturn token;\n};\n\n//# sourceURL=webpack:///./lib/auth.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _auth = __webpack_require__(/*! ./auth */ \"./lib/auth.js\");\n\nObject.keys(_auth).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _auth[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ }),

/***/ "./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.verifyTokenMiddleware = undefined;\n\nvar _lib = __webpack_require__(/*! ../lib */ \"./lib/index.js\");\n\nvar verifyTokenMiddleware = exports.verifyTokenMiddleware = function verifyTokenMiddleware(req, res, next) {\n\tvar token = req.method === 'POST' ? req.body.token : req.query.token;\n\n\t(0, _lib.verifyToken)(token).then(function (decodedToken) {\n\t\treq.user = decodedToken;\n\t\tnext();\n\t}).catch(function (err) {\n\t\tres.status(400).json({ message: \"Invalid auth token provided.\" });\n\t});\n};\n\n//# sourceURL=webpack:///./middleware/auth.js?");

/***/ }),

/***/ "./middleware/index.js":
/*!*****************************!*\
  !*** ./middleware/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _auth = __webpack_require__(/*! ./auth */ \"./middleware/auth.js\");\n\nObject.keys(_auth).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _auth[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./middleware/index.js?");

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__filename) {\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar basename = path.basename(__filename);\nvar env = \"development\" || 'development';\nvar config = __webpack_require__(/*! ./models/../config/database.json */ \"./config/database.json\")[env];\nvar db = {};\n\nif (config.use_env_variable) {\n  var sequelize = new Sequelize(process.env[config.use_env_variable], config);\n} else {\n  var sequelize = new Sequelize(config.database, config.username, config.password, config);\n}\n\nfs.readdirSync(path.join(__dirname, '/models')).filter(function (file) {\n  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';\n}).forEach(function (file) {\n  var model = sequelize['import'](path.join(__dirname, '/models/' + file));\n  db[model.name] = model;\n});\n\nObject.keys(db).forEach(function (modelName) {\n  if (db[modelName].associate) {\n    db[modelName].associate(db);\n  }\n});\n\ndb.sequelize = sequelize;\ndb.Sequelize = Sequelize;\n\nmodule.exports = db;\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///./models/index.js?");

/***/ }),

/***/ "./routes/api/index.js":
/*!*****************************!*\
  !*** ./routes/api/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _controllers = __webpack_require__(/*! ../../app/controllers */ \"./app/controllers/index.js\");\n\nvar API = function API(router) {\n\trouter.get('/todos', _controllers.TodoController.getList);\n\trouter.post('/todos', _controllers.TodoController.storeData);\n\trouter.get('/todos/:todoId/edit', _controllers.TodoController.findById);\n\trouter.put('/todos/:todoId/edit', _controllers.TodoController.updateData);\n\trouter.delete('/todos/:todoId', _controllers.TodoController.deleteData);\n\n\treturn router;\n};\n\nexports.default = API;\n\n//# sourceURL=webpack:///./routes/api/index.js?");

/***/ }),

/***/ "./routes/auth.js":
/*!************************!*\
  !*** ./routes/auth.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _controllers = __webpack_require__(/*! ../app/controllers */ \"./app/controllers/index.js\");\n\nvar Auth = function Auth(router) {\n\trouter.post('/login', _controllers.AuthController.login);\n\trouter.post('/register', _controllers.AuthController.register);\n\n\treturn router;\n};\n\nexports.default = Auth;\n\n//# sourceURL=webpack:///./routes/auth.js?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _api = __webpack_require__(/*! ./api */ \"./routes/api/index.js\");\n\nvar _api2 = _interopRequireDefault(_api);\n\nvar _auth = __webpack_require__(/*! ./auth */ \"./routes/auth.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _middleware = __webpack_require__(/*! ../middleware */ \"./middleware/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\nvar Routes = function Routes(app) {\n\tapp.use('/auth', (0, _auth2.default)(router));\n\n\trouter.all('*', _middleware.verifyTokenMiddleware);\n\tapp.use('/api', (0, _api2.default)(router));\n};\n\nexports.default = Routes;\n\n//# sourceURL=webpack:///./routes/index.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./routes/index.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _config = __webpack_require__(/*! ./config */ \"./config/index.js\");\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use((0, _cors2.default)());\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: false }));\n\n(0, _routes2.default)(app);\n\napp.listen(_config.SERVER_PORT, function (err) {\n\tconsole.log('Server is running on port', _config.SERVER_PORT);\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi babel-polyfill ./server.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! ./server.js */\"./server.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./server.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "encrypt-password":
/*!***********************************!*\
  !*** external "encrypt-password" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"encrypt-password\");\n\n//# sourceURL=webpack:///external_%22encrypt-password%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });