class Api::ImagesController < ApplicationController
  def create
    @image = Image.new(image_params)

    if @image.save
      render 'api/users/show'
    else
      render json: ["Failed to upload image"], status: 401
    end
  end

  def index
  end

  def update
  end

  def destroy
  end

  def show
  end

  private

  def image_params
    params.require(:image).permit(:image_url, :user_id, :caption, :location)
  end
end
