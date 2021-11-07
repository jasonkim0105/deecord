class ChatChannel < ApplicationCable::Channel
    def subscribed
      @chat_channel = Channel.find(params[:id])

      stream_for @chat_channel
    end

    def speak(data)
    #   message = @chat_channel.messages.new(body: data['message']);
      message = Message.new(body: data['message'])
      message.user_id = current_user.id

      if message.save!
        socket = { message: message.body }
        ChatChannel.broadcast_to(@chat_channel, socket)
      end
    end

    def unsubscribed; end
  end