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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/graf1.js":
/*!*********************!*\
  !*** ./js/graf1.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./js/graf1.js?");

/***/ }),

/***/ "./js/graf2.js":
/*!*********************!*\
  !*** ./js/graf2.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Highcharts.chart('graf2', {\n  title: {\n    text: 'Jak se měnila účast ve volbách do Evropského parlamentu v letech 1979 až 2014'\n  },\n  subtitle: {\n    text: 'Kliknutím na jejich název v legendě můžete do srovnání přidat (či odebrat) další země'\n  },\n  yAxis: {\n    title: {\n      text: 'volební účast'\n    }\n  },\n  xAxis: {\n    tickPositioner: function tickPositioner() {\n      return [1979, 1984, 1989, 1994, 1999, 2004, 2009, 2014];\n    },\n    title: {\n      text: \"Tečkovaná čára značí země, kde je účast ve volbách povinná. Také v Itálii platila volební povinnost v letech 1979 až 1989.\"\n    }\n  },\n  legend: {\n    layout: 'vertical',\n    align: 'right',\n    verticalAlign: 'top',\n    y: 40\n  },\n  credits: {\n    text: 'Zdroj dat: Evropský parlament',\n    href: 'http://www.europarl.europa.eu/RegData/etudes/BRIE/2018/614733/EPRS_BRI(2018)614733_EN.pdf'\n  },\n  tooltip: {\n    split: true,\n    valueSuffix: ' %'\n  },\n  plotOptions: {\n    line: {\n      visible: false\n    },\n    series: {\n      label: {\n        connectorAllowed: false\n      },\n      pointStart: 1979,\n      pointInterval: 5,\n      connectNulls: true\n    }\n  },\n  series: [{\n    name: 'Belgie',\n    data: [91.4, 92.1, 90.7, 90.7, 91, 90.8, 90.4, 89.6],\n    visible: true,\n    dashStyle: \"ShortDot\"\n  }, {\n    name: 'Lucembursko',\n    data: [88.9, 88.8, 87.4, 88.5, 87.3, 91.3, 90.8, 85.5],\n    dashStyle: \"ShortDot\"\n  }, {\n    name: 'Malta',\n    data: [null, null, null, null, null, 82.4, 78.8, 74.8]\n  }, {\n    name: 'Řecko',\n    data: [null, 77.2, 79.9, 73.2, 71.5, 63.2, 52.6, 60],\n    dashStyle: \"ShortDot\"\n  }, {\n    name: 'Itálie',\n    data: [84.9, 83.4, 81, 73.6, 69.8, 71.7, 65.4, 57.2]\n  }, {\n    name: 'Dánsko',\n    data: [47.8, 52.4, 46.2, 52.9, 50.4, 47.9, 59.5, 56.3]\n  }, {\n    name: 'Irsko',\n    data: [63.6, 47.6, 68.3, 44, 50.2, 58.6, 57.6, 52.4]\n  }, {\n    name: 'Švédsko',\n    data: [null, null, null, null, 38.8, 37.9, 45.5, 51.1]\n  }, {\n    name: 'Německo',\n    data: [65.7, 56.8, 62.3, 60, 45.2, 43, 43.3, 48.1]\n  }, {\n    name: 'Litva',\n    data: [null, null, null, null, null, 48.4, 21, 47.4]\n  }, {\n    name: 'Rakousko',\n    data: [null, null, null, null, 49, 42.4, 46, 45.4]\n  }, {\n    name: 'Kypr',\n    data: [null, null, null, null, null, 72.5, 59.4, 44],\n    dashStyle: \"ShortDot\"\n  }, {\n    name: 'Španělsko',\n    data: [null, null, 54.6, 59.1, 63, 45.1, 44.9, 43.8]\n  }, {\n    name: 'Evropská unie',\n    data: [61.8, 59, 58.3, 56.7, 49.5, 45.6, 43, 42.6],\n    visible: true,\n    color: \"#003399\",\n    index: 0,\n    lineWidth: 3\n  }, {\n    name: 'Francie',\n    data: [60.7, 56.7, 48.7, 52.8, 46.8, 42.8, 40.6, 42.4]\n  }, {\n    name: 'Finsko',\n    data: [null, null, null, null, 30.1, 39.4, 40.5, 41]\n  }, {\n    name: 'Nizozemsko',\n    data: [58.1, 50.6, 47.2, 35.7, 30, 39.3, 36.8, 37.3]\n  }, {\n    name: 'Estonsko',\n    data: [null, null, null, null, null, 26.8, 43.9, 36.5]\n  }, {\n    name: 'Bulharsko',\n    data: [null, null, null, null, null, null, 38.9, 36.1]\n  }, {\n    name: 'Británie',\n    data: [32.3, 32.6, 36.2, 36.4, 24, 39.2, 34.5, 35.4]\n  }, {\n    name: 'Portugalsko',\n    data: [null, null, 51.2, 35.5, 39.9, 38.6, 36.8, 33.7]\n  }, {\n    name: 'Rumunsko',\n    data: [null, null, null, null, null, null, 27.7, 32.4]\n  }, {\n    name: 'Lotyšsko',\n    data: [null, null, null, null, null, 41.3, 53.7, 30.2]\n  }, {\n    name: 'Maďarsko',\n    data: [null, null, null, null, null, 38.5, 36.3, 29]\n  }, {\n    name: 'Chorvatsko',\n    data: [null, null, null, null, null, null, null, 25.2]\n  }, {\n    name: 'Slovinsko',\n    data: [null, null, null, null, null, 28.4, 28.3, 24.5]\n  }, {\n    name: 'Polsko',\n    data: [null, null, null, null, null, 20.9, 24.5, 23.8]\n  }, {\n    name: 'Česká republika',\n    data: [null, null, null, null, null, 28.3, 28.2, 18.2],\n    visible: true,\n    color: \"#d52834\",\n    index: 0.5\n  }, {\n    name: 'Slovensko',\n    data: [null, null, null, null, null, 17, 19.6, 13],\n    visible: true,\n    index: 0.5\n  }],\n  responsive: {\n    rules: [{\n      condition: {\n        maxWidth: 500\n      },\n      chartOptions: {\n        legend: {\n          layout: 'horizontal',\n          align: 'center',\n          verticalAlign: 'bottom'\n        }\n      }\n    }]\n  }\n});\n\n//# sourceURL=webpack:///./js/graf2.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _targetblank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./targetblank */ \"./js/targetblank.js\");\n/* harmony import */ var _targetblank__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_targetblank__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graf1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graf1 */ \"./js/graf1.js\");\n/* harmony import */ var _graf1__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_graf1__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graf2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graf2 */ \"./js/graf2.js\");\n/* harmony import */ var _graf2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_graf2__WEBPACK_IMPORTED_MODULE_2__);\n // pro otvírání odkazů v novém okně\n\n\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./js/targetblank.js":
/*!***************************!*\
  !*** ./js/targetblank.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var links = document.getElementsByTagName(\"a\");\n  Array.prototype.forEach.call(links, function (link) {\n    if (link.hostname !== window.location.hostname) {\n      link.target = \"_blank\";\n      link.rel = \"noopener noreferrer\";\n    }\n  });\n});\n\n//# sourceURL=webpack:///./js/targetblank.js?");

/***/ })

/******/ });