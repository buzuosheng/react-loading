(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".loading {\r\n  width: 200px;\r\n  margin: 0 13px 13px 0;\r\n  border-radius: 5px;\r\n  transition: box-shadow 0.3s ease-in-out;\r\n  padding: 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 379:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
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
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ src_Loading; }
});

;// CONCATENATED MODULE: ./src/svg/loading1.jsx
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
;// CONCATENATED MODULE: ./src/svg/loading2.jsx
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
;// CONCATENATED MODULE: ./src/svg/loading3.jsx
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
;// CONCATENATED MODULE: ./src/svg/loading4.jsx
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
;// CONCATENATED MODULE: ./src/svg/loading5.jsx
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
;// CONCATENATED MODULE: ./src/svg/loading6.jsx
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
;// CONCATENATED MODULE: ./src/svg/loading7.jsx
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
;// CONCATENATED MODULE: ./src/svg/loading8.jsx
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
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/loading.css
var loading = __webpack_require__(514);
;// CONCATENATED MODULE: ./src/loading.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(loading/* default */.Z, options);



/* harmony default export */ var src_loading = (loading/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/Loading.jsx










var Loading = function Loading(_ref) {
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

/* harmony default export */ var src_Loading = (Loading);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});