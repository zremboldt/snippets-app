class AddCollectionToSnippets < ActiveRecord::Migration[7.0]
  def change
    add_reference :snippets, :collection, null: true, foreign_key: true
  end
end
