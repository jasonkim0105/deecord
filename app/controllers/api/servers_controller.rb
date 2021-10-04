class Api::ServersController < ApplicationController

  before_action :require_logged_in

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server.save
      current_user.servers << @server
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
    @server = current_user.owned_servers.find_by(id: params[:id])

    if @server
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = current_user.owned_servers.find_by(id: params[:id])

    @server.destroy
    render 'api/servers/show'
  end

  def join
    @server = Server.find_by(invite_code: params[:inviteCode])

    if @server && !current_user.servers.include?(@server)
      current_user.servers << @server
      render 'api/servers/show'
    end
  end

  def leave
    @server = current_user.servers.find_by(id: params[:id])

    if @server
      @server.members.delete(current_user)
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 400
    end
  end

  private

  def server_params
    params.require(:server).permit(:name, :owner_id)
  end

end
