import * as React from 'react';
import {ProductTable} from './ProductTable';
import {SearchBar} from './SearchBar';
import {productType} from '../types';

interface FilterableProductTableProps  {
  products : productType[];
}

interface FilterableProductTableState {
  filterText : string;
  inStockOnly : boolean;
}

export class FilterableProductTable extends React.Component<FilterableProductTableProps, FilterableProductTableState> {

  constructor(props: FilterableProductTableProps, state: FilterableProductTableState) {
    super (props, state);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.state =  {
      filterText: '',
      inStockOnly: false
    };
  }

 handleUserInput(filterText, inStockOnly) : void {
   this.setState ({
     filterText: filterText,
     inStockOnly: inStockOnly
   });
 }

  render() : JSX.Element {

    return(
      <div>
      <SearchBar
      filterText = {this.state.filterText}
      inStockOnly = {this.state.inStockOnly}
      onUserInput = {this.handleUserInput}
      />
      <ProductTable
      products={this.props.products}
      filterText = {this.state.filterText}
      inStockOnly = {this.state.inStockOnly}
      />
      </div>
    );
  }
}
