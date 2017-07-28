import React from 'react';
import { Link } from 'react-router-dom';

import GridContainer from '../grid/grid_container';

class Explore extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllImages();
  }

  componentWillUnMount() {
  }

  render() {
    const { images, profile, currentUser } = this.props;
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
