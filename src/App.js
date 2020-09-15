import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/navBar';
import Home from './components/home';
import Configuration from './components/configuration';
import store from './redux/store';
import { AppContextProvider } from './components/context';
import './App.css';
import  './components/home.css';

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