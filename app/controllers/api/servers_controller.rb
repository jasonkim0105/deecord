class Api::ServersController < ApplicationController

  before_action :require_logged_in

  def create
    @server = Server.new(server_params)
    if @server.save
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def index
    @servers = current_user.
  end

  def show
  end

  def update

  end

  def destroy
  end

  private

  def server_params
    params.require(:server).permit(:server_name, :host_id)
  end

end
