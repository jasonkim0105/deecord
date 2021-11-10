class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    # @channel.owner_id === current_user.id
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end

  end

  def show
    @channel = Channel.find_by(id: params[:id])

    if @channel
      render :show
    else
      render json: ['Channel does not exist'], status: 404
    end
  end

  def index
    server = Server.find_by(id: params[:server_id])
        @channels = server.channels
        render :index
  end

  def update
    @channel = Channel.find_by(id: params[:id])
        if @channel.update(channel_params)
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end

  end

  # def destroy
  #   puts "___"
  #   puts params
  #   puts @channel
  #   @channel = Channel.find_by(id: params[:id])
  #       if @channel
  #           @channel.destroy
  #           render :show
  #       else
  #           render json: ["This channel does not exist"], status: 404
  #       end
  # end
  def destroy
    @channel = Channel.find_by(id: params[:id])
    @channel.destroy
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :server_id)
  end
end
