//REACT
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

//STORE
import store from '../../store';

//HISTORY
import history from '../../history';

//STYLE
import './app.scss';

//COMPONENTS
import Home from '../home/home';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Home />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
