class RemoveTitleAndDescriptionFromVideo < ActiveRecord::Migration[7.0]
  def change
    remove_column :videos, :title, :string
    remove_column :videos, :desc, :string
  end
end
