class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render @comment
    else
      render json: ["Failed to post comment"], status: 401
    end
  end

  def index
    id = params[:image_id].to_i
    if id.zero?
      @comments = Comment.all
    else
      @comments = Comment.where(post_id: id)
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.destroy
      render @comment
    else
      render json: ["Failed to destroy comment"], status: 401
    end
  end



  private

  def comment_params
    params.require(:comment).permit(:body, :author_id, :post_id)
  end
end
