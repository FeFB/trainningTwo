import * as React from 'react';

interface IProductCategoryProps {
    category : string;
}

interface IProductCategoryState {}

export class ProductCategoryRow extends React.Component <IProductCategoryProps, IProductCategoryState> {

  constructor(props: IProductCategoryProps) {
    super(props);
  }

  render() : JSX.Element {

    return (
      <tr>
        <th colSpane = "2"> { this.props.category  } </th>
      </tr>
    );
  }
}
