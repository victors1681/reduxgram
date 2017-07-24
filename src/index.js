import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App'

import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

//Routers Dependencies
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import { Provider } from 'react-redux';
import store, { history} from './store';

import './semantic/dist/semantic.min.css';
import './App.css'

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)


ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
