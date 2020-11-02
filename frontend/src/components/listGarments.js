// React
import React from 'react';

// Redux
import { connect } from 'react-redux'
import Masonry from 'react-masonry-component'

class ListGarments extends React.Component {
  render() {
    const garments = this.props.garments.map(g => {
      return (<div class="garmentItem">
        <a href={g.url}>
          <img src={!!g.images.length ? g.images[0].url : ""} alt={g.product_title}/>
        </a>
      </div>)
    });

    return (<Masonry
      ref={function (c) { this.masonry = this.masonry || c.masonry; }.bind(this)}
      isAnimated={ true }>
      {garments}
    </Masonry>)
  }
}

let mapState = state => {
  return state;
}

export default connect(mapState)(ListGarments);
