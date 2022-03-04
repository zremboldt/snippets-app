class RemoveImageColumnFromDb < ActiveRecord::Migration[7.0]
  def change
    remove_column :snippets, :image, :attachment
  end
end
