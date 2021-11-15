class CreateDirectMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :direct_messages do |t|
      t.text :body,  null: false
      t.integer :author_id
      t.integer :dm_channel_id
    end

    add_index :direct_messages, :dm_channel_id
  end
end
