class CreateSnippets < ActiveRecord::Migration[7.0]
  def change
    create_table :snippets do |t|
      t.string :title
      t.string :link
      t.text :note

      t.timestamps
    end
  end
end
