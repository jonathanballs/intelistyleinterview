// React
import React from 'react';

// Redux
import { connect } from "react-redux"

class ListGarments extends React.Component {
  render() {
    let { garments } = this.props;

    return (
      <ul id="taskList">
        {garments.map(g => {
          return <li key={g._id}>
            {g.product_title}
          </li>
        })}
      </ul>
    );

  }
}

let mapState = state => {
  return state;
}

export default connect(mapState)(ListGarments);
