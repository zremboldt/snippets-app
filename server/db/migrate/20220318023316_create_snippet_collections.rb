class CreateSnippetCollections < ActiveRecord::Migration[7.0]
  def change
    create_table :snippet_collections do |t|
      t.references :snippet, null: false, foreign_key: true
      t.references :collection, null: false, foreign_key: true

      t.timestamps
    end
  end
end
