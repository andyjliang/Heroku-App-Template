import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

// Import Styles
// import './styles/main.css';
// import './styles/clean-blog.css';


// let history = createBrowserHistory();

ReactDOM.render(<Router history={createBrowserHistory()}>{routes}</Router>, document.getElementById('root'));