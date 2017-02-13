# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
  - Create a user
- `PATCH /api/users/:id`
  - Update user profile
- `DELETE /api/users/:id`
  - Delete user account

### Session

- `POST /api/session`
  - Log In
- `DELETE /api/session`
  - Log Out

### Listings

- `GET /api/listings`
  - Listings index/search
- `POST /api/listings`
  - User/Host can create a listing
- `GET /api/listings/:id`
  - Get information about a particular listing
- `PATCH /api/listings/:id`
  - Update listing information
- `DELETE /api/listings/:id`
  - Delete listing

### Bookings

- `GET /api/listings/:id/bookings`
  - Show all bookings for a particular listing
- `POST /api/lisitngs/:id/bookings`
  - Create a booking for a particular listing
- `GET /api/lisitngs/:id/booking/:id`
  - Show a particular booking for a particular listing
- `PATCH /api/lisitngs/:id/booking/:id`
  - Update booking information(Approve/Deny) for a particular listing
- `DELETE /api/lisitngs/:id/bookings/:id`
  - User can cancel a booking
