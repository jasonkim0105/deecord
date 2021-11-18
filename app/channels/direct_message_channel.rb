class DirectMessageChannel < ApplicationCable::Channel

  def subscribed
      @dmchannel = DmChannel.find_by(id: params[:id])
      stream_for @dmchannel
  end

  def receive(data)
      DirectMessageChannel.broadcast_to(@dmchannel, message: data['message'])
  end

end
# class DirectMessageChannel < ApplicationCable::Channel

#   def subscribed
#       @dmchannel = DmChannel.find_by(id: params[:id])
#       stream_for @dmchannel
#   end

#   def speak(data)
#     message = Message.create(user_id: data["user_id"], body: data["body"])
#      socket = {
#         id: message.id,
#         channel_id: message.channel_id,
#         user_id: message.user_id,
#         body: message.body,
#         created_at: message.created_at,
#         username: message.user.username,
#         user: message.user
#      }
#     DirectMessageChannel.broadcast_to(@dmchannel, socket)
#    end

# end