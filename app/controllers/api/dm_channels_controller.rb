class Api::DmChannelsController < ApplicationController

  def index
    @dmChannels = DmChannel.all
    @user_id = params[:userId].to_i
    render :index
  end

  def create
    @dmChannel = DmChannel.new(dm_channel_params)
    if @dmChannel.save
      render 'api/dm_channels/show'
    else
      render json: @dmChannel.errors.full_messages, status: 422
    end
  end

  private

  def dm_channel_params
    params.require(:dm_channel).permit(:user1_id, :user2_id)
  end
end
