class Label < ApplicationRecord
  belongs_to :snippet, optional: true
end
