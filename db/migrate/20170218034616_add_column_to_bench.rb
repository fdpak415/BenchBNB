class AddColumnToBench < ActiveRecord::Migration[5.0]
  def change
    add_column :benches, :image_url, :string
  end
end
