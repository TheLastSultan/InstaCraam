class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_creds(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      render 'api/users/show'
    else
      render json: ['No user logged in'], status: 404
    end
  end
end
