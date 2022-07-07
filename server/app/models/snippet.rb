class Snippet < ApplicationRecord
  has_many :labels, dependent: :destroy
  has_one_attached :image
  belongs_to :collection, optional: true

  validate :validate_snippet

  def validate_snippet
    if title.blank? && note.blank? && !image.attached?
      errors.add(:base, "title, note, or image must be present")
    end
  end
end
