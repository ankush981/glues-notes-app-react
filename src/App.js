import React from "react";
import "./App.css";
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
// app UI components
import Dashboard from './components/Dashboard';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Dashboard/>
            </div>
        </Provider>
    );
}

export default App;
