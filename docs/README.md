# CareBnB

careBnB production link: http://www.carebnb.tech/

## Minimum Viable Product

careBnB is a web application inspired by airBnB built using Ruby on Rails and React/Redux. Even though the main idea is same as Airbnb, the only difference is that a portion(decided by the host) of the rent will go towards charity(decided by the guest). By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

 - [ ] Hosting on Heroku
 - [ ] New account creation, login, and guest/demo login
 - [ ] Apartment/Housing listings creation
 - [ ] Booking an apartment/housing
 - [ ] Google-map Integration
 - [ ] Production README sample

## Design Docs

* [Wireframes](/docs/wireFrames)
* [React Components Hierarchy](/docs/component-hierarchy.md)
* [Sample State](/docs/sample-state.md)
* [Redux Structure](/docs/redux-structure.md)
* [DB Schema](/docs/schema.md)

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Listing Model, API, and components (2 days)

**Objective:** Listing belongs to a host(user) and can be created, and destroyed through the API.

### Phase 3: Listings Search (2 Days)

**Objective:** Users can search listings based on location. Search process incorporates google maps API.

###Phase 4: Bookings (1 day)

**Objective:** Booking belongs to a listing and a user that can be created, read, edited and destroyed through the API.

### Phase 4: Reviews (1 day)

**Objective:** Review belongs to a listing and has a userId that can be created, read, edited and destroyed through the API.

### Phase 5: - More CSS!(1 day)

**Objective:** Add more css to make page look prettier

### Bonus Features (TBD)

- [ ] Messaging
