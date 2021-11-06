class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
  end

  def speak(data)

    message = Message.create(body: data['body'], user_id: data['user_id'], channel_id: data['channel_id'])
    socket = { id: message.id, channel_id: message.channel_id, body: message.body, user_id: message.user_id, created_at: message.created_at}
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
