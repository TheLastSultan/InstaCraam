import React from 'react';
import { BarLoader } from 'react-spinners';

class Loading extends React.Component {

  render() {
    return (
      <div className="main-content-container">
        <div className="center-text">
          <h2 className="loading">loading</h2>
          <BarLoader
            color={'#262626'}
            loading={this.props.loading}
          />
        </div>
      </div>
    );
  }

}

export default Loading;
