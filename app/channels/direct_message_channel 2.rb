class DirectMessageChannel < ApplicationCable::Channel

  def subscribed
      @dmchannel = DmChannel.find_by(id: params[:id])
      stream_for @dmchannel
  end

  def receive(data)
      DirectMessageChannel.broadcast_to(@dmchannel, message: data['message'])
  end

end