"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        _super.call(this, props);
    }
    App.prototype.test = function (even) {
        console.log(even);
    };
    App.prototype.render = function () {
        return (React.createElement("li", null, React.createElement("div", null), React.createElement("h1", null, "Hello from ", this.props.compiler, " and ", this.props.framework, "!"), React.createElement("div", null)));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=app.js.map