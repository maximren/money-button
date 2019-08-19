import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = autobind;

function autobind() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1) {
    return boundClass.apply(undefined, args);
  } else {
    return boundMethod.apply(undefined, args);
  }
}

/**
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target) {
  // (Using reflect to get all keys including symbols)
  var keys = undefined;
  // Use Reflect if exists
  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    keys = Reflect.ownKeys(target.prototype);
  } else {
    keys = Object.getOwnPropertyNames(target.prototype);
    // use symbols if support is provided
    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
    }
  }

  keys.forEach(function (key) {
    // Ignore special case target method
    if (key === 'constructor') {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

    // Only methods need binding
    if (typeof descriptor.value === 'function') {
      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
    }
  });
  return target;
}

/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error('@autobind decorator can only be applied to methods not: ' + typeof fn);
  }

  // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.
  var definingProperty = false;

  return {
    configurable: true,
    get: function get() {
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
        return fn;
      }

      var boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        value: boundFn,
        configurable: true,
        writable: true
      });
      definingProperty = false;
      return boundFn;
    }
  };
}
module.exports = exports['default'];
});

unwrapExports(lib);

var captialize_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = captialize;
/**
 * Captialize a string
 * @ignore
 * @param {string} string
 * @return {string}
 */
function captialize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = exports["default"];

});

unwrapExports(captialize_1);

var clamp_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clamp;
/**
 * Clamp a value between a min and max value
 * @ignore
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
module.exports = exports["default"];

});

unwrapExports(clamp_1);

var distanceTo_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = distanceTo;
/**
 * Calculate the distance between pointA and pointB
 * @ignore
 * @param {Point} pointA
 * @param {Point} pointB
 * @return {number} Distance
 */
function distanceTo(pointA, pointB) {
  var xDiff = Math.pow(pointB.x - pointA.x, 2);
  var yDiff = Math.pow(pointB.y - pointA.y, 2);

  return Math.sqrt(xDiff + yDiff);
}
module.exports = exports["default"];

});

unwrapExports(distanceTo_1);

var isDefined_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDefined;
/**
 * Check if a value is defined
 * @ignore
 * @param {*} value
 * @return {boolean}
 */
function isDefined(value) {
  return value !== undefined && value !== null;
}
module.exports = exports["default"];

});

unwrapExports(isDefined_1);

var isNumber_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumber;
/**
 * Check if a value is a number
 * @ignore
 * @param {*} value
 * @return {boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}
module.exports = exports['default'];

});

unwrapExports(isNumber_1);

var isObject_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isObject;
/**
 * Check if a value is an object
 * @ignore
 * @param {*} value
 * @return {boolean}
 */
function isObject(value) {
  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}
module.exports = exports['default'];

});

unwrapExports(isObject_1);

var length_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = length;
/**
 * Calculate the absolute difference between two numbers
 * @ignore
 * @param {number} numA
 * @param {number} numB
 * @return {number}
 */
function length(numA, numB) {
  return Math.abs(numA - numB);
}
module.exports = exports["default"];

});

unwrapExports(length_1);

var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



Object.defineProperty(exports, 'captialize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(captialize_1).default;
  }
});



Object.defineProperty(exports, 'clamp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(clamp_1).default;
  }
});



Object.defineProperty(exports, 'distanceTo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(distanceTo_1).default;
  }
});



Object.defineProperty(exports, 'isDefined', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(isDefined_1).default;
  }
});



Object.defineProperty(exports, 'isNumber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(isNumber_1).default;
  }
});



Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(isObject_1).default;
  }
});



Object.defineProperty(exports, 'length', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(length_1).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

});

unwrapExports(utils);

var valueTransformer = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getPercentageFromPosition = getPercentageFromPosition;
exports.getValueFromPosition = getValueFromPosition;
exports.getValueFromProps = getValueFromProps;
exports.getPercentageFromValue = getPercentageFromValue;
exports.getPercentagesFromValues = getPercentagesFromValues;
exports.getPositionFromValue = getPositionFromValue;
exports.getPositionsFromValues = getPositionsFromValues;
exports.getPositionFromEvent = getPositionFromEvent;
exports.getStepValueFromValue = getStepValueFromValue;



/**
 * Convert a point into a percentage value
 * @ignore
 * @param {Point} position
 * @param {ClientRect} clientRect
 * @return {number} Percentage value
 */
function getPercentageFromPosition(position, clientRect) {
  var length = clientRect.width;
  var sizePerc = position.x / length;

  return sizePerc || 0;
}

/**
 * Convert a point into a model value
 * @ignore
 * @param {Point} position
 * @param {number} minValue
 * @param {number} maxValue
 * @param {ClientRect} clientRect
 * @return {number}
 */
function getValueFromPosition(position, minValue, maxValue, clientRect) {
  var sizePerc = getPercentageFromPosition(position, clientRect);
  var valueDiff = maxValue - minValue;

  return minValue + valueDiff * sizePerc;
}

/**
 * Convert props into a range value
 * @ignore
 * @param {Object} props
 * @param {boolean} isMultiValue
 * @return {Range}
 */
function getValueFromProps(props, isMultiValue) {
  if (isMultiValue) {
    return _extends({}, props.value);
  }

  return {
    min: props.minValue,
    max: props.value
  };
}

/**
 * Convert a model value into a percentage value
 * @ignore
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 * @return {number}
 */
function getPercentageFromValue(value, minValue, maxValue) {
  var validValue = (0, utils.clamp)(value, minValue, maxValue);
  var valueDiff = maxValue - minValue;
  var valuePerc = (validValue - minValue) / valueDiff;

  return valuePerc || 0;
}

/**
 * Convert model values into percentage values
 * @ignore
 * @param {Range} values
 * @param {number} minValue
 * @param {number} maxValue
 * @return {Range}
 */
function getPercentagesFromValues(values, minValue, maxValue) {
  return {
    min: getPercentageFromValue(values.min, minValue, maxValue),
    max: getPercentageFromValue(values.max, minValue, maxValue)
  };
}

/**
 * Convert a value into a point
 * @ignore
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 * @param {ClientRect} clientRect
 * @return {Point} Position
 */
function getPositionFromValue(value, minValue, maxValue, clientRect) {
  var length = clientRect.width;
  var valuePerc = getPercentageFromValue(value, minValue, maxValue);
  var positionValue = valuePerc * length;

  return {
    x: positionValue,
    y: 0
  };
}

/**
 * Convert a range of values into points
 * @ignore
 * @param {Range} values
 * @param {number} minValue
 * @param {number} maxValue
 * @param {ClientRect} clientRect
 * @return {Range}
 */
function getPositionsFromValues(values, minValue, maxValue, clientRect) {
  return {
    min: getPositionFromValue(values.min, minValue, maxValue, clientRect),
    max: getPositionFromValue(values.max, minValue, maxValue, clientRect)
  };
}

/**
 * Convert an event into a point
 * @ignore
 * @param {Event} event
 * @param {ClientRect} clientRect
 * @return {Point}
 */
function getPositionFromEvent(event, clientRect) {
  var length = clientRect.width;

  var _ref = event.touches ? event.touches[0] : event,
      clientX = _ref.clientX;

  return {
    x: (0, utils.clamp)(clientX - clientRect.left, 0, length),
    y: 0
  };
}

/**
 * Convert a value into a step value
 * @ignore
 * @param {number} value
 * @param {number} valuePerStep
 * @return {number}
 */
function getStepValueFromValue(value, valuePerStep) {
  return Math.round(value / valuePerStep) * valuePerStep;
}

});

unwrapExports(valueTransformer);
var valueTransformer_1 = valueTransformer.getPercentageFromPosition;
var valueTransformer_2 = valueTransformer.getValueFromPosition;
var valueTransformer_3 = valueTransformer.getValueFromProps;
var valueTransformer_4 = valueTransformer.getPercentageFromValue;
var valueTransformer_5 = valueTransformer.getPercentagesFromValues;
var valueTransformer_6 = valueTransformer.getPositionFromValue;
var valueTransformer_7 = valueTransformer.getPositionsFromValues;
var valueTransformer_8 = valueTransformer.getPositionFromEvent;
var valueTransformer_9 = valueTransformer.getStepValueFromValue;

var defaultClassNames = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Default CSS class names
 * @ignore
 * @type {InputRangeClassNames}
 */
var DEFAULT_CLASS_NAMES = {
  activeTrack: 'input-range__track input-range__track--active',
  disabledInputRange: 'input-range input-range--disabled',
  inputRange: 'input-range',
  labelContainer: 'input-range__label-container',
  maxLabel: 'input-range__label input-range__label--max',
  minLabel: 'input-range__label input-range__label--min',
  slider: 'input-range__slider',
  sliderContainer: 'input-range__slider-container',
  track: 'input-range__track input-range__track--background',
  valueLabel: 'input-range__label input-range__label--value'
};

exports.default = DEFAULT_CLASS_NAMES;
module.exports = exports['default'];

});

unwrapExports(defaultClassNames);

var label = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Label;



var _react2 = _interopRequireDefault(React);



var _propTypes2 = _interopRequireDefault(PropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore
 * @param {Object} props
 * @param {InputRangeClassNames} props.classNames
 * @param {Function} props.formatLabel
 * @param {string} props.type
 */
function Label(props) {
  var labelValue = props.formatLabel ? props.formatLabel(props.children, props.type) : props.children;

  return _react2.default.createElement(
    'span',
    { className: props.classNames[props.type + 'Label'] },
    _react2.default.createElement(
      'span',
      { className: props.classNames.labelContainer },
      labelValue
    )
  );
}

/**
 * @type {Object}
 * @property {Function} children
 * @property {Function} classNames
 * @property {Function} formatLabel
 * @property {Function} type
 */
Label.propTypes = {
  children: _propTypes2.default.node.isRequired,
  classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
  formatLabel: _propTypes2.default.func,
  type: _propTypes2.default.string.isRequired
};
module.exports = exports['default'];

});

unwrapExports(label);

var rangePropType_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rangePropType;



/**
 * @ignore
 * @param {Object} props - React component props
 * @return {?Error} Return Error if validation fails
 */
function rangePropType(props) {
  var maxValue = props.maxValue,
      minValue = props.minValue;


  if (!(0, utils.isNumber)(minValue) || !(0, utils.isNumber)(maxValue)) {
    return new Error('"minValue" and "maxValue" must be a number');
  }

  if (minValue >= maxValue) {
    return new Error('"minValue" must be smaller than "maxValue"');
  }
}
module.exports = exports['default'];

});

unwrapExports(rangePropType_1);

var valuePropType_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = valuePropType;



/**
 * @ignore
 * @param {Object} props
 * @return {?Error} Return Error if validation fails
 */
function valuePropType(props, propName) {
  var maxValue = props.maxValue,
      minValue = props.minValue;

  var value = props[propName];

  if (!(0, utils.isNumber)(value) && (!(0, utils.isObject)(value) || !(0, utils.isNumber)(value.min) || !(0, utils.isNumber)(value.max))) {
    return new Error('"' + propName + '" must be a number or a range object');
  }

  if ((0, utils.isNumber)(value) && (value < minValue || value > maxValue)) {
    return new Error('"' + propName + '" must be in between "minValue" and "maxValue"');
  }

  if ((0, utils.isObject)(value) && (value.min < minValue || value.min > maxValue || value.max < minValue || value.max > maxValue)) {
    return new Error('"' + propName + '" must be in between "minValue" and "maxValue"');
  }
}
module.exports = exports['default'];

});

unwrapExports(valuePropType_1);

var slider = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;



var _react2 = _interopRequireDefault(React);



var _propTypes2 = _interopRequireDefault(PropTypes);



var _autobindDecorator2 = _interopRequireDefault(lib);



var _label2 = _interopRequireDefault(label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * @ignore
 */
var Slider = (_class = function (_React$Component) {
  _inherits(Slider, _React$Component);

  _createClass(Slider, null, [{
    key: 'propTypes',

    /**
     * Accepted propTypes of Slider
     * @override
     * @return {Object}
     * @property {Function} ariaLabelledby
     * @property {Function} ariaControls
     * @property {Function} className
     * @property {Function} formatLabel
     * @property {Function} maxValue
     * @property {Function} minValue
     * @property {Function} onSliderDrag
     * @property {Function} onSliderKeyDown
     * @property {Function} percentage
     * @property {Function} type
     * @property {Function} value
     */
    get: function get() {
      return {
        ariaLabelledby: _propTypes2.default.string,
        ariaControls: _propTypes2.default.string,
        classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
        formatLabel: _propTypes2.default.func,
        maxValue: _propTypes2.default.number,
        minValue: _propTypes2.default.number,
        onSliderDrag: _propTypes2.default.func.isRequired,
        onSliderKeyDown: _propTypes2.default.func.isRequired,
        percentage: _propTypes2.default.number.isRequired,
        type: _propTypes2.default.string.isRequired,
        value: _propTypes2.default.number.isRequired
      };
    }

    /**
     * @param {Object} props
     * @param {string} [props.ariaLabelledby]
     * @param {string} [props.ariaControls]
     * @param {InputRangeClassNames} props.classNames
     * @param {Function} [props.formatLabel]
     * @param {number} [props.maxValue]
     * @param {number} [props.minValue]
     * @param {Function} props.onSliderKeyDown
     * @param {Function} props.onSliderDrag
     * @param {number} props.percentage
     * @param {number} props.type
     * @param {number} props.value
     */

  }]);

  function Slider(props) {
    _classCallCheck(this, Slider);

    /**
     * @private
     * @type {?Component}
     */
    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.node = null;
    return _this;
  }

  /**
   * @ignore
   * @override
   * @return {void}
   */


  _createClass(Slider, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
      this.removeDocumentTouchEndListener();
      this.removeDocumentTouchMoveListener();
    }

    /**
     * @private
     * @return {Object}
     */

  }, {
    key: 'getStyle',
    value: function getStyle() {
      var perc = (this.props.percentage || 0) * 100;
      var style = {
        position: 'absolute',
        left: perc + '%'
      };

      return style;
    }

    /**
     * Listen to mousemove event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseMoveListener',
    value: function addDocumentMouseMoveListener() {
      this.removeDocumentMouseMoveListener();
      this.node.ownerDocument.addEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseUpListener',
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Listen to touchmove event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentTouchMoveListener',
    value: function addDocumentTouchMoveListener() {
      this.removeDocumentTouchMoveListener();
      this.node.ownerDocument.addEventListener('touchmove', this.handleTouchMove);
    }

    /**
     * Listen to touchend event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentTouchEndListener',
    value: function addDocumentTouchEndListener() {
      this.removeDocumentTouchEndListener();
      this.node.ownerDocument.addEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseMoveListener',
    value: function removeDocumentMouseMoveListener() {
      this.node.ownerDocument.removeEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseUpListener',
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentTouchMoveListener',
    value: function removeDocumentTouchMoveListener() {
      this.node.ownerDocument.removeEventListener('touchmove', this.handleTouchMove);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentTouchEndListener',
    value: function removeDocumentTouchEndListener() {
      this.node.ownerDocument.removeEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown() {
      this.addDocumentMouseMoveListener();
      this.addDocumentMouseUpListener();
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      this.props.onSliderDrag(event, this.props.type);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart() {
      this.addDocumentTouchEndListener();
      this.addDocumentTouchMoveListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(event) {
      this.props.onSliderDrag(event, this.props.type);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd() {
      this.removeDocumentTouchMoveListener();
      this.removeDocumentTouchEndListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      this.props.onSliderKeyDown(event, this.props.type);
    }

    /**
     * @override
     * @return {JSX.Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = this.getStyle();

      return _react2.default.createElement(
        'span',
        {
          className: this.props.classNames.sliderContainer,
          ref: function ref(node) {
            _this2.node = node;
          },
          style: style },
        _react2.default.createElement(
          _label2.default,
          {
            classNames: this.props.classNames,
            formatLabel: this.props.formatLabel,
            type: 'value' },
          this.props.value
        ),
        _react2.default.createElement('div', {
          'aria-labelledby': this.props.ariaLabelledby,
          'aria-controls': this.props.ariaControls,
          'aria-valuemax': this.props.maxValue,
          'aria-valuemin': this.props.minValue,
          'aria-valuenow': this.props.value,
          className: this.props.classNames.slider,
          draggable: 'false',
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          role: 'slider',
          tabIndex: '0' })
      );
    }
  }]);

  return Slider;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchEnd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyDown'), _class.prototype)), _class);
exports.default = Slider;
module.exports = exports['default'];

});

unwrapExports(slider);

var track = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;



var _react2 = _interopRequireDefault(React);



var _propTypes2 = _interopRequireDefault(PropTypes);



var _autobindDecorator2 = _interopRequireDefault(lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * @ignore
 */
var Track = (_class = function (_React$Component) {
  _inherits(Track, _React$Component);

  _createClass(Track, null, [{
    key: 'propTypes',

    /**
     * @override
     * @return {Object}
     * @property {Function} children
     * @property {Function} classNames
     * @property {Boolean} draggableTrack
     * @property {Function} onTrackDrag
     * @property {Function} onTrackMouseDown
     * @property {Function} percentages
     */
    get: function get() {
      return {
        children: _propTypes2.default.node.isRequired,
        classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
        draggableTrack: _propTypes2.default.bool,
        onTrackDrag: _propTypes2.default.func,
        onTrackMouseDown: _propTypes2.default.func.isRequired,
        percentages: _propTypes2.default.objectOf(_propTypes2.default.number).isRequired
      };
    }

    /**
     * @param {Object} props
     * @param {InputRangeClassNames} props.classNames
     * @param {Boolean} props.draggableTrack
     * @param {Function} props.onTrackDrag
     * @param {Function} props.onTrackMouseDown
     * @param {number} props.percentages
     */

  }]);

  function Track(props) {
    _classCallCheck(this, Track);

    /**
     * @private
     * @type {?Component}
     */
    var _this = _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).call(this, props));

    _this.node = null;
    _this.trackDragEvent = null;
    return _this;
  }

  /**
   * @private
   * @return {ClientRect}
   */


  _createClass(Track, [{
    key: 'getClientRect',
    value: function getClientRect() {
      return this.node.getBoundingClientRect();
    }

    /**
     * @private
     * @return {Object} CSS styles
     */

  }, {
    key: 'getActiveTrackStyle',
    value: function getActiveTrackStyle() {
      var width = (this.props.percentages.max - this.props.percentages.min) * 100 + '%';
      var left = this.props.percentages.min * 100 + '%';

      return { left: left, width: width };
    }

    /**
     * Listen to mousemove event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseMoveListener',
    value: function addDocumentMouseMoveListener() {
      this.removeDocumentMouseMoveListener();
      this.node.ownerDocument.addEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseUpListener',
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseMoveListener',
    value: function removeDocumentMouseMoveListener() {
      this.node.ownerDocument.removeEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseUpListener',
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      if (!this.props.draggableTrack) {
        return;
      }

      if (this.trackDragEvent !== null) {
        this.props.onTrackDrag(event, this.trackDragEvent);
      }

      this.trackDragEvent = event;
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      if (!this.props.draggableTrack) {
        return;
      }

      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
      this.trackDragEvent = null;
    }

    /**
     * @private
     * @param {SyntheticEvent} event - User event
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      var clientX = event.touches ? event.touches[0].clientX : event.clientX;
      var trackClientRect = this.getClientRect();
      var position = {
        x: clientX - trackClientRect.left,
        y: 0
      };

      this.props.onTrackMouseDown(event, position);

      if (this.props.draggableTrack) {
        this.addDocumentMouseMoveListener();
        this.addDocumentMouseUpListener();
      }
    }

    /**
     * @private
     * @param {SyntheticEvent} event - User event
     */

  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      event.preventDefault();

      this.handleMouseDown(event);
    }

    /**
     * @override
     * @return {JSX.Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var activeTrackStyle = this.getActiveTrackStyle();

      return _react2.default.createElement(
        'div',
        {
          className: this.props.classNames.track,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          ref: function ref(node) {
            _this2.node = node;
          } },
        _react2.default.createElement('div', {
          style: activeTrackStyle,
          className: this.props.classNames.activeTrack }),
        this.props.children
      );
    }
  }]);

  return Track;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleMouseMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchStart'), _class.prototype)), _class);
exports.default = Track;
module.exports = exports['default'];

});

unwrapExports(track);

var keyCodes = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** @ignore */
var DOWN_ARROW = exports.DOWN_ARROW = 40;

/** @ignore */
var LEFT_ARROW = exports.LEFT_ARROW = 37;

/** @ignore */
var RIGHT_ARROW = exports.RIGHT_ARROW = 39;

/** @ignore */
var UP_ARROW = exports.UP_ARROW = 38;

});

unwrapExports(keyCodes);
var keyCodes_1 = keyCodes.DOWN_ARROW;
var keyCodes_2 = keyCodes.LEFT_ARROW;
var keyCodes_3 = keyCodes.RIGHT_ARROW;
var keyCodes_4 = keyCodes.UP_ARROW;

var inputRange = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;



var _react2 = _interopRequireDefault(React);



var _propTypes2 = _interopRequireDefault(PropTypes);



var _autobindDecorator2 = _interopRequireDefault(lib);



var valueTransformer$$1 = _interopRequireWildcard(valueTransformer);



var _defaultClassNames2 = _interopRequireDefault(defaultClassNames);



var _label2 = _interopRequireDefault(label);



var _rangePropType2 = _interopRequireDefault(rangePropType_1);



var _valuePropType2 = _interopRequireDefault(valuePropType_1);



var _slider2 = _interopRequireDefault(slider);



var _track2 = _interopRequireDefault(track);





function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * A React component that allows users to input numeric values within a range
 * by dragging its sliders.
 */
var InputRange = (_class = function (_React$Component) {
  _inherits(InputRange, _React$Component);

  _createClass(InputRange, null, [{
    key: 'propTypes',

    /**
     * @ignore
     * @override
     * @return {Object}
     */
    get: function get() {
      return {
        allowSameValues: _propTypes2.default.bool,
        ariaLabelledby: _propTypes2.default.string,
        ariaControls: _propTypes2.default.string,
        classNames: _propTypes2.default.objectOf(_propTypes2.default.string),
        disabled: _propTypes2.default.bool,
        draggableTrack: _propTypes2.default.bool,
        formatLabel: _propTypes2.default.func,
        maxValue: _rangePropType2.default,
        minValue: _rangePropType2.default,
        name: _propTypes2.default.string,
        onChangeStart: _propTypes2.default.func,
        onChange: _propTypes2.default.func.isRequired,
        onChangeComplete: _propTypes2.default.func,
        step: _propTypes2.default.number,
        value: _valuePropType2.default
      };
    }

    /**
     * @ignore
     * @override
     * @return {Object}
     */

  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        allowSameValues: false,
        classNames: _defaultClassNames2.default,
        disabled: false,
        maxValue: 10,
        minValue: 0,
        step: 1
      };
    }

    /**
     * @param {Object} props
     * @param {boolean} [props.allowSameValues]
     * @param {string} [props.ariaLabelledby]
     * @param {string} [props.ariaControls]
     * @param {InputRangeClassNames} [props.classNames]
     * @param {boolean} [props.disabled = false]
     * @param {Function} [props.formatLabel]
     * @param {number|Range} [props.maxValue = 10]
     * @param {number|Range} [props.minValue = 0]
     * @param {string} [props.name]
     * @param {string} props.onChange
     * @param {Function} [props.onChangeComplete]
     * @param {Function} [props.onChangeStart]
     * @param {number} [props.step = 1]
     * @param {number|Range} props.value
     */

  }]);

  function InputRange(props) {
    _classCallCheck(this, InputRange);

    /**
     * @private
     * @type {?number}
     */
    var _this = _possibleConstructorReturn(this, (InputRange.__proto__ || Object.getPrototypeOf(InputRange)).call(this, props));

    _this.startValue = null;

    /**
     * @private
     * @type {?Component}
     */
    _this.node = null;

    /**
     * @private
     * @type {?Component}
     */
    _this.trackNode = null;

    /**
     * @private
     * @type {bool}
     */
    _this.isSliderDragging = false;

    /**
     * @private
     * @type {?string}
     */
    _this.lastKeyMoved = null;
    return _this;
  }

  /**
   * @ignore
   * @override
   * @return {void}
   */


  _createClass(InputRange, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeDocumentMouseUpListener();
      this.removeDocumentTouchEndListener();
    }

    /**
     * Return the CSS class name of the component
     * @private
     * @return {string}
     */

  }, {
    key: 'getComponentClassName',
    value: function getComponentClassName() {
      if (!this.props.disabled) {
        return this.props.classNames.inputRange;
      }

      return this.props.classNames.disabledInputRange;
    }

    /**
     * Return the bounding rect of the track
     * @private
     * @return {ClientRect}
     */

  }, {
    key: 'getTrackClientRect',
    value: function getTrackClientRect() {
      return this.trackNode.getClientRect();
    }

    /**
     * Return the slider key closest to a point
     * @private
     * @param {Point} position
     * @return {string}
     */

  }, {
    key: 'getKeyByPosition',
    value: function getKeyByPosition(position) {
      var values = valueTransformer$$1.getValueFromProps(this.props, this.isMultiValue());
      var positions = valueTransformer$$1.getPositionsFromValues(values, this.props.minValue, this.props.maxValue, this.getTrackClientRect());

      if (this.isMultiValue()) {
        var distanceToMin = (0, utils.distanceTo)(position, positions.min);
        var distanceToMax = (0, utils.distanceTo)(position, positions.max);

        if (distanceToMin < distanceToMax) {
          return 'min';
        }
      }

      return 'max';
    }

    /**
     * Return all the slider keys
     * @private
     * @return {string[]}
     */

  }, {
    key: 'getKeys',
    value: function getKeys() {
      if (this.isMultiValue()) {
        return ['min', 'max'];
      }

      return ['max'];
    }

    /**
     * Return true if the difference between the new and the current value is
     * greater or equal to the step amount of the component
     * @private
     * @param {Range} values
     * @return {boolean}
     */

  }, {
    key: 'hasStepDifference',
    value: function hasStepDifference(values) {
      var currentValues = valueTransformer$$1.getValueFromProps(this.props, this.isMultiValue());

      return (0, utils.length)(values.min, currentValues.min) >= this.props.step || (0, utils.length)(values.max, currentValues.max) >= this.props.step;
    }

    /**
     * Return true if the component accepts a min and max value
     * @private
     * @return {boolean}
     */

  }, {
    key: 'isMultiValue',
    value: function isMultiValue() {
      return (0, utils.isObject)(this.props.value);
    }

    /**
     * Return true if the range is within the max and min value of the component
     * @private
     * @param {Range} values
     * @return {boolean}
     */

  }, {
    key: 'isWithinRange',
    value: function isWithinRange(values) {
      if (this.isMultiValue()) {
        return values.min >= this.props.minValue && values.max <= this.props.maxValue && this.props.allowSameValues ? values.min <= values.max : values.min < values.max;
      }

      return values.max >= this.props.minValue && values.max <= this.props.maxValue;
    }

    /**
     * Return true if the new value should trigger a render
     * @private
     * @param {Range} values
     * @return {boolean}
     */

  }, {
    key: 'shouldUpdate',
    value: function shouldUpdate(values) {
      return this.isWithinRange(values) && this.hasStepDifference(values);
    }

    /**
     * Update the position of a slider
     * @private
     * @param {string} key
     * @param {Point} position
     * @return {void}
     */

  }, {
    key: 'updatePosition',
    value: function updatePosition(key, position) {
      var values = valueTransformer$$1.getValueFromProps(this.props, this.isMultiValue());
      var positions = valueTransformer$$1.getPositionsFromValues(values, this.props.minValue, this.props.maxValue, this.getTrackClientRect());

      positions[key] = position;
      this.lastKeyMoved = key;

      this.updatePositions(positions);
    }

    /**
     * Update the positions of multiple sliders
     * @private
     * @param {Object} positions
     * @param {Point} positions.min
     * @param {Point} positions.max
     * @return {void}
     */

  }, {
    key: 'updatePositions',
    value: function updatePositions(positions) {
      var values = {
        min: valueTransformer$$1.getValueFromPosition(positions.min, this.props.minValue, this.props.maxValue, this.getTrackClientRect()),
        max: valueTransformer$$1.getValueFromPosition(positions.max, this.props.minValue, this.props.maxValue, this.getTrackClientRect())
      };

      var transformedValues = {
        min: valueTransformer$$1.getStepValueFromValue(values.min, this.props.step),
        max: valueTransformer$$1.getStepValueFromValue(values.max, this.props.step)
      };

      this.updateValues(transformedValues);
    }

    /**
     * Update the value of a slider
     * @private
     * @param {string} key
     * @param {number} value
     * @return {void}
     */

  }, {
    key: 'updateValue',
    value: function updateValue(key, value) {
      var values = valueTransformer$$1.getValueFromProps(this.props, this.isMultiValue());

      values[key] = value;

      this.updateValues(values);
    }

    /**
     * Update the values of multiple sliders
     * @private
     * @param {Range|number} values
     * @return {void}
     */

  }, {
    key: 'updateValues',
    value: function updateValues(values) {
      if (!this.shouldUpdate(values)) {
        return;
      }

      this.props.onChange(this.isMultiValue() ? values : values.max);
    }

    /**
     * Increment the value of a slider by key name
     * @private
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'incrementValue',
    value: function incrementValue(key) {
      var values = valueTransformer$$1.getValueFromProps(this.props, this.isMultiValue());
      var value = values[key] + this.props.step;

      this.updateValue(key, value);
    }

    /**
     * Decrement the value of a slider by key name
     * @private
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'decrementValue',
    value: function decrementValue(key) {
      var values = valueTransformer$$1.getValueFromProps(this.props, this.isMultiValue());
      var value = values[key] - this.props.step;

      this.updateValue(key, value);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseUpListener',
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Listen to touchend event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentTouchEndListener',
    value: function addDocumentTouchEndListener() {
      this.removeDocumentTouchEndListener();
      this.node.ownerDocument.addEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * Stop listening to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseUpListener',
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Stop listening to touchend event
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentTouchEndListener',
    value: function removeDocumentTouchEndListener() {
      this.node.ownerDocument.removeEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * Handle any "mousemove" event received by the slider
     * @private
     * @param {SyntheticEvent} event
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'handleSliderDrag',
    value: function handleSliderDrag(event, key) {
      var _this2 = this;

      if (this.props.disabled) {
        return;
      }

      var position = valueTransformer$$1.getPositionFromEvent(event, this.getTrackClientRect());
      this.isSliderDragging = true;
      requestAnimationFrame(function () {
        return _this2.updatePosition(key, position);
      });
    }

    /**
     * Handle any "mousemove" event received by the track
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleTrackDrag',
    value: function handleTrackDrag(event, prevEvent) {
      if (this.props.disabled || !this.props.draggableTrack || this.isSliderDragging) {
        return;
      }

      var _props = this.props,
          maxValue = _props.maxValue,
          minValue = _props.minValue,
          _props$value = _props.value,
          max = _props$value.max,
          min = _props$value.min;


      var position = valueTransformer$$1.getPositionFromEvent(event, this.getTrackClientRect());
      var value = valueTransformer$$1.getValueFromPosition(position, minValue, maxValue, this.getTrackClientRect());
      var stepValue = valueTransformer$$1.getStepValueFromValue(value, this.props.step);

      var prevPosition = valueTransformer$$1.getPositionFromEvent(prevEvent, this.getTrackClientRect());
      var prevValue = valueTransformer$$1.getValueFromPosition(prevPosition, minValue, maxValue, this.getTrackClientRect());
      var prevStepValue = valueTransformer$$1.getStepValueFromValue(prevValue, this.props.step);

      var offset = prevStepValue - stepValue;

      var transformedValues = {
        min: min - offset,
        max: max - offset
      };

      this.updateValues(transformedValues);
    }

    /**
     * Handle any "keydown" event received by the slider
     * @private
     * @param {SyntheticEvent} event
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'handleSliderKeyDown',
    value: function handleSliderKeyDown(event, key) {
      if (this.props.disabled) {
        return;
      }

      switch (event.keyCode) {
        case keyCodes.LEFT_ARROW:
        case keyCodes.DOWN_ARROW:
          event.preventDefault();
          this.decrementValue(key);
          break;

        case keyCodes.RIGHT_ARROW:
        case keyCodes.UP_ARROW:
          event.preventDefault();
          this.incrementValue(key);
          break;

        default:
          break;
      }
    }

    /**
     * Handle any "mousedown" event received by the track
     * @private
     * @param {SyntheticEvent} event
     * @param {Point} position
     * @return {void}
     */

  }, {
    key: 'handleTrackMouseDown',
    value: function handleTrackMouseDown(event, position) {
      if (this.props.disabled) {
        return;
      }

      var _props2 = this.props,
          maxValue = _props2.maxValue,
          minValue = _props2.minValue,
          _props2$value = _props2.value,
          max = _props2$value.max,
          min = _props2$value.min;


      event.preventDefault();

      var value = valueTransformer$$1.getValueFromPosition(position, minValue, maxValue, this.getTrackClientRect());
      var stepValue = valueTransformer$$1.getStepValueFromValue(value, this.props.step);

      if (!this.props.draggableTrack || stepValue > max || stepValue < min) {
        this.updatePosition(this.getKeyByPosition(position), position);
      }
    }

    /**
     * Handle the start of any mouse/touch event
     * @private
     * @return {void}
     */

  }, {
    key: 'handleInteractionStart',
    value: function handleInteractionStart() {
      if (this.props.onChangeStart) {
        this.props.onChangeStart(this.props.value);
      }

      if (this.props.onChangeComplete && !(0, utils.isDefined)(this.startValue)) {
        this.startValue = this.props.value;
      }
    }

    /**
     * Handle the end of any mouse/touch event
     * @private
     * @return {void}
     */

  }, {
    key: 'handleInteractionEnd',
    value: function handleInteractionEnd() {
      if (this.isSliderDragging) {
        this.isSliderDragging = false;
      }

      if (!this.props.onChangeComplete || !(0, utils.isDefined)(this.startValue)) {
        return;
      }

      if (this.startValue !== this.props.value) {
        this.props.onChangeComplete(this.props.value);
      }

      this.startValue = null;
    }

    /**
     * Handle any "keydown" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      this.handleInteractionStart(event);
    }

    /**
     * Handle any "keyup" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      this.handleInteractionEnd(event);
    }

    /**
     * Handle any "mousedown" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      this.handleInteractionStart(event);
      this.addDocumentMouseUpListener();
    }

    /**
     * Handle any "mouseup" event received by the component
     * @private
     * @param {SyntheticEvent} event
     */

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      this.handleInteractionEnd(event);
      this.removeDocumentMouseUpListener();
    }

    /**
     * Handle any "touchstart" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      this.handleInteractionStart(event);
      this.addDocumentTouchEndListener();
    }

    /**
     * Handle any "touchend" event received by the component
     * @private
     * @param {SyntheticEvent} event
     */

  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(event) {
      this.handleInteractionEnd(event);
      this.removeDocumentTouchEndListener();
    }

    /**
     * Return JSX of sliders
     * @private
     * @return {JSX.Element}
     */

  }, {
    key: 'renderSliders',
    value: function renderSliders() {
      var _this3 = this;

      var values = valueTransformer$$1.getValueFromProps(this.props, this.isMultiValue());
      var percentages = valueTransformer$$1.getPercentagesFromValues(values, this.props.minValue, this.props.maxValue);
      var keys = this.props.allowSameValues && this.lastKeyMoved === 'min' ? this.getKeys().reverse() : this.getKeys();

      return keys.map(function (key) {
        var value = values[key];
        var percentage = percentages[key];

        var _props3 = _this3.props,
            maxValue = _props3.maxValue,
            minValue = _props3.minValue;


        if (key === 'min') {
          maxValue = values.max;
        } else {
          minValue = values.min;
        }

        var slider$$1 = _react2.default.createElement(_slider2.default, {
          ariaLabelledby: _this3.props.ariaLabelledby,
          ariaControls: _this3.props.ariaControls,
          classNames: _this3.props.classNames,
          formatLabel: _this3.props.formatLabel,
          key: key,
          maxValue: maxValue,
          minValue: minValue,
          onSliderDrag: _this3.handleSliderDrag,
          onSliderKeyDown: _this3.handleSliderKeyDown,
          percentage: percentage,
          type: key,
          value: value });

        return slider$$1;
      });
    }

    /**
     * Return JSX of hidden inputs
     * @private
     * @return {JSX.Element}
     */

  }, {
    key: 'renderHiddenInputs',
    value: function renderHiddenInputs() {
      var _this4 = this;

      if (!this.props.name) {
        return [];
      }

      var isMultiValue = this.isMultiValue();
      var values = valueTransformer$$1.getValueFromProps(this.props, isMultiValue);

      return this.getKeys().map(function (key) {
        var value = values[key];
        var name = isMultiValue ? '' + _this4.props.name + (0, utils.captialize)(key) : _this4.props.name;

        return _react2.default.createElement('input', { key: key, type: 'hidden', name: name, value: value });
      });
    }

    /**
     * @ignore
     * @override
     * @return {JSX.Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var componentClassName = this.getComponentClassName();
      var values = valueTransformer$$1.getValueFromProps(this.props, this.isMultiValue());
      var percentages = valueTransformer$$1.getPercentagesFromValues(values, this.props.minValue, this.props.maxValue);

      return _react2.default.createElement(
        'div',
        {
          'aria-disabled': this.props.disabled,
          ref: function ref(node) {
            _this5.node = node;
          },
          className: componentClassName,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart },
        _react2.default.createElement(
          _label2.default,
          {
            classNames: this.props.classNames,
            formatLabel: this.props.formatLabel,
            type: 'min' },
          this.props.minValue
        ),
        _react2.default.createElement(
          _track2.default,
          {
            classNames: this.props.classNames,
            draggableTrack: this.props.draggableTrack,
            ref: function ref(trackNode) {
              _this5.trackNode = trackNode;
            },
            percentages: percentages,
            onTrackDrag: this.handleTrackDrag,
            onTrackMouseDown: this.handleTrackMouseDown },
          this.renderSliders()
        ),
        _react2.default.createElement(
          _label2.default,
          {
            classNames: this.props.classNames,
            formatLabel: this.props.formatLabel,
            type: 'max' },
          this.props.maxValue
        ),
        this.renderHiddenInputs()
      );
    }
  }]);

  return InputRange;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleSliderDrag', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSliderDrag'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTrackDrag', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTrackDrag'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleSliderKeyDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSliderKeyDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTrackMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTrackMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleInteractionStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleInteractionStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleInteractionEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleInteractionEnd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchEnd'), _class.prototype)), _class);
exports.default = InputRange;
module.exports = exports['default'];

});

unwrapExports(inputRange);

var js = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _inputRange2 = _interopRequireDefault(inputRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore
 * @typedef {Object} ClientRect
 * @property {number} height
 * @property {number} left
 * @property {number} top
 * @property {number} width
 */

/**
 * @typedef {Object} InputRangeClassNames
 * @property {string} activeTrack
 * @property {string} disabledInputRange
 * @property {string} inputRange
 * @property {string} labelContainer
 * @property {string} maxLabel
 * @property {string} minLabel
 * @property {string} slider
 * @property {string} sliderContainer
 * @property {string} track
 * @property {string} valueLabel
 */

/**
 * @typedef {Function} LabelFormatter
 * @param {number} value
 * @param {string} type
 * @return {string}
 */

/**
 * @ignore
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef {Object} Range
 * @property {number} min - Min value
 * @property {number} max - Max value
 */

exports.default = _inputRange2.default;
module.exports = exports['default'];

});

var InputRange = unwrapExports(js);

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

var css = "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap\");\n.money-button {\n  width: 182px;\n  height: 42px;\n  margin-top: 20px;\n  border-radius: 30px;\n  border: 9px solid #f8f8fa;\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n  background-color: white;\n  background-clip: content-box; }\n  .money-button.success-theme {\n    background-color: #6dc110;\n    border-color: rgba(109, 193, 16, 0.4); }\n  .money-button.error-theme {\n    background-color: #f5a623;\n    border-color: rgba(245, 166, 35, 0.4); }\n  .money-button .value-input-container {\n    position: absolute;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    align-self: center;\n    overflow: hidden;\n    padding-left: 60px;\n    display: flex;\n    flex-direction: row;\n    align-items: center; }\n    .money-button .value-input-container .value-input-currency {\n      font-family: 'Roboto', sans-serif;\n      font-size: 21px;\n      color: #4f5f6d; }\n    .money-button .value-input-container .value-input {\n      font-family: 'Roboto', sans-serif;\n      font-size: 21px;\n      font-weight: bold;\n      height: 100%;\n      width: 40%;\n      color: #4f5f6d;\n      background: transparent;\n      border: 0;\n      padding-left: 5px; }\n      .money-button .value-input-container .value-input:focus {\n        outline: none; }\n    .money-button .value-input-container .loading-title {\n      font-family: 'Roboto', sans-serif;\n      font-size: 21px;\n      color: #90949c; }\n    .money-button .value-input-container .success-title,\n    .money-button .value-input-container .error-title {\n      font-family: 'Roboto', sans-serif;\n      font-size: 21px;\n      color: white; }\n    .money-button .value-input-container .success-title-value {\n      font-family: 'Roboto', sans-serif;\n      font-size: 21px;\n      font-weight: bold;\n      color: white; }\n  .money-button .input-range__track {\n    height: 42px;\n    width: 78%;\n    border-radius: 24px;\n    position: relative;\n    background: white; }\n  .money-button .input-range__slider, .money-button .empty-theme .input-range__slider {\n    background: #2669ff;\n    border: none !important;\n    width: 60px;\n    height: 60px;\n    top: -41px;\n    left: -1px;\n    position: absolute;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAJMhJREFUeAHdXQmUVNW1PVU9080kCCio0AiKIooKipLgACs4R435xvh/4hATjUZj1LXURI3D92dpoklcJg7RJCYmP4n6HSFRo+IskyCIIjSgNCCDNE1301PV+3uf++6rV9XVVfVq6O7i9nr9Xr3hDmffc+6559whNP5Sx5HdPIRDjowaIjJmOI4RIrU47ztUpH+/kNRUiPSrFKnGubJcpLVdpLlNpKVVpAnnnS2OfLpVpO5zkTWbcOC8fptI1AkVBdVKiyKXATNJQCfuJ3L0ASLTcBw+NiSVZZlFUk2wcchA+35IptlL99zaIbJotSNvfyzyDo5l6/ou4KHdgYMdCKHSEpEZB4uccZTI9IPAmQSph0ITuP2NDx15+l2R15aLdEZEQqG+weFFDTCBJaeeCVBPnRKSwTU9hGiKZLY3iTw335GnADY5u7eBLjqACSrD9Akil54kMmVc3+CUZJjP/8SR38wBd68wT3sD7KIBmMBS6p04CcDOFjlkdN8FNhHsD9YC6LkiLy8VYf3sSaCLAmCCe+AoR376jZBMri0eYBOBXlznyM1/ceSj9aEeA7lPA0xgqSxdeZrI+ceFpCScSLLi+x2JivzpVUd++Sy6YVDOCs3NfRJg285SHN96Xkj29LosxQdodzneskPkpscdFdt8p1BA9zmACW5piSPXnhmSC04sXnHcHbCJ9x992ZG7nnLQtSqM2O5TABPckUMgvi4OyaQiUqISQQv6eymUsCsfdqR+W/5B7hOtGoHlcfR4GAtuCPcquJ0RR3Y0dcqmbe165u9CB1Zmlpvlt7TIV5q9zsEsEMPsyY7cc3G4RxSpjk5HFq9slKWrm6SufpfUbTDH9saItHVAC0oI5WVhGdy/RMbsVSW1I6tkLI5DxtbI4eP7C5/lK7R3ilzzSFTmLjZNUz7a5V4F2IDryHlfFrn53DAUjXyRqms867e0yXNvbpE3ljTI/BU7ZVc7KxbA0UT9ojFZJkwltPnVzqxEYd8OyZET+sv0SYPk1GOHyr7Dc7ePRpHUrX+NyuPzWAZ/vrqWKZM7vQawJRaNFj88I39c4C90S2tEnn1zqzz56hZ558NG4EJAWZHMWUIlvmvcxx+JqoHAu9IFF/onDrgbh+OexYl416FQVI48oL+cffyecvr0PaWmCsbxHMI9T0fVOJIryL0CsAX3vC85cst5uREiGQ2JSzPA3drQAXdfpzS2RGXdpjap29iOo1PqNkVk/dYoXH5IGyDHgLYAuyBr5OReHIjUAAtPgoIMeRolwJ34iWuArYDj3oDqsFx48gi58LS9ZVBN9g67Wx6PyOOvmzxlK657HGAL7uzDoC1fQg5KBlHh77VCRC9c1Slvr4jA7ReR5esciURdgP2Z8riY3OuCDPFswAXAUfgOATDP9hAXdPqYLzhlhFx+9ij4nINXZIrrqx6MyNz3swe5RwG24FJbfPTKkh5RqDKtKsblF5Wn33E8l1/8t4aLgbIrrvmbHOxybsQALNF23MbBswv6yCGlcvOFo2X20Rh1EDBQ8br41xF5Z2V2IPcYwAZckZF7QEu8pUQqMnTAB6RHXl5PdPl1jRTgMmhbTMAtR1Nsk5sJclvs0N8dMmvKQLn78nHQyIOJ7UaMKjnjjqjUf2F0lSDiukcBLg1H5ZU7wjJ8UC/JZQNLoP/dufxshTWRudytbTM52hXZFuTOVkh0GJ4B9IjBYbnv6nEyZcKAQPlYuiYq594Ni1eUSmLm9CsZMuWWWwKllMXLSgwU/i/XhmT/vQqjMWeRrYw+GTkkhFEiITluosgXcOZzTBabZRLZf1DbVQ09TL0C7W24FD9xhMxZwix3WJp2ReSJVzdjDFhIDofWnWkYPjgk/SocHTnCtDIFueAA23b3FxeFZMbE4gLXT3xKnVOODOlAg2WfOrK10YBs37Fg62+3K6ZAsyvmAk2Q2UWLQnua936DNLV0yJcPHYR7NpbU58m1Yfnw06is2Ww+yATkggJswb3+bEf+40vBtcjUxe2dp3uBk74+PSSDqjnwToRKkJ/QqYF2udtFdNHHjei+tcjMKYOBfWYoHzU+JH+bF5H2SGbtccEAtuD+4kLZbcC1VYpYHDYmJGdNC8m6zWZILZ8lBxovqzgHIOBkY2gh0ATUkRXrmuUzgPyVo/bga2lDdSVGiJY78joG95l4U39UEIAJLl1+f7mmuMVyOmpzeC0H+9VUcfgsdGko036Q+b33m2Jb206KbCOqLaIr1jZDXLfJjMMGpUtSnx8yOiwvvd8p23am5+K8A0xw6fJ77sdUqFLXroxKUwQvcRjRlw4SefMjB1YzH6hu3gmyARr0UKABjDWT6juOLPp4p45eOSIDxYsSZMIokSfeZI1KrVWbKpAHIhJYHjRizL2557tCveHm85MtE5efBzI17XAZMK6ScFk1JHe1hEqr5M4/b5T3YDPPJEweWyInTGL3jLZxt1+e5MO89INtAoV2+dHNR8VE3Xx08bmuvoadyd18FXDlDYKbr3Zv4+bjeRLdfAcMkLLSwkiXTFx+hl4uOLR6RXZJtKNJj+EDIjLn7gmyx4D0lqClayPytTvR72bb3k3XKWeAbWYL5fJbv7lVnn1jq7yxtEEWfJQfN19VOdx8Bxo332nTh8qoYbm7+fzMk4nLz9JNbdq0dHXGQD7hsAp55Ppx/ii7vb7g3jY0DVZ561ppcwLYZrIQLr8NW9vkyntXynvw3ca7+dDd0naH7Zg5qLywBmugKuqJLGs3RlulosycwTJ4xVzTzTcVPt2zjxsmBLs6C6dAd9RP5/Kz9DMgt4GDW3DsVE7+zdX7yMlH79Fd1N79+Ss75Zs/R1m64eKsAbaZK4TLj6MqZl65RNZ93gEMWTvZZhmrkFhLEa1FVlHR/oUPZC0+2yWKQeoGBNN1CvDcjZtvUE1YvT8XnrK3DMzBzedRHxfpXH6WjrRh05zpdDQryMMHtMm/7z0YXqj0atJZd7TKss8g0pMoXFlp0TZTdPnd+W326fxFyv36vifq5Z/zm4AllBAoH0YJ6QeFBEdpPwnhrApKaSWUkwpc41yCs17zN45wuTmXlCMe9x6eh8O8xjM8D/MdtwKROG3w/L29rFEem7sR00gjMnl87m31l2G9W1UflVWbDF28bpNLpthvEJESSUNUdjZ3APB2jBZJb7MmQ8xbjsqcBODAHGzBpbb88BUlUs72PY+hqSUiR1+6TJrbAQTAVfCgcVIEGdNfglj2uLe7TBguJjfzz3iAqHm6HJ3KzTe0VG69aIzMmppeVHaXOu9n4vJTurLpoNLV2SKRjkapCrfIG/cdCIUrNZG3N0XlmGvbJOJggnMCyLbKpMqf98yAS5efI/d9N5x3cJnQ7+dulqZ2cBa7D2U12o3Qa3Czx5kKuAEdN02htOtBUR47lCP4nFzKbokehrMpHUKQBppGeX8Jlw+QcMVAc2a6eLbhC5GL/melXPKzj6QBIy2zDWQC0ot0Y7B07BIfwWEeIXGYv10dZfLI8zCVpQmD0bRw6qxW3oR3AwHMb+ny47jlAZgdn++wqy0qj7zQgMJVGlFMEChSFVBQyYLp1lKKN3sky4t9Fjsb7td4KBF8xAyhL2rABtAEuwygl9aoFPnn/J1y0tVLZSGMEdkG0ot0I/2SBeYRBdTKqpVRm5xK+cO/GjDsCNImTfjq0SWQT4ybOoepSPwkY4CNCIlixoHIpDEZf5YmW/GPX3hnu2xvRi1W0WyBBQe6fTwLVPxXwX7ZOMzZBZxgs11mW+5xtQs0uJvgb9gucs5PVsijz28MlqDvbdKN9OvOOKEgKxfb/FRgGYlSefoNJJ4mTD+4TEqEzU4MXH6SEVKmRjiYuunIBTNJ8MKEJ+c1gshUgjCYSbk2Bm5hUkTVcaWA4R6Kd4pIH9DkZIpwgByRCrn5kc/kzsfWZZ0d0o90TOS0uAgBssfFoMWTr2MiU5pQUxWSg/dDvOwx+EJagC2715RH5NZvFg7cjZhJ8M6KNgMwiUxx7HKuL78Fu+wOaALriW5tm6vkt09vkWvuW41BevHckmnmSEfSk8HS136rXKzltpWtQhZjcOCajVgRJk2YdkDYE9P21bQA64uoFVeezll++W93bUaee3uHRLVrQ02QWmPh0rJpJjt7QCsXgcgquqELqNIHTgbIbEL+/lqDXHf/6mRRpL1HOpKeidwW9yHT19EgbDrK5bm3GuIeJ/sx7UAwBfr4FNO24qQE2IrmA0ZG5PzjSfTChbeWt0A8AlzLvWyLVPEoXJqpYracBOqq2FbFj/1wimyCDAXwH681Qlx/miqabp+RnqQr0PDAsC/btCnFjIJZLm8ux5iuNOGIcWiHQyZO+2pKgPlSCH2zWzE4vZCTr+kJeu9jWq1QW8m9rL19IMRzM7Vu0zdXke1y8m+f2SqPvuBaMQLkmfQkXUnfboNysQF58eoOGF/i29fE7yphY6er1kgG03x0S0nlXohmuqTomipkWLq6BXOFWBCAi34sUO5V7k0sq+Uo5s1YyHxuPihkt/9xQ1ZdqFQuP02TEoxplpRJR6RUFq6EszlNqB0egkSIVYSkAFvRTPvtpScXFlzm94M1UCBUawaXqGLfO+1vKtrFgey2y+rLRdtM7frye9ZkZQxR+ioXdxXVqOlKD5VqoM8HdenF9JgRbtvutsNJAdaC4oVjJziYq1t4gDlfyDgTDPemInRvPvNApn5AXUENMnTY95ON20NQutYEzh7pSzpTMUoaVEwzvVJo0umtabUjCKkxeDC+LgD7ufeyHuBeZqJuE4cmElxmp+9xL/NogweyFdfq8OCIjH7yzwUt8uL89EYJG5c9K52TcLEnpqls4eCkuXRh3z1BR1YWt8J0AVgjwMOJ+0ZlyvjCas42s2uR8ZgjoW+1vzaP/nMykMnF1LRvfrReaHINEkhn0tuC0uVbty1e83n6eGkSNW2wkQhJACb6ETlzWpJHXVLOz43tzYiHtVS5t29zsC2xBzLz7dqN6cbcgPlD9z8V3Jz51aNBb5eLbRrmTKqQJmHZkV7HkmpYtCii0aLj7MSLaKM5O+gSReTUqcG4N0ujjlbaXe3kWlao4gAXGdVgRCj76wAZXSjjoaqU3835Qtf3sO9lcj7tqFKlOwlimkn/V4Y+EcxLStdVquYAgZRaNB7S9UQXVJAQyXKxkhYVZ0iLYohHMQZP6SLIlejylcujc7YEKkkql5+hDStSGBPbU4vpGgyMV65JbIOtckWXE11PQQJn0+vcqiAfue9yInZMuSo+gGOiGpXU1awpsn8/d7uuMhCEJN25/IxkIwOE0b6btrW7eCvKaY+OvRPPpkCdLie6noKEZ17fElixsPFzhKNXAF4VIRd7otq6HaFZ79hVmpH92NKB52QuP48eLl2qKuIh83/P65gINyDHvw3xTJcTXU9BwpOvbcES+OlV+GRxMsOGQMHSTBZXr9+jHqFcbFyeT8xL7+bz57k7l1/snRBGfcZDFntmrpp2+bRxMKzvbTJ2FEvg+24lfp3k9/rNbRja2qTzXpM8TnuLFbMf5soWezCcRmWICheMILCrL1jZIeu3YBOIACGZy89+Tvs17c2pQktCG61oWu2ZriZ1OaWKIeHZs29ihwo4CJpZc7IMg7Aqze4TAADoQRcfRgrIsxm4+fxlT+bys885rDddaEoGsPkI7S9cTXQ5BQlvLkPnDDWWSxVlG8bQvOZqfdnG0Re+89picLGxrZfLW8t2BcpaMpefjWD08PQANzYDB6vH4Ox+gQYZ7S9dTelEgE2MZ84VWvgJRmGgpnKQerahdi9q7UYp6NoHzDbWXvyO3SZyMSr+wlUdSqdMc5Po8vPoAQaoHZHeNvHpZouDEeVelaB5i66mIGHRJ83S2mHanLqNNuIgMZh3x4ywAMfU++Cx9I0vPIXRdfO1dpTKok8yMEH5sp/o8jOVnwB7cPnejr8kDsbyZe6HvfYXAKurKf79lL+W0X2lCkUZPB3ZAzxxNJoFiujdQEwbgpHEAENFdaksW5PezecntN/lp/eVNlFROvlfTHJNz5yKaFdMx0Q0NOhMaog/TuPm4wD0Mlm9Kfs2+NAx5VKFZQmsmPanUbTXILDRqEuxmm16N5+/nPEuP0OXspKoHDEeiluaULcR3VV219xgrlzu2W9YMAsW3Xzqx0UHvx5rP8Y62Tb6zM4lSHbqeHhBtB0ufjGtpSaR3bZY3aGZkULfSnT5kS6Tx4axeFzqJpT0X7+V9gjoAGrX9ylZbIP7BzRwrKX7isoERFEENrAFHwfTGP1lnjYBCgTyQDHtKRb+F4ro2vSJkWGCjLZ47efBjEBxLj+X+Y6dkJ75SP8IVtT1O26QA9YPck3UdTVlTsntTagn7jgqgvzWcvr9sgunTMFsP+Rh9xHT5CFyXFgamlNzXiLF4lx+WukjcvJUTAZIE0h/4oB/5sD7RkTzQ0SUzgzmj58jIXWtJhVFjLRE3v4wmDLhj2/EHiVy1AHIGGvsbhMAMejT1hnGphuZl8tz+SktIJ6xyMvo4ek5WOlPgBVWU6kMwK4YUFdThsSl24qZV0UCkZKTP1jbmbXJksmeOS02gSrDbPTt11xOysTN5y9IzOVnprl+FXRJF7hEIunP2ZXaNKiS57XBRlDT1ZRpULeVFQUuF3OB7XlLsKBjlmH2keUyuN/u0Q4bEpCLQFPQKZ2bz0+ymMvPkf6VUTntqPTaM+luFzg3bbCJ0UXUiI8gWnCVOghsAQwnU+F66vXMlgHyF8he03V4wUxkie1OkQdP0dJyhMTQK7NCKQ4qVaOYUVKSkfKrdHcVXuVgbf9ZvWybh3O60QL+7NWo28rIedupp2nu1aWt8sXOYP0+f7z/eUI5FgSD1gmQi12bNtiSRtzPOHPpqC4/KJyVmKB2waz03Et6k+6kvxpXXHCZflyqQTxCJSUh0y+zYlqHkZZCTS/FRhjpJ0pp4ZP8o0/0olnMVuZKSZJo+tQt9l9Jr0yDuvxQwb91QllGQ6eeeaNB6W57NGwSrASJAzjR1ZQuQ4OqY5lWLtYuU5k8gXm+uYSLv1Im+ww1XabdgYv9dMqELsSB60Nfdlq/TF7H/GHQm9wL+hu1KoYLG08TCc7qasooSvPSaDoJVMQjDq01xoNCbe7dD7NXtljjbzoXcXMqZLEH0EfpFKAcjc0RuembAzMaCEE6G+2Zc6phLKLC6wvuLwNyzNXkeyPFpXHzuS8wYvWgYIYg3If3PRVsVGFiMjMmlshJR+BukbbFfskTR6fEgib53Qk37OwpmXEv6WwmxHGAAbtIMe5l1B7ctLoEdfnVqpsvZn2ieFA/KEYzvL6sVZasyt6yxczddn6pjBpSzKKaegSdOCB8gHDkgZmBS/qSzjpJnRq0whlrf5mkAZio41BXU4CMTBxN+zEK4YlpcjHFNGelV4CL0y8BlCo52mTv/U6J0JNSlMGljdIpQAEytSiSvjqrAvQm3RPFM5P0OJgP1dUUICOTx5Zj/z7WUlfj1XYYtZXTK5HoS4t2yaKV2bfFzMqk0WH58TmogEUpqjFCBvQhnfIdSFfSl3RWetNEqfTvIqIpnHkzrK6mIMYOLsl7xP52oDVBpiSA2ZLiAhyMlcXkhofqs16sxBLlGzNK5LKT+KuYPE3GiUP65HvpYi7+QrqSvsrBqlyxGYgHlxRzOZhyO6yupqAuv2l0Y4G7vMBa5BPTH30WkT/MyU1UM+6rziiRrx9rpIVfgfHS7UMXXv5AF6VPnvNGepKuVjxr/xd0Txbi2uBsXH6nTIU4ppvPA9nlYohpztMJYZT/z/+2RTZvz35Ij834T7GmRbGATHqQLqRPPgPpSHqSrkpf0JlSk9xrjRv+9DwOVmbGi0FdfqOGlkBMI0pVtNyofW0xM9HSXio3PPipP92srjnw+/bzIa5nFwEngx6kC+mTz0A6kp6kq7/t7S6NsKJO9oaIpqspG5ffWdNK0Tqa7oxJyOVi1aa51G8lFIIWefjZ4KvRJMs4xfUt52LdTOzs4onDZC/22j22v1FsuwPNNo+B9CMddSU+SkcqWCm4l0m7HIz3aKjAy9m4/DgaY2AVxbSrTTNmVhjEp300d1ngO/+8Sd7/JDetmlEznDcjLH/Ftj0cy92XQNa8gA6kB+mSr0C6kX5mmUWuvIumkeAqnZO3v0zbBdjlYP0guMuvH+ak/tcJiMpth722gJYV2EhtpiKhCvk+VqNpbM7e2+QnmN3phJuBkLB9BmjQgfQgXfIRSC/SjfSza2gb23N68e9xMKqCcnC2Lr9vnVgO22nMzWdAZsPPLhMULnAxZ8DXbwvJJXetlnasUp6PMABGn19dEpYHLxM4KHoXZMO9UaUD6ZGPQDqRXqQb6Uc6Gu6l+E+uWPnTVYC9dpi2ZHRxsnH5DYRn6dsnMjqfmGZKKkIIMjVqLMWPDFKR+8EvV6M58Gclt+vjDgnJCzeF5YpTHOzs2ZtAO0oH0iPXQPqQTqSXci7pRzpqv9fHmykS8r2F2kCJTZMXxGo2Lr/vnlQme2MDaILM2uwX1ZQMqtpzNRqAPOfdJvnJQ2tSZC34I246fcWpYXn1jpBcdbrIwH49B7RpHhwt//dAh3wE0od0MvtWkDmoWNEtaESzR98UiXXdlIOKEjY4/nzbLnTSK2TUnpmLmjI4tSkmn38PILuNfywTpp23eeEw9yWrGqWzs1OOPWSgvZ2XM4GeMi4k588IyX57iuzEcO16LM9PkVaIYCqzyBG1UXng+6WyR//c07nr8c/k4ee3AVyswcVljLkRCQF2uTdG19Ql8jblsDVQ953HphDRth26AttjN45JHUOSp9//TYe8uATSwKfhafxQPjR+3enLbB/DDaHOnzVIbvtOrXBPvkIFAjxnoSNvrRBZuFqwUAqy1431J5M8sDyVqEiHjxXMqRY5Ga7NfYbmXgCK5Z88VCd/erFBxbJZ3RYg6/YGSNBH00zy6QHMlxUE7kGP/Xu4QVOkfYc8fdu+cuj+1ZnE5b2zoxl7zt/eKRsaKEqMImAqEBPBziLRjthOX53NusvISVP7y6+u2l/KsR1doUMHlPglax1Z9qnZ0XsNuudrYE1tgHezvbMrSGXob3O/4NHDRMYMF7j/RA7eN4QtZiWvG5NwOu4V93wic97bCXDZlJnFyLX9pWhmLwchSMXsCrByGbZ2wQZN3Npl5qEheehalCRgWLw6KudhR64IhtLaDBmQ2QSAk709+8DJCjKahIMq5cHrxsuA6vwaCIJkPYLWpQnj91vB4ZVonarhMyk1dA0STeB3uVLRRf/9sby9wihUBlyXc9ELIedaZgkSeRy7KBA+M2MuLj9Olro+wc1ngAaHUMxQ6aLa79t9k9ri7B99kDdjSBBC2HdpDh2IrtdwbOXLc0+AuxqbbM66amlycJVzswOXZeqqZGlJAQKVLZjbHIyLWvLJDvnGzCFoI3E/QDh0DKZtYB2shXXmIwJsuRkXFN4GbNZO93cjdvz6+78/B+eEsEto/wCpFeerc9/ZJufe8hGWKSxxRbIrlm2bqxqzj24Bi5kcYNKdEalGHZEt21tlELock8fXBIxe5JgJYdmwLSor1ptPu4Cs4NKsaWspqhU0jXnvN8iy1Ttl2sQBmBTXAzIycMly+4Ck/fU/1sv1cB44XAaRWrJqyxDLrjHDdIeyB5c57AKwx2HKXQAaOXEwOXTBih1yznGDsyL28ZPCsumLdCCzrXaBdiVFHfYIfvxfmzA5PCST9kdXwb2fG2l7/2uCe939q+Th57aYPq7uBeF2hSznehU+mNRMLF0XgL0XXC4mvCEoRe3tHbKmvklOnx58Hz92f2Yexs0fIa7RRWGI52QXWIojBdlVzAAoTXWvLm6QF9/bJhNGV8veQ9NPozQp9N3/9z9ZLw8+u1U1Za5Qq5t82H6upy3nxrm29EkBjuNiFdbUfCOyur4ZUzActI3BRTUTPGZCCN0NR95EX5T9vXiQ2SKzUDSXmsOATfBDsmVHh/zvS5tked1O2W+vKhmxR+YGGFvYvnB+ecF2ue6Bz+K6QbqrKoY4WSMG8xnDILdcx3WTEqPy+sVRbl6M7kx7o4SjzfLEbfvLYeOyA5lpLK5z5Ie/c7C2cnwt9bpRUOwcWNNMVwp76sIYon3zCPZ24G7ZeP7lQ/vLFV8bJUcdnF8rWCIN8vl77cZWOfGq5fAKxfcejPkxM+dB0PykBxgi2hgmjPGDBpCRgztlzl0Tcuqv7oBR4YbHorB4mTbG1lgPZLb9ABk1ywNaN1DuBOAAWe8D6Eljq+Rrxw9D0zE0o33vgxIoX+9zLc9ZVy+HVyisItlusKVO+xw15VR5TAkwP1SCW+MHTZjtZgvyoyeUyR9vHJez5enlpY7c/jdH3WHxIGvqAJLcTOsXQIVxREEGJzs8FGhwOqxvHN1x/OGD5KwZe8qMwwZLTb++o3lzdv/5t34s73yENazsDmr0DHFERgHBJQUzA5hv0oQJgqqodveZP2lqP7n/R+NytiG3YjzeA3Oj8vt/hzCFNdb+GG5G2qhgQNQATQsY8mEB5tlwswGa75aEsVvM2Go55pABOAbJlAkDYJViN6znA3WNy35O82OLMerozmnoCim4hRHL/lKmBZgve2IzYZ95gk1HwR2XjPHHmfU19yT44ysODhGK8HiOpqLHg9wMMCm+PbBd0CnO8YzeMALNthoXumvbPsPKpXbvKhk7skpqcew3olIGwiTKPnYNDp5ZCaKoS5zqmS/Hx40PrlHHgdljCVvVkoPh00X/CHmL10GyJlyKDzMCmN97oprKD5Qegut0YNkA2JEvP3NPufa8fVIkE+xRC5jy+QWO/N+7IgtWMW3/9z6gAbZKFuZJwYYoUJAt0IbrWSkUcK0gQFADI0UXEMfUgwbI2ccNk9PQjldX5k+00+XHyWExl59rxAjo8nMznNUpY4AZuweyKj4GZCpdhXT51WO14hfo5vtIZNFq4+YzJbVAg1M5olPbanCuNiWGiz1OV443IBNoOhGOHF8l0yfVyKnTBsuoYfntW1Msx7v8aMTghpZ02BvHgZVOWaEW4KPgADNyFZM97/Kjm+/9NT433+d09zm63Qxt3sqlLtjMY3lpFA6DqLr5uDwgD673OHn/irxPJ7E0p2HmB/euyqvLz8adzTkQwEzAa4/ZxlEsWud9L7v8Et18NWjm6BnqycDRj5f8bGVyr1AOLr9cyhAYYCbmgUyx6BfXLsgjh4RUu87FGJJLoXrjW45bprZcvw3tOpwFcf5cmh8L3B3qrsxZ1XHTfsBAoSZF69c17QwLxnbzrBs/lIef2dBdurvVfZaT5WW5DbC2zcUQ114El0TOioMtOh4na5eEFidau1qgdHGUBka6ob8684j+cuf3amXYYCgXu1nYvL1drv9tnby0cCeQNWO/QzrMBkYMVajMGKqe6A51R9qcAGak8SCzu2Jsx1FYvdSGDDt2dUVUrjl3pHzr5L3QLhrTZHcZKob7nJ/7hxc2yt1/rZfmNjhDOE9XxTJHPnJgOrVl9HPz5PLLhSY5A8zEDci8gOKlfVKYEWkzpmkTSpheo60+aL8KueO7tXJEEY/UWPjxTrnxgTr5cB33qnDHetOHS9Mjh7UWyCuULch5ATgRZLCxq3xBZNMT5HqDjO24Q2YdOVCuOGcfjNbM3iOVbYGz/W7Jqib59d8/kxcXYLMrAguRrJyqnGu51h35qJwLBu4DAxTyBrAlnCeyXcNDsbv83l2+Q4fWzFuCoazUhNnWkksphq04RhdIfbm9pClb2ic75x1gJuKBDNNgMbr8vmjskGfe2Cr/eGWzLF3NhU4IrMu13sx6imMojryvpkfqFoW3LScDMdW9ggDMBL12GYbEYnD5NbVE5LX3twv3YXxlUQMW8AZYOk8rtiwU21dvZj1FNAeiu1zLMvcFkcx8+EPBALaJeEBDAdO2me2z5wUyPt3ecPlxNaH5KxrlrQ8acDSCUzHQPwou5JgwAGvABXdSHGt7a8924jXA7UNtraV34rngANsE/WLbKGGFc/kRvGasgM5V0HneARPiuk2tUocB5hxkztGan21uB6DMHTnVBQui1oBrlSiACXDNWhgu6ORaVZ76nji2tPafewxgJupxM8W2uu5cd57r383W5acFYnyJwdNiTfuoj8mhvE/u4wA/BYyD/AggTYoEl5xrFSfcd9+xwDKeviiOE4vP3/Q691iwRFEslMjgAsxdgjqKPGDZIRgMjFIG7nYd94kuPw7hNf1tsp/xIJkCuAAz8jhg8VRFKTmOoJrDtJ8Ez3KmeybQzA+4WudL6/uxCmLLYNLs+/97FGBLjhiR3M2wQEReEeiQUyYO1qYMcTQG22scRqT7f7sg0zWogBNcF2CbiJ7JqYZbY2CRg1mpyLXu2XLobgKqnwS9ArA/AxbsGFfHwCZ4WgV4JpAKKLte9poA47cFVyNxY3e5GHzrgQy2BLjkYHKk5WSc9R17n89MsHmzv4vx3OsAW6LFEzPG2eRMJbmCBy7F2Tx1OVZ/M5ZuOJiP/GBbwL2zvsB/eC0Grt7YDf71GYATaRkjtiG6x6UuBirSEz9KwsHxr8QDGEsj/q3d6df/AwtURKFSX+3IAAAAAElFTkSuQmCC\");\n    background-size: 70%;\n    background-repeat: no-repeat;\n    background-position: center;\n    box-shadow: 0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.29);\n    z-index: 2; }\n    .money-button .input-range__slider:active {\n      transform: none; }\n  .money-button .input-range__track--background {\n    top: 18%; }\n  .money-button .input-range__track--active {\n    background: #6ba1ff;\n    border-radius: 24px 0 0 24px;\n    z-index: 2;\n    transition: left 0.3s ease-out, width 0.3s ease-out, background-color 400ms linear; }\n  .money-button .slider-wrapper {\n    width: 100%;\n    height: 100%; }\n  .money-button .success-theme .input-range__track {\n    background-color: #6dc110;\n    width: 100%; }\n  .money-button .success-theme .input-range__slider {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAA2CAYAAACP8mT1AAAAAXNSR0IArs4c6QAABD5JREFUaAXtmltIFVEUhr3lQUw0y5KsRCjooaCHCvJBH4ywB3uQCIkwQYOQIInCHiqCJOgGYdAFIiKCood8iaiwFIIILCgoKhIMqSiiGxXZ1b5VQww657L3mnN0zrjg55wzs9da//97nNlnz87ImIi/DgwPDzeBy+A5eA0ugWaQOWGR4wBmzALdIFpc40Rp6A3DhAowAOJFd6jNwp15YDCeS67zTdlhdAwD5qO7F5QZ6I+EziyMWoBBPcD0OpSfZeBs4Idi1CJE9ILpFmJyQmMWRi3BoBtgqoVRktIXCrMwahli5Y42RVRbRpdlXnDSMKoKfAKakLlWek9OEVgDvmhcIrcfzAzO18OCKQJrwVegiSckm0wvLJiOcQoC68CQxiVyHwLT6cUYKzdsj8B68B1o4j7JJYatgzUcgQ3gh8Ylcu+C4mApN2SLwEbwE2jiNslFhq2DNRyBLeCXxiVyb4KCYCk3ZIvAVvAbaKKH5HzD1sEajsA2jUNOrkw484Kl3JAtAtt9MEqWjiOGrYM1HIE7fTCqixq5wVJuyBaBHT4YdYEaOYatRw+nyGRQDSrBuLo7wOcg0MZZCugWPSlQDq4C9y1Y7jLyeKh8tK2pPQKHTqCNUxTQLUtRYAX4GIPJZ86tSa09/7rRNxMcj8Et0VPHpJZKAwUKwYsEOsrseJ2qmWEy/bKAfBu00WnY2ns4LPYbMJF/0WbvSv4epU82kOuLNg74xgwmtwzZyHVso28EPApRPwfIHUsbHR7l7Q/BJta1KhbZzfZdo2fSMBfIHEgbu6J3sTwDo0cKVtss23qmwSMCZFatjXbPBtqDsDqjZLZDy0Hy4ZAH5HeaNtr84ONZA2aLgXbBbI9n8QQP0j8f9ABNyLW0NcGW9sNoslvD0sndZ8OA3AIga0makLt0i01/4xwayXzmtIatk3vYpDk5RUBWJzUh879Gk77qsTSUmfIJDWsn96jUikeIMcXgjpNj+yKXj4Z4vZJynsZi2BFb5q68k7yP+huMcyVAnqBoQp7g1CfFCJOikDikUeHkyl121K97jpUCeSaniSGS60w0JXUsZPZq1Di553n9v27E+zIgT3k1IU+Za5Mq3qY4pPy4S16kziQwB/QDTci+hRobLSnJgdx2jTon9wqvz5R1ZCdMVUpEa5pAcotSqDb9AwVkj1UwArKbgMySUx3vaCi79oIVkN4AUmnYG/rJPtBgBuTXA/c6PR+TEq+oKjuLgx2IWAvkZ0ay4iWFZa96egRiVgOZRfsdgxScmx4uuVQgahX45qNbA9SqcLVIr7eIWwlkVq2NpxSYnV7ueKhB5HIgs2vbeExieu8IdvuG2Gpgs9/8AXkz3LVC8R7RlcDkadE9xk8LhTleIhG/FLwH8aKPAem90dXLoJHHMGEhkG9NtDjHicKReaH9jBmyLLMVXAdvgaw6yMPT8bNoZ/jX+QPTpFWi6h6RigAAAABJRU5ErkJggg==\");\n    background-size: 45%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: #6dc110;\n    box-shadow: 0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.29); }\n  .money-button .completed-theme .input-range__track--active {\n    background-color: #2669ff; }\n  .money-button .empty-theme .input-range__track {\n    background-color: white;\n    width: 100%;\n    transition: none; }\n  .money-button .empty-theme .input-range__slider {\n    opacity: 0.5; }\n  .money-button .loading-theme .input-range__track {\n    background-color: #d7d7db;\n    width: 100%; }\n  .money-button .loading-theme .input-range__slider {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABLpJREFUaAXtWluITVEY/s7MiFxConiQ3OVB436ZBuUSyu0BGZQkKR5Q8kApnjSNFx4kKcyIB9eQQYaGjAxGySU0HiSEkSHTjBnrs9vNnrPXXnuvdfbeZ8v5a5p9/v2v//++dd1rrT81fGNbG2KSVArYNB9YVmQFPFUNHLwMxIcAKIiJ698wJdMF4QXtETeL54YfwImqdl3UT3lRB3D6nz3G+ct6luncVuFpYiXcq5sbuEzntgpPEyvh8GCbe8oRNq+7f6Ok7yydJ5aSeeOAPj2Au8+BV++TRWxof2DqSODzd+BKLdDqs8gqCZNs+VZg7BCLZMtvoOw8cOR6MkivmwVsXSTW1nwLzyqx7JWUqUkrxzBb1iZLl3S8fSmwYW72CRMDsdhkiYhYiVklSsLsxjJhrZqQbvzl9ibTua06ahibGGTihdm2VRLmmGU3lokJ6TvP3J5kOrdVu0ZFlliJWSX5fSbs3u1l8KURaGoGpo2SW0wRk0VzC1D7Wv4+Xfu4HhjQGxg2wPp+Pl8DlJ5TjzmnDxVZ2tHXjSfOEu7nVJDNg18gTmSHrrqde2k6d7LesDKDSlgYlF3aBkMyJOUl7N6Thnu9detJVIfsmEHeY5bedSo8EGE69SO9sphW0chasfx4iQ5Z+ghMmMYq0n4LPsubSmurvKQuWXrRIswCMtLcwB+7ybfRCGP+bOro24QsPQSatDqGsn5xzLIbs2VJ9tEbmVV4usLBwOoZArD4+jt7D7j91My3MWGzcNkvpd2lsw85MwQ5wpnVX/JL51o4+W2UGcJcC2dWf8kvXcCFnDcCPBBXnRFzo8696+FKsSX02CPHTbeTOIFZP8favnbv4h2dtxvX6sRx1S1xQsK7Huf1h3cxYPxQYGBfYMcxlVV87/aWAIsnB4s3eYTVoKkPDW1t/XoGK0Sr3+JDvnCL3vYuuPfgltxTP9oP5GvMQh+/GWwegkNKpmXe6Wo9YBfuZ791iZgHCBcFFh3h9WzBAXE/+1UMap1JSydIlLY7K4C3n/QmrdxuKcoWSYJvjTkuCXAzx5AjnHkdJttDroWT3T6Zo/vvWrjAtM6KRwNLxIc7z6SPV8VzTLtmpvgWFru7ittAzUsz5EYfHukXWzwkX1EKvHhnBsKvFM+kT26zzqRtW9ODeO0unU6WALp2Nrsgt8H7/WfLct/uFJP7aZbXIiwja4PI0/Jklwr2n91YJiakA8NUkSWYoxEmunDMeoku6UCE/chyPNXVe0Fy67l5ty/F3W/dGk5QjOElOqR9Z2k7NcgrmM7kwTOoPeJYZuFEyxv31rvKg52R8QaRQnIyoZ45Hn4pVcoWZtKXVwAG1SFLex64cSnjsQz/+ExdUJFd1TrLEisxq0RJmBluzjwopyNdsiwrS46R6Zxx0p9VpImVmFWiJMx0PpmYkKUf2VGqTCeL6dSpSHthtssrCTN38aEjJYljZN8ZvYwdO1DY/0maWJx5ZMRKzCpRTlq83WfuYlKTSzlB3RKZAKEll7KmSPrSA1WdZfcds3t1MnyVXTq7VKKJniMcTb0mx2usLcxbvHSR6dJtwvwdK2FeWaZL5eN0TbS/lctS2KF5P8s76OVFlmfe9ah2QmHHp78/gIBZP/Pm50UAAAAASUVORK5CYII=\");\n    background-size: 45%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: #2669ff;\n    animation: rotate 5s linear infinite;\n    box-shadow: 0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.29); }\n  .money-button .error-theme .input-range__track {\n    background-color: #f5a623;\n    width: 100%; }\n  .money-button .error-theme .input-range__slider {\n    background-image: url(\"data:image/png;base64,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\");\n    background-size: 45%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: #f5a623;\n    box-shadow: 0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.29); }\n\n@keyframes rotate {\n  to {\n    transform: rotate(360deg); } }\n";
styleInject(css);

var css$1 = ".input-range__slider {\n  appearance: none;\n  background: #3f51b5;\n  border: 1px solid #3f51b5;\n  border-radius: 100%;\n  cursor: pointer;\n  display: block;\n  height: 1rem;\n  margin-left: -0.5rem;\n  margin-top: -0.65rem;\n  outline: none;\n  position: absolute;\n  top: 50%;\n  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;\n  width: 1rem; }\n  .input-range__slider:active {\n    transform: scale(1.3); }\n  .input-range__slider:focus {\n    box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2); }\n  .input-range--disabled .input-range__slider {\n    background: #cccccc;\n    border: 1px solid #cccccc;\n    box-shadow: none;\n    transform: none; }\n\n.input-range__slider-container {\n  transition: left 0.3s ease-out; }\n\n.input-range__label {\n  color: #aaaaaa;\n  font-family: \"Helvetica Neue\", san-serif;\n  font-size: 0.8rem;\n  transform: translateZ(0);\n  white-space: nowrap; }\n\n.input-range__label--min,\n.input-range__label--max {\n  bottom: -1.4rem;\n  position: absolute; }\n\n.input-range__label--min {\n  left: 0; }\n\n.input-range__label--max {\n  right: 0; }\n\n.input-range__label--value {\n  position: absolute;\n  top: -1.8rem; }\n\n.input-range__label-container {\n  left: -50%;\n  position: relative; }\n  .input-range__label--max .input-range__label-container {\n    left: 50%; }\n\n.input-range__track {\n  background: #eeeeee;\n  border-radius: 0.3rem;\n  cursor: pointer;\n  display: block;\n  height: 0.3rem;\n  position: relative;\n  transition: left 0.3s ease-out, width 0.3s ease-out; }\n  .input-range--disabled .input-range__track {\n    background: #eeeeee; }\n\n.input-range__track--background {\n  left: 0;\n  margin-top: -0.15rem;\n  position: absolute;\n  right: 0;\n  top: 50%; }\n\n.input-range__track--active {\n  background: #3f51b5; }\n\n.input-range {\n  height: 1rem;\n  position: relative;\n  width: 100%; }";
styleInject(css$1);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var MoneyButton = function (_PureComponent) {
  inherits(MoneyButton, _PureComponent);

  function MoneyButton(props) {
    classCallCheck(this, MoneyButton);

    var _this = possibleConstructorReturn(this, (MoneyButton.__proto__ || Object.getPrototypeOf(MoneyButton)).call(this, props));

    _this.onInputChange = function (e) {
      var inputValue = e.target.value;

      _this.setState({ inputValue: inputValue });
      _this.props.onInputChange(inputValue);
    };

    _this.stateRenderMap = {
      loading: function loading() {
        var loadingMessage = _this.props.loadingMessage;


        return React.createElement(
          'div',
          { className: 'loading-title' },
          loadingMessage
        );
      },
      success: function success() {
        var currencyName = _this.props.currency;
        var successMessagePrefix = _this.props.successMessagePrefix;

        var successTitle = successMessagePrefix + ' ' + currencyName + ' ';
        var successValue = _this.state.inputValue;

        return React.createElement(
          React.Fragment,
          null,
          React.createElement(
            'div',
            { className: 'success-title' },
            successTitle
          ),
          React.createElement(
            'div',
            { className: 'success-title-value' },
            successValue
          )
        );
      },
      error: function error() {
        var errorMessage = _this.props.errorMessage;


        return React.createElement(
          'div',
          { className: 'error-title' },
          errorMessage
        );
      },
      default: function _default() {
        var currencyName = 'HK$';

        return React.createElement(
          React.Fragment,
          null,
          React.createElement(
            'div',
            { className: 'value-input-currency' },
            currencyName
          ),
          React.createElement('input', {
            type: 'numebr',
            className: 'value-input',
            value: _this.state.inputValue,
            onChange: _this.onInputChange
          })
        );
      }
    };

    _this.onSliderChange = function (value) {
      _this.setState({ value: value });
    };

    _this.onChange = function (value) {
      _this.props.onChange(value);
      _this.setState({ value: value });
    };

    _this.paidProccess = function () {
      _this.props.onSlideComplete(_this.state.value);
      if (_this.state.value >= 9.5) {
        _this.props.onReachEnd(_this.state.value);
        setTimeout(function () {
          return _this.setState({ value: 0 });
        }, 10);
        return;
      }
      setTimeout(function () {
        return _this.setState({ value: 0 });
      }, 10);
    };

    _this.state = {
      value: 0,
      maxValue: 10,
      inputValue: ''
    };
    return _this;
  }

  createClass(MoneyButton, [{
    key: 'getTheme',
    value: function getTheme() {
      var _props = this.props,
          loading = _props.loading,
          success = _props.success,
          error = _props.error;


      if (loading) {
        return 'loading-theme';
      }

      if (success) {
        return 'success-theme';
      }

      if (error) {
        return 'error-theme';
      }

      if (this.state.value >= 9.5) {
        return 'completed-theme';
      }

      if (!this.state.inputValue) {
        return 'empty-theme';
      }

      return '';
    }
  }, {
    key: 'getRenderContentMethod',
    value: function getRenderContentMethod() {
      var _props2 = this.props,
          loading = _props2.loading,
          success = _props2.success,
          error = _props2.error;


      if (loading) {
        return this.stateRenderMap['loading'];
      }

      if (success) {
        return this.stateRenderMap['success'];
      }

      if (error) {
        return this.stateRenderMap['error'];
      }

      return this.stateRenderMap['default'];
    }
  }, {
    key: 'renderSliderContent',
    value: function renderSliderContent() {
      var renderContent = this.getRenderContentMethod(this.props);

      return React.createElement(
        'div',
        { className: 'value-input-container' },
        renderContent()
      );
    }
  }, {
    key: 'renderSlider',
    value: function renderSlider() {
      var _props3 = this.props,
          loading = _props3.loading,
          success = _props3.success,
          error = _props3.error;

      var isDisabled = loading || success || error || !this.state.inputValue;
      var theme = this.getTheme();

      return React.createElement(
        'div',
        { className: 'slider-wrapper ' + theme },
        React.createElement(InputRange, {
          maxValue: this.state.maxValue,
          minValue: 0,
          formatLabel: function formatLabel() {
            return '';
          },
          value: this.state.value,
          onChange: this.onChange,
          onChangeComplete: this.paidProccess,
          draggableTrack: true,
          step: 0.1,
          disabled: isDisabled
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var theme = this.getTheme();

      return React.createElement(
        'div',
        { className: 'money-button ' + theme },
        this.renderSliderContent(),
        this.renderSlider()
      );
    }
  }]);
  return MoneyButton;
}(PureComponent);

MoneyButton.defaultProps = {
  loading: false,
  loadingMessage: 'Processing',
  success: false,
  successMessagePrefix: 'Paid',
  error: false,
  errorMessage: 'Try again',
  onSlideComplete: function onSlideComplete() {},
  onReachEnd: function onReachEnd() {},
  onChange: function onChange() {},
  onInputChange: function onInputChange() {},
  currency: ''
};
MoneyButton.propTypes = {
  loading: PropTypes.bool,
  loadingMessage: PropTypes.string,
  success: PropTypes.bool,
  successMessagePrefix: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onSlideComplete: PropTypes.func,
  onReachEnd: PropTypes.func,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  currency: PropTypes.string
};

export default MoneyButton;
//# sourceMappingURL=index.es.js.map
