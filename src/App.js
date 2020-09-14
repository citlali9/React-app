import React from 'react';
import NavBar from './components/navBar'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/home';
import Configuration from './components/configuration';
import  './components/home.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AppContextProvider } from './components/context';

function App() {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/page-1" component={Home}/>
            <Route path="/page-2" component={Configuration}/>
          </Switch>
      </Router>
      </AppContextProvider> 
  </Provider>
  );
}

export default App;