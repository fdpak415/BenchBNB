class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
      if @review.save
        render :show
      else
        render json: @review, status: :unprocessable_entity
      end
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :bench_id)
  end
end
