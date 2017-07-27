class Api::ImagesController < ApplicationController
  def create
    @image = Image.new(image_params)

    if @image.save
      @user = @image.poster
      render 'api/users/show'
    else
      render json: ["Failed to upload image"], status: 401
    end
  end

  def index
    id = params[:user_id].to_i

    if id.zero?
      @images = Image.includes(:likers, :poster, :comments).limit(12).order("RANDOM()")
    else
      @images = Image.includes(:likers, :poster, :comments).where(user_id: params[:user_id])
    end

  end

  def update; end

  def destroy
    @image = Image.find(params[:id])

    if @image.destroy
      render @image
    else
      render json: ["Failed to destroy image"], status: 401
    end
  end

  def show
    @image = Image.find(params[:id])
  end

  private

  def image_params
    params.require(:image).permit(:img_url, :user_id, :caption, :location, :image)
  end
end
