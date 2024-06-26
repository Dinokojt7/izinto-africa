import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Terms from './components/Terms'; 


function App() {
  return (
    <Router>
      <Navbar />
      <Switch> 
        <Route path="/">
          <Home />
        </Route> 
        <Route path="/terms">
          <Terms />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
