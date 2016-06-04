import * as React from 'react';
import * as FileInput from 'react-file-input';

interface ITodoProps {
  readonly compiler: string;
  readonly framework: string;

}
interface ITodoState  {}

export class App extends React.Component <ITodoProps, ITodoState> {
  constructor(props: ITodoProps){
    super(props);
  }

  public handleChange(event: Event): void {
    let element = event as any as HTMLModElement;
    var target = document.getElementsByName('mySpread');
    var file = target.item(0);
    var xls = document.createElement('xls');
    var reader = new FileReader();
    //reader.readAsArrayBuffer(file);
    console.log('Selected file:', element);
  }
  render(): JSX.Element {
    return (
    <li>
      <div></div>
      <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
      <div></div>
      <p> </p>
        </li>
    );
  }

}
