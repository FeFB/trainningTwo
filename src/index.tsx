import * as React from "react";
import * as ReactDOM from "react-dom";
import { FilterableProductTable} from './components/';
import {ProductsModel} from './models';


ReactDOM.render(
    <FilterableProductTable products = {ProductsModel} />,
    document.getElementById("root")
);
