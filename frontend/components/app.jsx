import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import Footer from './footer/footer';

const App = ({ children }) => {
  return(
    <div>
      <NavBarContainer />
      { children }
      <Footer className="footer"/>
    </div>
  );
};

export default App;
