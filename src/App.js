import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import RecommendedVideos from './components/RecommendedVideos';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          {/* ':' is a wild card which means any value */}
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <h1>Search Page</h1>
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
