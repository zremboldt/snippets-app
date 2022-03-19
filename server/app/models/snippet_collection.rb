class SnippetCollection < ApplicationRecord
  belongs_to :snippet
  belongs_to :collection
end
