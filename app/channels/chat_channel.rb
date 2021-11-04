class ChatChannel < ApplicationCable::Channel
  # def subscribed
  #   # stream_from "some_channel"
  #   #stream_for channelname
  # end

  # def unsubscribed
  #   # Any cleanup needed when channel is unsubscribed
  # end
  def subscribed
    @chat_channel = Channel.find_by(id: params[:id])

    stream_for @chat_channel
  end

  def speak(data)
    # message = @chat_channel.messages.new(body: data['message']);
    # message.user_id = current_user.id

    # if message.save!
    #   socket = { message: message.body }
    #   ChatChannel.broadcast_to(@chat_channel, socket)
    # end
    message = Message.create(user_id: data["user_id"], channel_id: data["channel_id"], body: data["body"])
    @chat_channel = Channel.find_by(id: message.channel_id);
    ChatChannel.broadcast_to(@chat_channel, message)
  end

  def unsubscribed
  end
end
