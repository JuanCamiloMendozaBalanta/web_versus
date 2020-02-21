//REACT
import React from 'react';
import { Provider } from 'react-redux';

//STORE
import store from '../../store';
//STYLE
import './app.scss';

//COMPONENTS
import Home from '../home/home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
