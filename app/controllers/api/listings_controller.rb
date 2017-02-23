class Api::ListingsController < ApplicationController
  def index
    if params[:searchParams]
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
    if @listing.save
      render :show
    else
      render json: { base: ["Invalid entry, please try again"] }, status: 422
    end
  end

  def listing_params
    params.require(:listing).permit(
      :host_id,
      :title,
      :lat,
      :lng,
      :description,
      :daily_rate,
      :listing_photo_url,
      :address,
      :city,
      :donation_percentage
    )
  end
end
