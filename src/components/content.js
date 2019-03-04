import React from 'react'
import {  Route, Switch } from 'react-router-dom';
import popular from 'views/popular';
import crossManage  from 'views/crossManage';
import digitalDocument from 'views/digitalDocument';
import multimedia  from 'views/multimedia';
import 'assets/css/content.css';
export const ActiveContent = (props) => (
    <div className="content">
        <Switch>
            <Route exact path='/' component={popular}/>
            <Route path='/crossManage' component={crossManage}/>
            <Route path='/digitalDocument' component={digitalDocument}/>
            <Route path='/multimedia' component={multimedia}/>
        </Switch>
    </div>
);