unless @messages.empty?
  json.messages do
      @messages.each do |message|
          json.set! message.id do
              json.extract! message, :id, :body, :user_id, :created_at, :updated_at
          end
      end
  end

  userArr = []

  json.users do
      @messages.each do |message|
      unless userArr.include?(message.user_id)
          json.set! message.user_id do
              json.partial! "api/users/user", user: message.user
              userArr.push(message.user_id)
          end
      end
      end
  end

  json.channels do
      json.set! @messages.first.channel_id do
          json.partial! "api/channels/channel", channel: @messages.first.channel
      end
  end
end