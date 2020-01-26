import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Pages/Homepage';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import TOA from './components/Pages/TOA';
import Preparation from './components/Pages/Preparation';
import Services from './components/Pages/Services';
import Appointment from './components/Pages/Appointment';
import Schedule from './components/Pages/Schedule';
import AboutMe from './components/Pages/AboutMe';

function App() {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducer,
        composeEnhancers(applyMiddleware(thunk))
    );

return (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/toa' component={TOA} />
                <Route path='/about-me' component={AboutMe} />
                <Route path='/preparation' component={Preparation} />
                <Route path='/services' component={Services} />
                <Route path='/appointments' component={Appointment} />
                <Route path='/schedule' component={Schedule} />
            </Switch>
        </BrowserRouter>
    </Provider>
);
}

export default App;
