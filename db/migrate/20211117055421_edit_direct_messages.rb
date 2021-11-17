class EditDirectMessages < ActiveRecord::Migration[5.2]
  def change
    add_timestamps(:direct_messages)
  end
end
