(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/svg/loading1.jsx
var Loading1 = function Loading1(_ref) {
  var width = _ref.width,
      height = _ref.height,
      color = _ref.color;
  return /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: width || "40px",
    height: height || "40px",
    viewBox: "0 0 40 40",
    "enable-background": "new 0 0 40 40"
  }, /*#__PURE__*/React.createElement("path", {
    opacity: "0.2",
    fill: "#000",
    d: "M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color || "#1890ff",
    d: "M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r C22.32,8.481,24.301,9.057,26.013,10.047z"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "rotate",
    from: "0 20 20",
    to: "360 20 20",
    dur: "1s",
    repeatCount: "indefinite"
  })));
};

/* harmony default export */ var loading1 = (Loading1);
// CONCATENATED MODULE: ./src/svg/loading2.jsx
var Loading2 = function Loading2(_ref) {
  var width = _ref.width,
      height = _ref.height,
      color = _ref.color;
  return /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: width || "40px",
    height: height || "40px",
    viewBox: "0 0 50 50",
    "senable-background": "new 0 0 50 50"
  }, /*#__PURE__*/React.createElement("path", {
    fill: color || "#1890ff",
    d: "M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "rotate",
    from: "0 25 25",
    to: "360 25 25",
    dur: "1s",
    repeatCount: "indefinite"
  })));
};

/* harmony default export */ var loading2 = (Loading2);
// CONCATENATED MODULE: ./src/svg/loading3.jsx
var Loading3 = function Loading3(_ref) {
  var width = _ref.width,
      height = _ref.height,
      color = _ref.color;
  return /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: width || "40px",
    height: height || "40px",
    viewBox: "0 0 50 50",
    "enable-background": "new 0 0 50 50"
  }, /*#__PURE__*/React.createElement("path", {
    fill: color || "#1890ff",
    d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "rotate",
    from: "0 25 25",
    to: "360 25 25",
    dur: "1s",
    repeatCount: "indefinite"
  })));
};

/* harmony default export */ var loading3 = (Loading3);
// CONCATENATED MODULE: ./src/svg/loading4.jsx
var Loading4 = function Loading4(_ref) {
  var width = _ref.width,
      height = _ref.height,
      color = _ref.color;
  return /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: width || "24px",
    height: height || "24px",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 50 50"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "7",
    fill: color || "#1890ff"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "scale",
    values: "1,1; 1,3; 1,1",
    begin: "0s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "0",
    width: "4",
    height: "7",
    fill: color || "#1890ff"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "scale",
    values: "1,1; 1,3; 1,1",
    begin: "0.2s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "0",
    width: "4",
    height: "7",
    fill: color || "#1890ff"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "scale",
    values: "1,1; 1,3; 1,1",
    begin: "0.4s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })));
};

/* harmony default export */ var loading4 = (Loading4);
// CONCATENATED MODULE: ./src/svg/loading5.jsx
var Loading5 = function Loading5(_ref) {
  var width = _ref.width,
      height = _ref.height,
      color = _ref.color;
  return /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: width || "24px",
    height: height || "30px",
    viewBox: "0 0 24 30",
    "enable-background": "new 0 0 50 50"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "10",
    fill: color || "#1890ff"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "translate",
    values: "0 0; 0 20; 0 0",
    begin: "0",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "0",
    width: "4",
    height: "10",
    fill: color || "#1890ff"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "translate",
    values: "0 0; 0 20; 0 0",
    begin: "0.2s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "0",
    width: "4",
    height: "10",
    fill: color || "#1890ff"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "translate",
    values: "0 0; 0 20; 0 0",
    begin: "0.4s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })));
};

/* harmony default export */ var loading5 = (Loading5);
// CONCATENATED MODULE: ./src/svg/loading6.jsx
var Loading6 = function Loading6(_ref) {
  var width = _ref.width,
      height = _ref.height,
      color = _ref.color;
  return /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: width || "24px",
    height: height || "30px",
    viewBox: "0 0 24 30",
    "senable-background": "new 0 0 50 50"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "13",
    width: "4",
    height: "5",
    fill: color || "#1890ff"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    attributeType: "XML",
    values: "5;21;5",
    begin: "0s",
    dur: "0.6s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "y",
    attributeType: "XML",
    values: "13; 5; 13",
    begin: "0s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "13",
    width: "4",
    height: "5",
    fill: color || "#1890ff"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    attributeType: "XML",
    values: "5;21;5",
    begin: "0.15s",
    dur: "0.6s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "y",
    attributeType: "XML",
    values: "13; 5; 13",
    begin: "0.15s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "13",
    width: "4",
    height: "5",
    fill: color || "#1890ff"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    attributeType: "XML",
    values: "5;21;5",
    begin: "0.3s",
    dur: "0.6s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "y",
    attributeType: "XML",
    values: "13; 5; 13",
    begin: "0.3s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })));
};

/* harmony default export */ var loading6 = (Loading6);
// CONCATENATED MODULE: ./src/svg/loading7.jsx
var Loading7 = function Loading7(_ref) {
  var width = _ref.width,
      height = _ref.height,
      color = _ref.color;
  return /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: width || "24px",
    height: height || "30px",
    viewBox: "0 0 24 30",
    "enable-background": "new 0 0 50 50"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "20",
    fill: color || "#1890ff"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    attributeType: "XML",
    values: "1; .2; 1",
    begin: "0s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "7",
    y: "0",
    width: "4",
    height: "20",
    fill: color || "#1890ff"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    attributeType: "XML",
    values: "1; .2; 1",
    begin: "0.2s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "0",
    width: "4",
    height: "20",
    fill: color || "#1890ff"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    attributeType: "XML",
    values: "1; .2; 1",
    begin: "0.4s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })));
};

/* harmony default export */ var loading7 = (Loading7);
// CONCATENATED MODULE: ./src/svg/loading8.jsx
var Loading8 = function Loading8(_ref) {
  var width = _ref.width,
      height = _ref.height,
      color = _ref.color;
  return /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: width || "24px",
    height: height || "30px",
    viewBox: "0 0 24 30",
    "enable-background": "new 0 0 50 50"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "10",
    width: "4",
    height: "10",
    fill: color || "#1890ff",
    opacity: "0.2"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    attributeType: "XML",
    values: "0.2; 1; .2",
    begin: "0s",
    dur: "0.6s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    attributeType: "XML",
    values: "10; 20; 10",
    begin: "0s",
    dur: "0.6s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "y",
    attributeType: "XML",
    values: "10; 5; 10",
    begin: "0s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "10",
    width: "4",
    height: "10",
    fill: color || "#1890ff",
    opacity: "0.2"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    attributeType: "XML",
    values: "0.2; 1; .2",
    begin: "0.15s",
    dur: "0.6s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    attributeType: "XML",
    values: "10; 20; 10",
    begin: "0.15s",
    dur: "0.6s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "y",
    attributeType: "XML",
    values: "10; 5; 10",
    begin: "0.15s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "16",
    y: "10",
    width: "4",
    height: "10",
    fill: color || "#1890ff",
    opacity: "0.2"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    attributeType: "XML",
    values: "0.2; 1; .2",
    begin: "0.3s",
    dur: "0.6s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    attributeType: "XML",
    values: "10; 20; 10",
    begin: "0.3s",
    dur: "0.6s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "y",
    attributeType: "XML",
    values: "10; 5; 10",
    begin: "0.3s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })));
};

/* harmony default export */ var loading8 = (Loading8);
// CONCATENATED MODULE: ./src/loading.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var loading = ({"loading":"hH0jPH08--8mM_X9M7SJu"});
// CONCATENATED MODULE: ./src/Loading.jsx










var Loading_Loading = function Loading(_ref) {
  var type = _ref.type,
      width = _ref.width,
      height = _ref.height,
      color = _ref.color;
  var ldObj = {
    1: /*#__PURE__*/React.createElement(loading1, {
      width: width,
      height: height,
      color: color
    }),
    2: /*#__PURE__*/React.createElement(loading2, {
      width: width,
      height: height,
      color: color
    }),
    3: /*#__PURE__*/React.createElement(loading3, {
      width: width,
      height: height,
      color: color
    }),
    4: /*#__PURE__*/React.createElement(loading4, {
      width: width,
      height: height,
      color: color
    }),
    5: /*#__PURE__*/React.createElement(loading5, {
      width: width,
      height: height,
      color: color
    }),
    6: /*#__PURE__*/React.createElement(loading6, {
      width: width,
      height: height,
      color: color
    }),
    7: /*#__PURE__*/React.createElement(loading7, {
      width: width,
      height: height,
      color: color
    }),
    8: /*#__PURE__*/React.createElement(loading8, {
      width: width,
      height: height,
      color: color
    })
  };
  return /*#__PURE__*/React.createElement("div", null, type ? ldObj[type] : /*#__PURE__*/React.createElement(loading1, {
    width: width,
    height: height,
    color: color
  }));
};

/* harmony default export */ var src_Loading = __webpack_exports__["default"] = (Loading_Loading);

/***/ })
/******/ ])["default"];
});