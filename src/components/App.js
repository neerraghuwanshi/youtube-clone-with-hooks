import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Default from './Default';

const App = () => {
        
    return( 
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route component={Default}/>
            </Switch>
        </Router>
    )
}

export default App