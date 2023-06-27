"use strict";

var _reactDom = require("react-dom");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _expect = require("expect");

var _expect2 = _interopRequireDefault(_expect);

var _animateScroll = require("../mixins/animate-scroll");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _utility = require("./utility");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe("AnimateScroll", function () {
  var node = void 0;
  var node2 = void 0;
  var duration = 10;
  var waitDuration = duration * 10;

  var tallComponent = _react2.default.createElement("div", { id: "hugeComponent" }, _react2.default.createElement("a", { onClick: function onClick() {
      return _animateScroll2.default.scrollToTop();
    } }, "Scroll To Top!"), _react2.default.createElement("a", { onClick: function onClick() {
      return _animateScroll2.default.scrollTo(100);
    } }, "Scroll To 100!"), _react2.default.createElement("a", { onClick: function onClick() {
      return _animateScroll2.default.scrollMore(10);
    } }, "Scroll More!"), _react2.default.createElement("div", { style: { height: "10000px" } }));

  var tallComponent2 = _react2.default.createElement("div", { id: "hugeComponent2" }, _react2.default.createElement("a", { onClick: function onClick() {
      return _animateScroll2.default.scrollToTop();
    } }, "Scroll To Top!"), _react2.default.createElement("a", { onClick: function onClick() {
      return _animateScroll2.default.scrollTo(100);
    } }, "Scroll To 100!"), _react2.default.createElement("a", { onClick: function onClick() {
      return _animateScroll2.default.scrollMore(10);
    } }, "Scroll More!"), _react2.default.createElement("div", { style: { height: "10000px" } }));

  var wideComponent = _react2.default.createElement("div", { id: "wideComponent" }, _react2.default.createElement("a", { onClick: function onClick() {
      return _animateScroll2.default.scrollToTop({ horizontal: true });
    } }, "Scroll To Top!"), _react2.default.createElement("a", { onClick: function onClick() {
      return _animateScroll2.default.scro