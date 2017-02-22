class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.find_by_filters(
       params[:filters][:bounds],
       params[:filters][:max_price],
       params[:filters][:min_price],
       params[:filters][:start_date],
       params[:filters][:end_date]
       )
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

  def bounds
    params[:bounds]
  end
end
