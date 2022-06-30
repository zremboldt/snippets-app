class CreateLabels < ActiveRecord::Migration[7.0]
  def change
    create_table :labels do |t|
      t.string :name
      t.references :snippet, index: true, null: true, foreign_key: true
      
      t.timestamps
    end
  end
end
