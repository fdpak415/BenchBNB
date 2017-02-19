class Review < ApplicationRecord
  validates :rating, inclusion: {in: (1..5)}
  validates :bench_id, presence: true

  belongs_to :bench
end
