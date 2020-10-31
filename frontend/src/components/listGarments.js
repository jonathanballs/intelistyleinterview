// React
import React from 'react';

// Redux
import { connect } from 'react-redux'
import Masonry from 'react-masonry-component'

class ListGarments extends React.Component {
  render() {
    const garments = this.props.garments.map(g => {
      return (<div class="garmentItem">
        <img src={g.images[0].url}/>
      </div>)
    });

    return (<Masonry>
      { garments }
    </Masonry>)
  }
}

let mapState = state => {
  return state;
}

export default connect(mapState)(ListGarments);
