(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['buzuosheng-loading'] = factory(global.React));
}(this, (function (React$1) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);

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

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".loading {\r\n  width: 200px;\r\n  margin: 0 13px 13px 0;\r\n  border-radius: 5px;\r\n  transition: box-shadow 0.3s ease-in-out;\r\n  padding: 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n";
  styleInject(css_248z);

  var Loading = function Loading(_ref) {
    var type = _ref.type,
        width = _ref.width,
        height = _ref.height,
        color = _ref.color;
    var ldObj = {
      1: /*#__PURE__*/React__default['default'].createElement(Loading1, {
        width: width,
        height: height,
        color: color
      }),
      2: /*#__PURE__*/React__default['default'].createElement(Loading2, {
        width: width,
        height: height,
        color: color
      }),
      3: /*#__PURE__*/React__default['default'].createElement(Loading3, {
        width: width,
        height: height,
        color: color
      }),
      4: /*#__PURE__*/React__default['default'].createElement(Loading4, {
        width: width,
        height: height,
        color: color
      }),
      5: /*#__PURE__*/React__default['default'].createElement(Loading1, {
        width: width,
        height: height,
        color: color
      }),
      6: /*#__PURE__*/React__default['default'].createElement(Loading6, {
        width: width,
        height: height,
        color: color
      }),
      7: /*#__PURE__*/React__default['default'].createElement(Loading7, {
        width: width,
        height: height,
        color: color
      }),
      8: /*#__PURE__*/React__default['default'].createElement(Loading8, {
        width: width,
        height: height,
        color: color
      })
    };
    return /*#__PURE__*/React__default['default'].createElement("div", null, type ? ldObj[type] : /*#__PURE__*/React__default['default'].createElement(Loading1, {
      width: width,
      height: height,
      color: color
    }));
  };

  return Loading;

})));
