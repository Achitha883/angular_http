import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import HOC from './HOC';
import HOCProps from './HOCProps';
import ServiceDemo from './ServiceDemo';
import Forms from './Forms';

import App from './App';

ReactDOM.render(
   
    <Router>
        <Forms />
        <div>
        <Route path="" compenent={ App }> </Route>
        <Route path="/HOC" compenent={ HOC }></Route>

        <Route path="/HOCProps" compenent={ HOCProps }></Route>
        <Route path="/ServiceDemo" compenent={ ServiceDemo }></Route>
        </div>
        
    </Router>
   
    ,document.getElementById('root'));

serviceWorker.unregister();
