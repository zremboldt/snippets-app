class RemoveCollectionFromSnippets < ActiveRecord::Migration[7.0]
  def change
    remove_reference :snippets, :collection, null: false, foreign_key: true
  end
end
