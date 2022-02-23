class AddImageToSnippets < ActiveRecord::Migration[7.0]
  def change
    add_column :snippets, :image, :attachment
  end
end
