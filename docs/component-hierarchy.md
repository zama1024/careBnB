## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
  + cities

**Navbar/HeaderContainer**
  - Navbar

**ListingsSearchResultsContainer**
 - ListingsSearchResults

**ListingShowContainer**
  - ListingShow

**SearchFormContainer**
 - SearchForm

**BookingFormContainer**
  - BookingForm

**BookingContainer**
  - Booking

**FooterContainer**
  - Footer



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home" | "SearchFormContainer" |
| "/home" | "FooterContainer" |
| "/home" | "HeaderContainer" |
| "/home/listings" | "ListingsSearchResultsContainer" |
| "/home/listings/:listingId/" | "ListingShowContainer" |
| "/home/listings/:listingId/" | "BookingFormContainer" |
| "/home/bookings" | "BookingContainer" |
