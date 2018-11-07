import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';

import About from './components/about';
import Index from './components/index';

export default class Hello extends Component{
    render(){
        return (
            <Router>
                <div>
                    <ul className="nav">
            　　　　　　<li><Link to="/">App</Link></li>
            　　　　　　<li><Link to="/About">About</Link></li>
            　　　　　　<li><Link to="/Inbox">Inbox</Link></li>
        　　 　　　　</ul>
                    <div className='container'>
                      <Route exact path="/" component={App} />
                      <Route path="/About" component={About} />
                      <Route path="/Inbox" component={Index} />
                    </div>
                </div>
            </Router>
        )
    }
}




ReactDOM.render(<Hello />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
