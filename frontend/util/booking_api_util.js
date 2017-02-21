export function fetchBookings() {
  return $.ajax ({
    method: "GET",
    url: "/api/bookings",
  });
}

export function createBooking(booking) {
  return $.ajax({
    method: "POST",
    url: "/api/bookings",
    data: { booking },
  });
}

export function deleteBooking(id) {
  return $.ajax({
    method: "DELETE",
    url: `/api/bookings/${id}`,
  });
}
