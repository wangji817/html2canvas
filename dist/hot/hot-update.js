webpackHotUpdate(0,{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(25);

var _html2canvas = __webpack_require__(26);

var _html2canvas2 = _interopRequireDefault(_html2canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test = function (_Component) {
	_inherits(Test, _Component);

	function Test(props) {
		_classCallCheck(this, Test);

		var _this2 = _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));

		_this2.state = {
			msg: "Hello World"
		};
		return _this2;
	}

	_createClass(Test, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this = this;
			(0, _html2canvas2.default)(document.body).then(function (canvas) {
				var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url 　			
				_this.refs.canvas.src = imgUri;
				_this.refs.downImg.href = imgUri;
			});
			$(_this.refs.canvas).on('longTap', function () {
				console.log('longPress');
			});
		}
	}, {
		key: '_save',
		value: function _save(e) {
			$(this.refs.canvas).trigger('longTap');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'test' },
				_react2.default.createElement(
					'div',
					{ className: 'test-title' },
					this.state.msg
				),
				_react2.default.createElement(
					'a',
					{ ref: 'downImg', className: 'downImg', href: '', download: 'downImg.jpeg', onClick: this._save.bind(this) },
					'pc\u622A\u56FE\u4E0B\u8F7D\uFF0C\u624B\u673A\u7AEF\u957F\u6309\u4E0B\u9762\u56FE\u7247\u4FDD\u5B58'
				),
				_react2.default.createElement('img', { className: 'test-canvas', ref: 'canvas' })
			);
		}
	}]);

	return Test;
}(_react.Component);

exports.default = Test;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ })

})