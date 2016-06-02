import * as React from "react";
import * as ReactDOM from "react-dom";

import {AppComponent} from './components/';

ReactDOM.render(
  <AppComponent compiler="TypeScript" framework = "React" />,
  document.getElementById("root")
);