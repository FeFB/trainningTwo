import * as React from 'react';
import {productType} from '../types';

interface IProductRowProps {

  product : productType;
  //
}

interface IProductRowState  {}

export class ProductRow extends React.Component <IProductRowProps, IProductRowState> {

  constructor(props: IProductRowProps) {
    super(props);
  }

  render() : JSX.Element {
    let name = this.props.product.stocked? this.props.product.name :  <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;

    return (
      <tr>
       <td>{ name }</td>
       <td>{ this.props.product.price }</td>
     </tr>

    );
  }
}
