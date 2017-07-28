class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)

    if @like.save
      render @like
    else
      render json: ["Failed to post like"], status: 401
    end
  end

  def destroy
    @like = Like.find_by(like_params)

    if @like.destroy
      render @like
    else
      render json: ["Failed to destroy like"], status: 401
    end
  end

  private

  def like_params
    params.require(:like).permit(:likable_type, :likable_id, :liker_id)
  end
end
