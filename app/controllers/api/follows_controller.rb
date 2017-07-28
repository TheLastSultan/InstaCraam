class Api::FollowsController < ApplicationController
  def create
    @user = User.find(follow_params[:followed_id])

    @follow = Follow.new(followed_id: follow_params[:followed_id])
    @follow.follower_id = current_user.id
    
    if @follow.save
      render 'api/follows/show'
    else
      render json: @follow.errors.full_messages, status: 422
    end

  end

  def destroy

    @follow = Follow.find_by(
              follower_id: current_user.id,
              followed_id: follow_params[:followed_id])


    if @follow.destroy
      render 'api/follows/show'
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followed_id)
  end
end
