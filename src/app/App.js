import React from "react";
//ROUTE
import { HashRouter } from 'react-router-dom';

//STYLE
import './app.scss'

//COMPONENTS
import Home from "../home/home";


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Home />
      </div>
    </HashRouter>
  );
}

export default App;
