import React from 'react';
import { Link, withRouter } from 'react-router';

class Home extends React.Component {

  render() {
    return(
      <div className="vidcontainer">
      <video className="vid" autoPlay loop>
      <source src={ window.videomp4 } type="video/mp4" />
      </video>
      </div>
    )
  }
}

export default withRouter(Home);
