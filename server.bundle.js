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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/controllers/Todo.js":
/*!*********************************!*\
  !*** ./app/controllers/Todo.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar todo = __webpack_require__(/*! ../../models */ \"./models/index.js\");\n\nvar TodoController = exports.TodoController = {\n\tgetList: getList\n};\n\nfunction getList() {\n\treturn todo;\n}\n\n//# sourceURL=webpack:///./app/controllers/Todo.js?");

/***/ }),

/***/ "./app/controllers/index.js":
/*!**********************************!*\
  !*** ./app/controllers/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Todo = __webpack_require__(/*! ./Todo */ \"./app/controllers/Todo.js\");\n\nObject.keys(_Todo).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _Todo[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./app/controllers/index.js?");

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

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__filename, __dirname) {\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar basename = path.basename(__filename);\nvar env = \"development\" || 'development';\nvar config = __webpack_require__(/*! ./models/../config/database.json */ \"./config/database.json\")[env];\nvar db = {};\n\nif (config.use_env_variable) {\n  var sequelize = new Sequelize(process.env[config.use_env_variable], config);\n} else {\n  var sequelize = new Sequelize(config.database, config.username, config.password, config);\n}\n\nfs.readdirSync(__dirname).filter(function (file) {\n  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';\n}).forEach(function (file) {\n  var model = sequelize['import'](path.join(__dirname, file));\n  db[model.name] = model;\n});\n\nObject.keys(db).forEach(function (modelName) {\n  if (db[modelName].associate) {\n    db[modelName].associate(db);\n  }\n});\n\ndb.sequelize = sequelize;\ndb.Sequelize = Sequelize;\n\nmodule.exports = db;\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\", \"/\"))\n\n//# sourceURL=webpack:///./models/index.js?");

/***/ }),

/***/ "./routes/api/index.js":
/*!*****************************!*\
  !*** ./routes/api/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _controllers = __webpack_require__(/*! ../../app/controllers */ \"./app/controllers/index.js\");\n\nvar API = function API(router) {\n\trouter.get('/todos', function (req, res) {\n\t\tres.send(JSON.parse(_controllers.TodoController.getList()));\n\t});\n\n\treturn router;\n};\n\nexports.default = API;\n\n//# sourceURL=webpack:///./routes/api/index.js?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _api = __webpack_require__(/*! ./api */ \"./routes/api/index.js\");\n\nvar _api2 = _interopRequireDefault(_api);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\nvar Routes = function Routes(app) {\n\tapp.use('/api', (0, _api2.default)(router));\n};\n\nexports.default = Routes;\n\n//# sourceURL=webpack:///./routes/index.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./routes/index.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _config = __webpack_require__(/*! ./config */ \"./config/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n(0, _routes2.default)(app);\n\napp.listen(_config.SERVER_PORT, function (err) {\n\tconsole.log('Server is running on port', _config.SERVER_PORT);\n});\n\n//# sourceURL=webpack:///./server.js?");

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