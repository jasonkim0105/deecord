@dmChannels.each do |dmChannel|
  if dmChannel.user1_id == @user_id || dmChannel.user2_id == @user_id
      json.set! dmChannel.id do
          json.extract! dmChannel, :id, :user1_id, :user2_id, :user1, :user2, :messages
      end
  end
end