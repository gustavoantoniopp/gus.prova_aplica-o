import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ErrorPage from './pages/ErrorPage';
import NewsPage from './pages/NewsPage';

function Routes() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/Newsletter" component={NewsPage} />
                    <Route path="*" component={ErrorPage} />
                </Switch>
            </div>
        </Router>
    );
}
export default Routes;