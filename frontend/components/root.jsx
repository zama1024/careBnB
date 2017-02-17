import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import ListingFormContainer from './listings/listing_form_container';
import NavBarContainer from './navbar/navbar_container';
import HomeContainer from './home/home_container';
import ListingShowContainer from './listings/listing_show_container';

const _ensureLoggedIn = (store) => {
   const currentUser = store.getState().session.currentUser;
   if (!currentUser) {
     replace('/login');
   }
 };


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={HomeContainer} />
        <Route path="listings/new" component={ ListingFormContainer} />
        <Route path="listings/:listingId" component={ ListingShowContainer} />
      </Route>
    </Router>
  </Provider>
);
export default Root
