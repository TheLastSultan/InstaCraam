import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class GridItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image } = this.props,
          avatarStyle = {backgroundImage: `url(${image.avatarUrl})`};
    return (
      <figure className="grid-item">
        <img src={image.imgUrl} />
      </figure>
    );
  }
}

export default GridItem;


// <article className="grid-item">
//   <figure className="item-image-container">
//     <img src={image.imgUrl} />
//   </figure>
// </article>
