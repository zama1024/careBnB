import React from 'react';
import NavBarContainer from './navbar/navbar_container';

const App = ({ children }) => {
  debugger
  return(
    <div>
      <NavBarContainer />
      <div className="vidcontainer">
        <video className="vid" autoPlay loop>
          <source src={ window.videomp4 } type="video/mp4" />
        </video>
      </div>
      { children }
    </div>
  );
}

export default App;
