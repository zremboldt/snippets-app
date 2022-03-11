class AddImageDimensionsToSnippets < ActiveRecord::Migration[7.0]
  def change
    add_column :snippets, :image_width, :integer
    add_column :snippets, :image_height, :integer
  end
end
