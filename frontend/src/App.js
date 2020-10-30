// React
import React from 'react';
import './App.css';

// Redux
import { connect } from "react-redux"

// Components
import SearchGarments from './components/searchGarments'
import ListGarments from './components/listGarments'

import { fetchGarments } from './actions/todo';

class App extends React.Component {
  async componentDidMount() {
    // Fetch tasks from api
    this.props.dispatch(fetchGarments());
    const garms = await fetch('/api/garments/').then((resp) => resp.json())
    this.props.dispatch(fetchGarments(garms))
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src="logo.png" className="App-logo" alt="logo" />
            <div id="taskViewer">
              <SearchGarments />
              <ListGarments />
            </div>
          </header>
        </div>
    );

  }
}

export default connect(state => state)(App);
