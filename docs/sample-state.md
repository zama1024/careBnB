```js
{
  currentUser: {
    id: 1,
    username: "guest",
    fname: "guest",
    lname: "recruiter"
  },

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createListings: {errors: ["body can't be blank"]},
    createBookings: {errors: ["body can't be blank"]}
  },

  listings: {
    1: {
      listingId: 1,
      hostId: 1,
      title: "Great Apartment in the center of NYC",
      description: "Close to Times Square",
      lat: 0,
      lng: 0,
      daily_rate: 150,
      address: "159 W25th Street",
      city: "NYC",
      state: "NYC",
      country: "US"
      charityOrgList = ["a","b","c","d"]
      donationPercentage = 30;
    }
  },

  bookings: {
    1: {
      listingId: 1,
      userId: 1,
      hostId: 1,
      status: "PENDING",
      startDate: { month: "Nov", day: 2, year: 2016 },
      endDate: { month: "Nov", day: 2, year: 2016 }
      chosenCharityOrg = "Blind care charity organization NYC"
    }
  },

  reviews: {
    1: {
      authorId: 1,
      listingId: 1,
      rating: 5,
      body: "Awesome Listing!",
      cleanliness_rating: 4
    }
  },
}
```
