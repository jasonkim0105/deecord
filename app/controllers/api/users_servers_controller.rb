class Api::UsersServersController < ApplicationController
  def create
    @user_server = UserServer.new
    server = Server.find_by(id: params[:user_servers][:server_id])
    if server.users.server_id = server.id
      @user_server.server_id = server.id
      @user_server.user_id = current_user.id
      @user_server.save
      @curent_user_id = @user_server.user.id
      @server = Server.find(@user_server.id)
      render 'api/servers/show'
    else
      render json: ["Server does not exist"], status: 404
    end
  end

  def destroy
    @user_server = UserServer.find_by(user_id: params[:user_id], server_id: params[:server_id])
    if @user_server.destroy
      render json:@user_server.server_id
    else
      render json: @user_server.errors.full_messages, status: 404
    end
  end

  private
  def user_server_params
    params.require(:user_servers).permit(:user_id, :server_id)
  end

end