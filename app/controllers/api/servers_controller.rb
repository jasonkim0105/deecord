class Api::ServersController < ApplicationController

  before_action :require_logged_in

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server.save
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def index
    @servers = current_user.servers
    render 'api/servers/index'
  end

  def show
    @server = Server.find(params[:id])
    render 'api/servers/show'
  end

  def update
    @server = Server.find_by(id: params[:id])
    if @server.update(server_params)
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find_by(id: params[:id])
    @server.destroy
    render 'api/servers/show'
  end

  private

  def server_params
    params.require(:server).permit(:name, :owner_id)
  end

end
