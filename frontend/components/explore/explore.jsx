import React from 'react';
import { Link } from 'react-router-dom';

import GridItem from '../grid/grid_item';

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
    const { images } = this.props;

    const notLoaded = (
      <div className="main-content-container">
        <div className="center-text">
          <h2 className="loading">Loading...</h2>
        </div>
      </div>
    );

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
                  <GridItem
                    key={i}
                    image={el} />
                ))
              }
            </div>
          </section>
        </div>
      </div>
    );

    // return (profile.id) ? loaded : notLoaded;
    return loaded;
  }

}

export default Explore;
