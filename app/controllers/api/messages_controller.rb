class Api::MessagesController < ApplicationController

  # def index
  # end

  def index
      @messages = Message.where(channel_id: params[:channel_id])
    render 'api/messages/index'
  end

  def show
    @message = Message.find_by_id(params[:id])

    if @message
      render :show
    else
      render json: "No message found.", status: 404
    end

  end


  private
  def message_params
    params.require(:message).permit(:body, :user_id, :channel_id)
  end



end
