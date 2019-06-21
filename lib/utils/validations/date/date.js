"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validations = _interopRequireDefault(require("../../helpers/validations"));

var _date = _interopRequireDefault(require("../../helpers/date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Validates a date
 *
 * @constructor DateValidator
 */
var DateValidator =
/**
 * @method constructor
 * @param {Object} params
 */
function DateValidator() {
  var _this = this;

  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, DateValidator);

  _defineProperty(this, "validate", function (value) {
    return !value || _date.default.isValidDate(value);
  });

  _defineProperty(this, "message", function () {
    return _validations.default.validationMessage(_this.customMessage, 'errors.messages.wrong_format');
  });

  this.customMessage = params.customMessage;
}
/**
 * This will validate the given value, and return a valid status.
 *
 * @method validate
 * @param {Object} value to check
 * @return {Boolean} true if value is valid
 */
;

var _default = DateValidator;
exports.default = _default;