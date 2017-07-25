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
    id = params[:user_id].to_i

    if id.zero?
      @images = Image.all
    else
      @images = Image.all.select { |img| img.user_id == id }
    end

    # @images = Image.where(user_id: params[:user_id])
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
    params.require(:image).permit(:image_url, :user_id, :caption, :location)
  end
end
