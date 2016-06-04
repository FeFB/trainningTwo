import * as React from 'react';
import {productType} from '../typings';
import {ProductCategoryRow} from './ProductCategoryRow';
import {ProductRow} from './ProductRow';


interface IProdTableProps {
    products: productType[];
    filterText: string;
    inStockOnly: boolean;
}

interface IProdTableState { }

export class ProductTable extends React.Component<IProdTableProps, IProdTableState> {

    constructor(props: IProdTableProps) {
        super(props);
    }

    render(): JSX.Element {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach((product) => {
            if ((product.name.indexOf(this.props.filterText) === -1) ||
                (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }

}
