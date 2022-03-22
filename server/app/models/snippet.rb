class Snippet < ApplicationRecord
  has_one_attached :image
  belongs_to :collection, optional: true
end
