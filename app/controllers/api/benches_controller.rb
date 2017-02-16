class Api::BenchesController < ApplicationController
  def index
    benches = bounds ? Bench.in_bounds(bounds) : Bench.all
    benches = min ? benches.select {|bench| bench.seating >= min} : benches
    benches = max ? benches.select {|bench| bench.seating <= max} : benches
    @benches = benches
    render :index
  end

  def create
    @bench = Bench.create!(bench_params)
      render :show
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating, :max_seating, :min_seating)
  end

  def bounds
    params[:bounds]
  end

  def min
    params[:min_seating]
  end

  def max
    params[:max_seating]
  end
end
