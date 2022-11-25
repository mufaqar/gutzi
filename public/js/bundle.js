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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/main.js":
/*!********************************!*\
  !*** ../src/assets/js/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_handle_testimonial_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/handle-testimonial-slider */ "../src/assets/js/modules/handle-testimonial-slider.js");
/* harmony import */ var _modules_handle_testimonial_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_handle_testimonial_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_handle_articles_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/handle-articles-slider */ "../src/assets/js/modules/handle-articles-slider.js");
/* harmony import */ var _modules_handle_articles_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_handle_articles_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_handle_mobile_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/handle-mobile-nav */ "../src/assets/js/modules/handle-mobile-nav.js");
/* harmony import */ var _modules_handle_mobile_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_handle_mobile_nav__WEBPACK_IMPORTED_MODULE_2__);






/***/ }),

/***/ "../src/assets/js/modules/handle-articles-slider.js":
/*!**********************************************************!*\
  !*** ../src/assets/js/modules/handle-articles-slider.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {

$('.js-slider-articles .slider__slides').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  prevArrow: $('.js-slider-articles .slider__arrow--prev'),
  nextArrow: $('.js-slider-articles .slider__arrow--next'),
  responsive: [{
    breakpoint: 1399,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1
    }
  }]
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "../src/assets/js/modules/handle-mobile-nav.js":
/*!*****************************************************!*\
  !*** ../src/assets/js/modules/handle-mobile-nav.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {

var $navTrigger = $('.js-nav-trigger');
var body = $('body');
var $nav = $('.js-mobile-nav');
$navTrigger.on('click', function (event) {
  event.preventDefault();
  body.toggleClass('is-fixed');
  $navTrigger.toggleClass('is-active');
  $nav.toggleClass('is-visible');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "../src/assets/js/modules/handle-testimonial-slider.js":
/*!*************************************************************!*\
  !*** ../src/assets/js/modules/handle-testimonial-slider.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {

$('.js-slider-testimonials .slider__slides').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  fade: true,
  prevArrow: $('.js-slider-testimonials .slider__arrow--prev'),
  nextArrow: $('.js-slider-testimonials .slider__arrow--next'),
  responsive: [{
    breakpoint: 767,
    settings: {
      arrows: false
    }
  }]
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });