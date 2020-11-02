// React
import React from 'react';
import './App.css';

// Redux
import { connect } from "react-redux"

// Components
import SearchGarments from './components/searchGarments'
import ListGarments from './components/listGarments'
import loadingSpinner from './components/loading.svg'

import { fetchGarments } from './actions/garments';

class App extends React.Component {
  async componentDidMount() {
    // Fetch tasks from api
    this.props.dispatch(fetchGarments());
    const garms = await fetch('/api/garments/').then((resp) => resp.json())
    this.props.dispatch(fetchGarments(garms))
  }

  render() {
    const loading = this.props.loading;

    return (
        <div className="App">
          <header className="App-header">
            <img src="logo.png" className="App-logo" alt="logo" />
            <div id="taskViewer">
              <SearchGarments />
              { loading
                ? <img src={loadingSpinner} alt="Loading spinner" />
                : <ListGarments />
              }
            </div>
          </header>
        </div>
    );

  }
}

export default connect(state => state)(App);
