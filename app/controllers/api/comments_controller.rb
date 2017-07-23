class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render 'api/comments/show'
    else
      render json: ["Failed to post comment"], status: 401
    end
  end

  def index
    id = params[:image_id].to_i
    if id.zero?
      @comments = Comment.all
    else
      @comments = Comment.all.select { |comment| comment.post_id == id }
    end
  end

  def destroy
  end

  def show
  end

  private

  def comment_params
    params.require(:comment).permits(:body, :author_id, :image_id)
  end
end