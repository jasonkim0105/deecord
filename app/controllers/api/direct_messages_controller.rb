class Api::DirectMessagesController < ApplicationController
  def index
    @dms = DirectMessage.all
    @dmChannel_id = params[:dmChannelId].to_i
    render :index
  end

  def create
    @dm = DirectMessage.new(direct_message_params)
    if @dm.save
      render :show
    end
  end

  private

  def direct_message_params
    params.require(:direct_message).permit(:body, :dm_channel_id)
  end

end
