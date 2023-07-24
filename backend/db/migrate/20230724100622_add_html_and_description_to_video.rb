class AddHtmlAndDescriptionToVideo < ActiveRecord::Migration[7.0]
  def change
    add_column :videos, :html_text, :string
    add_column :videos, :desc, :string
  end
end
