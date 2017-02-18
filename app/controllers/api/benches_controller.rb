class Api::BenchesController < ApplicationController
  def index
    benches = bounds ? Bench.in_bounds(bounds) : Bench.all
      if (params[:minSeating] && params[:maxSeating])
        benches = benches.where(seating: seating_range)
      end
    @benches = benches
    render :index
  end

  def create
    @bench = Bench.create!(bench_params)
      render :show
  end

  def show
    @bench = Bench.find_by_id(params[:id])
    render :show
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating, :max_seating, :min_seating)
  end

  def bounds
    params[:bounds]
  end

  def seating_range
    (params[:minSeating]..params[:maxSeating])
  end
end
