class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
    @listing = Listing.create!(listing_params)
    render :show
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
