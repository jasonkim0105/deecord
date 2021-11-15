class CreateDmChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_channels do |t|
      t.integer :user1_id, null: false
      t.integer :user2_id, null: false
      t.timestamps
    end

    add_index :dm_channels, :user1_id
    add_index :dm_channels, :user2_id
  end
end
