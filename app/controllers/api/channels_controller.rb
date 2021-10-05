class Api::ChannelsController < ApplicationController
  def create
    current_server = current_user.servers.find_by(id: params[:server_id])
    @channel = curr_server.channels.new(channel_params)

    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end

  end

  def show
  end

  def index
  end

  def update
  end

  def destroy
  end

  private

  def channel_params
    params.require(:channel).permit(:name)
  end
end
