// React
import React from 'react';

// Redux
import { connect } from "react-redux"
import { fetchGarments } from "../actions/garments"

class SearchGarments extends React.Component {
  render() {
    let input = '';

    return (
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }

          const query = input.value.trim();

          this.props.dispatch(fetchGarments());
          const garms = await fetch('/api/garments/search?q=' + encodeURIComponent(query))
            .then((resp) => resp.json())
          this.props.dispatch(fetchGarments(garms))
        }}
      >
        <input ref={node => (input = node)} type="text" id="newTaskInput" name="newTask" />
      </form>
    );
  }
}

let mapState = state => {
  return state;
}

export default connect(mapState)(SearchGarments);
