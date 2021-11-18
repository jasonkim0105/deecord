class Api::ServersController < ApplicationController

  before_action :require_logged_in

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server.save
      current_user.servers << @server
      Channel.create(server_id: @server.id, name: "general")
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
    @server = Server.find_by(id: params[:id])
    if @server
      @users_ids = @server.users.pluck(:id)
      @server_id = @server.id
      @server.destroy
      render :show
    else
      render json: ['unable to delete server'], status: 404
    end

  end

  def join
    @server = Server.find_by(invite_code: params[:inviteCode])

    if @server && !current_user.servers.include?(@server)
      current_user.servers << @server
      render :show
    elsif @server
      render json: ['Already a member of that server.'], status: 400
    else
      render json: ['This invite is invalid or has expired.'], status: 404
    end
  end

  def leave
    @server = current_user.servers.find_by(id: params[:id])

    if @server
      @server.users.delete(current_user)
      render :show
    else
      render json: ['Unable to leave server'], status: 400
    end
  end

  private

  def server_params
    params.require(:server).permit(:name)
  end

end
