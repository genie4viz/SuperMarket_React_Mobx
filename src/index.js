import React from "react";
import { render } from "react-dom";
import { Provider } from 'mobx-react';
import DevTools from "mobx-react-devtools";
import CounterStore from './stores/counter';
import App from "./App";

const counter = new CounterStore();

render(
  <Provider counter={counter}>
    <div>
      <DevTools />
      <App />
    </div>
  </Provider>,
  document.getElementById("root")
); 
