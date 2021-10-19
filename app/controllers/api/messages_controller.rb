class Api::MessagesController < ApplicationController

  def index
    @messages = Message.all
    @channel_id = params[:channelId]
    render 'api/messages/index'
  end

  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    if @message.save
        render 'api/messages/show'
    else
      render json: @message.errors.full_messages, status: 402
    end
  end


  private
  def message_params
    params.require(:mesage).permit(:body, :user_id, :server_id, :channel_id)
  end



end
