import * as React from 'react';
import * as FileInput from 'FileInput';


interface ITodoProps {
  compiler: string;
  framework: string;

}
interface ITodoState  {}

export class App extends React.Component <ITodoProps, ITodoState> {
  constructor(props: ITodoProps){
    super(props);
  }

  public test(even: any): void{
    console.log(even);
  }
  render(): JSX.Element {
    return (
    <li>
      <div></div>
      <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
      <div></div>
        </li>
    );
  }

}
