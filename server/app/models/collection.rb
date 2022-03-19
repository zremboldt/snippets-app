class Collection < ApplicationRecord
  has_many :snippet_collections
  has_many :snippets, through: :snippet_collections
end
