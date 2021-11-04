class Api::MessagesController < ApplicationController

  # def index
  #   @messages = Message.where(channel_id: params[:channel_id])
  # end

  def index
    @messages = Message.all.where('channel_id = ?', params[:channel_id]).includes(:user)
    # @channel_id = params[:channelId]
    render 'api/messages/index'
  end

  def show
    @post = Post.find_by_id(params[:id])

    if @post
      render :show
    else
      render json: "No post found,", status: 404
    end

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
    params.require(:message).permit(:body, :user_id, :channel_id)
  end



end
