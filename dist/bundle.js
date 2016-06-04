/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var _1 = __webpack_require__(3);
	var models_1 = __webpack_require__(9);
	ReactDOM.render(React.createElement(_1.FilterableProductTable, {products: models_1.ProductsModel}), document.getElementById("root"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FilterableProductTable_1 = __webpack_require__(4);
	exports.FilterableProductTable = FilterableProductTable_1.FilterableProductTable;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ProductTable_1 = __webpack_require__(5);
	var SearchBar_1 = __webpack_require__(8);
	var FilterableProductTable = (function (_super) {
	    __extends(FilterableProductTable, _super);
	    function FilterableProductTable(props, state) {
	        _super.call(this, props, state);
	        this.handleUserInput = this.handleUserInput.bind(this);
	        this.state = {
	            filterText: '',
	            inStockOnly: false
	        };
	    }
	    FilterableProductTable.prototype.handleUserInput = function (filterText, inStockOnly) {
	        this.setState({
	            filterText: filterText,
	            inStockOnly: inStockOnly
	        });
	    };
	    FilterableProductTable.prototype.render = function () {
	        return (React.createElement("div", null, 
	            React.createElement(SearchBar_1.SearchBar, {filterText: this.state.filterText, inStockOnly: this.state.inStockOnly, onUserInput: this.handleUserInput}), 
	            React.createElement(ProductTable_1.ProductTable, {products: this.props.products, filterText: this.state.filterText, inStockOnly: this.state.inStockOnly})));
	    };
	    return FilterableProductTable;
	}(React.Component));
	exports.FilterableProductTable = FilterableProductTable;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ProductCategoryRow_1 = __webpack_require__(6);
	var ProductRow_1 = __webpack_require__(7);
	var ProductTable = (function (_super) {
	    __extends(ProductTable, _super);
	    function ProductTable(props) {
	        _super.call(this, props);
	    }
	    ProductTable.prototype.render = function () {
	        var _this = this;
	        var rows = [];
	        var lastCategory = null;
	        this.props.products.forEach(function (product) {
	            if ((product.name.indexOf(_this.props.filterText) === -1) ||
	                (!product.stocked && _this.props.inStockOnly)) {
	                return;
	            }
	            if (product.category !== lastCategory) {
	                rows.push(React.createElement(ProductCategoryRow_1.ProductCategoryRow, {category: product.category, key: product.category}));
	            }
	            rows.push(React.createElement(ProductRow_1.ProductRow, {product: product, key: product.name}));
	            lastCategory = product.category;
	        });
	        return (React.createElement("table", null, 
	            React.createElement("thead", null, 
	                React.createElement("tr", null, 
	                    React.createElement("th", null, "Name"), 
	                    React.createElement("th", null, "Price"))
	            ), 
	            React.createElement("tbody", null, rows)));
	    };
	    return ProductTable;
	}(React.Component));
	exports.ProductTable = ProductTable;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ProductCategoryRow = (function (_super) {
	    __extends(ProductCategoryRow, _super);
	    function ProductCategoryRow(props) {
	        _super.call(this, props);
	    }
	    ProductCategoryRow.prototype.render = function () {
	        return (React.createElement("tr", null, 
	            React.createElement("th", {colSpane: "2"}, 
	                " ", 
	                this.props.category, 
	                " ")
	        ));
	    };
	    return ProductCategoryRow;
	}(React.Component));
	exports.ProductCategoryRow = ProductCategoryRow;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ProductRow = (function (_super) {
	    __extends(ProductRow, _super);
	    function ProductRow(props) {
	        _super.call(this, props);
	    }
	    ProductRow.prototype.render = function () {
	        var name = this.props.product.stocked ? this.props.product.name : React.createElement("span", {style: { color: 'red' }}, this.props.product.name);
	        return (React.createElement("tr", null, 
	            React.createElement("td", null, name), 
	            React.createElement("td", null, this.props.product.price)));
	    };
	    return ProductRow;
	}(React.Component));
	exports.ProductRow = ProductRow;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var SearchBar = (function (_super) {
	    __extends(SearchBar, _super);
	    function SearchBar(prop) {
	        _super.call(this, prop);
	    }
	    SearchBar.prototype.handleChange = function () {
	        this.props.onUserInput(this.filterTextInput.value, this.inStockeOnlyInput.checked);
	    };
	    SearchBar.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("form", null, 
	            React.createElement("input", {type: "text", placeholder: "Search...", value: this.props.filterText, ref: function (ref) { return _this.filterTextInput = ref; }, onChange: this.handleChange.bind(this)}), 
	            React.createElement("p", null, 
	                React.createElement("input", {type: "checkbox", checked: this.props.inStockOnly, ref: function (ref) { return _this.inStockeOnlyInput = ref; }, onChange: this.handleChange.bind(this)}), 
	                ' ', 
	                "Only show products in stock")));
	    };
	    return SearchBar;
	}(React.Component));
	exports.SearchBar = SearchBar;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Model_1 = __webpack_require__(10);
	exports.ProductsModel = Model_1.PRODUCTS;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	exports.PRODUCTS = [
	    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
	    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
	    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
	    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
	    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
	    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
	];


/***/ }
/******/ ]);