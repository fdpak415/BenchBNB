json.extract! bench, :id, :description, :lat, :lng, :seating, :image_url, :averageRating

json.reviews do
  json.partial! 'api/reviews/review', collection: bench.reviews, as: :review
end
