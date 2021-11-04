class ChatChannel < ApplicationCable::Channel
  def subscribed
    @channel = Channel.find_by(id: params[:id])
     stream_for @channel
  end

  def speak(data)
    #  message = Message.create(data.slice('channel_id', 'body', 'user', 'user_id'))
    message = Message.create(user_id: data["user_id"], channel_id: data["channel_id"], body: data["body"])
     socket = {
        id: message.id,
        channel_id: message.channel_id,
        user_id: message.user_id,
        body: message.body,
        created_at: message.created_at,
     }
    @channel = Channel.find_by(id: params[:id])
     ChatChannel.broadcast_to(@channel, socket)
   end

  def unsubscribed
     # Any cleanup needed when channel is unsubscribed
  end
end