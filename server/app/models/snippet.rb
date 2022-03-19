class Snippet < ApplicationRecord
  has_one_attached :image
  has_many :snippet_collections
  has_many :collections, through: :snippet_collections
end
