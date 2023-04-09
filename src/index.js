import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Rute from "./routes/index"

ReactDOM.render(
  <BrowserRouter>
      <Rute/>
  </BrowserRouter>,
  document.getElementById('root')
);

