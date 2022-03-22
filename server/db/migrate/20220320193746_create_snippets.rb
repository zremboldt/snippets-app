class CreateSnippets < ActiveRecord::Migration[7.0]
  def change
    create_table :snippets do |t|
      t.string :title
      t.text :note
      t.string :link
      t.integer :image_width
      t.integer :image_height

      t.timestamps
    end
  end
end
