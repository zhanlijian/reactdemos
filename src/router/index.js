import React, { Component } from 'react';

//路由的2种形式： hash(HashRouter) , H5的historyApi(BroswerRouter)是路由的容器，是组件，要包在路由的外面
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';

import About from '../components/about';
import Index from '../components/index';
import App from '../components/App';


export default class setRouter extends Component{
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