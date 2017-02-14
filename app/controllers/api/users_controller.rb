class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      redirect_to '/'
    else
      render json: { base: ["invalid credentials"] }, status: 422
    end
  end

end
