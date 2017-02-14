import React from 'react';
import NavBarContainer from './navbar/navbar_container'

const App = ({ children }) => (
  <div>
    <NavBarContainer />
    <h1>Care BnB</h1>
    { children }
  </div>
);

export default App;
