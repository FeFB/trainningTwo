import * as React from 'react';

interface SearchBarProps {
    inStockOnly: boolean;
    filterText: string;
    onUserInput(value: string, checked: boolean): void;
}

interface SearchBarState { }


export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    public filterTextInput: any
    public inStockeOnlyInput: any;

    constructor(prop: SearchBarProps) {
        super(prop);

    }

    handleChange() {
        this.props.onUserInput(this.filterTextInput.value, this.inStockeOnlyInput.checked);
    }


    render(): JSX.Element {

        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value = {this.props.filterText}
                    ref={(ref) => this.filterTextInput = ref}
                    onChange = {this.handleChange.bind(this) }
                    />
                <p>
                    <input
                        type="checkbox"
                        checked ={this.props.inStockOnly}
                        ref = {(ref) => this.inStockeOnlyInput = ref}
                        onChange = {this.handleChange.bind(this) }
                        />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}
