import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';

// Import Styles
// import './styles/main.css';
// import './styles/clean-blog.css';


// let history = createBrowserHistory();

ReactDOM.render(<Router history={createBrowserHistory()}><App /></Router>, document.getElementById('root'));