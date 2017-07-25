import React from 'react';
import { Link } from 'react-router-dom';

import GridContainer from '../grid/grid_container';
// import GridItem from '../grid/grid_item';

class Explore extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllImages();
  }

  componentWillUnMount() {
    this.props.images.data = [];
  }

  render() {
    const { images, profile, currentUser } = this.props;
    console.log(images);
    const loaded = (
      <div id="explore-page">
        <figure className="map-temp">
          &nbsp;
        </figure>
        <div className="main-content-container">
          <section className="map-section-container">
            <div className="grid-container">
              {
                images.map( (el, i) => (

                  <GridContainer
                      image={el}
                      currentUser={currentUser}
                      id={el.id}
                      key={el.id}
                      />
                ))
              }
            </div>
          </section>
        </div>
      </div>
    );

    return loaded;
  }

}

export default Explore;
//
// <GridItem
//   key={i}
//   image={el}
//   profile={profile}
//   currentUser={currentUser} />
