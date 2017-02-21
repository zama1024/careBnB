class Api::BookingsController < ApplicationController
  def index
    @bookings = current_user.bookings
    render :index
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    Booking.find(params[:id]).destroy
    @bookings = Booking.all
    render :index
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :listing_id, :num_guests, :charity_org)
  end

end
