import * as React from 'react';
import App from '../containers/app';
import AboutPage from '../containers/about-page';
import CounterPage from '../containers/counter-page';
const {IndexRoute, Route} = require('react-router');


export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ CounterPage }/>
        <Route path="about" component={ AboutPage }/>
    </Route>
);
