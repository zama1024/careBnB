class Api::ListingsController < ApplicationController
  def index
    if params[:currentUser]
      @listings = current_user.listings
    elsif params[:searchParams]
      @listings = Listing.find_by_params(params[:searchParams])
      @map_center = Geocoder.coordinates(params[:searchParams][:address]) if params[:searchParams][:address] != ""
    else
      @listings = Listing.all
    end
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
    @listing = Listing.new(listing_params)
    @listing.lat, @listing.lng =  Geocoder.coordinates(listing_params[:city])
    if @listing.save
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def listing_params
    params.require(:listing).permit(
      :host_id,
      :title,
      :description,
      :daily_rate,
      :listing_photo_url,
      :address,
      :city,
      :donation_percentage
    )
  end
end
