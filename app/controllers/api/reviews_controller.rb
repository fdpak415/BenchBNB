class Api::BenchesController < ApplicationController

  def create
    @review = Review.create!(review_params)
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :bench_id)
  end
end
