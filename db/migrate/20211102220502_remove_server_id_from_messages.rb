class RemoveServerIdFromMessages < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :server_id
  end
end
