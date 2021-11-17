class Api::DirectMessagesController < ApplicationController
  def index
    @dms = DirectMessage.all
    @dmChannel_id = params[:dmChannelId].to_i
    render 'api/direct_messages/index'
  end

  def create
    @dm = DirectMessage.new(direct_message_params)
    if @dm.save
      render 'api/direct_messages/show'
    end
  end

  private

  def direct_message_params
    params.require(:message).permit(:body, :dm_channel_id, :author_id)
  end

end
