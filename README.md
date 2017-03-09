# CareBNB

CareBNB is a clone of [Airbnb](http://www.airbnb.com) created by Farshid Zaman. It has the same features as Airbnb where a user can book homes/rooms for a given number of days in any city. One distinctive feature that CareBNB has is that a certain percentage of the rent(chosen by the host) will go towards charity. Take a look at it live at [http://care-bnb.herokuapp.com](http://www.care-bnb.herokuapp.com). Once signed up, a user can log in and create listings or book homes for their next vacation.

[Live Here][live]

[live]: http://www.carebnb.site

![home page](./app/assets/images/farshid-carebnb.gif)

## Features

* Authentication
  * Session is authenticated in the backend. All queries return data that corresponds to the proper user.
  * User can sign up and log in from any page in the app.
* Create Listing
  * User can create listings to rent out their rooms/apartments.
* Book Listings
  * User can book rooms/apartments in different cities.
* Reviews on listings
  * User can post reviews for different listings.
* Search Listings
  * User can search for rooms/apartments according to their needs.
* Google map Integration
  * Search process includes google map interaction for a better user experience

## Code Guide

If you'd like to take a closer look at the code behind the CareBNB App, the best folders to look in are:

* [care_bnb.jsx](./frontend/care_bnb.jsx)
* [React components](./frontend/components)
  * [App](./frontend/components/app.jsx)
* [Rails controllers](./app/controllers/api)
* [Flux Stores](./frontend/stores)
* [Api Util](./frontend/util/api_util.js)
* [DB Schema](./db/schema.rb)
* [Rails Routes](./config/routes.rb)

## Languages, Frameworks, Libraries, Etc.

* Ruby on Rails
* Javascript
* PostgreSQL
* React
* Redux
* jquery
* Google Map API
* Gems
  * Paperclip
  * Geocoder
  * Jbuilder
  * BCrypt

## Screenshots

Listings Page

![Listing show page](./app/assets/images/farshid-carebnb-listing.gif)


Search Page
![search page](./app/assets/images/searchpage.png)


Login Page
![login page](./app/assets/images/loginpage.png)


Host Sign Up Page
![SignUp page](./app/assets/images/createlisting.png)
