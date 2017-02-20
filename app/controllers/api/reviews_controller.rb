class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.where(listing_id: params[:listingId])
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    if @review.save
      @reviews = Review.where(listing_id: @review.listing_id)
      render :index
    else
      render json: { base: ["Please fill out all the blank fields"] }, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: {base: ["Sorry something went wrong, please try again"]}
    end
  end

  def review_params
    params.require(:review).permit(
      :accuracy_rating,
      :communication_rating,
      :cleanliness_rating,
      :location_rating,
      :checkin_rating,
      :value_rating,
      :description,
      :review_helpfulness,
      :listing_id,
      :author_id
    )
  end
end
