class Api::UsersController < ApplicationController

  def index
    # @users = Server.find(params[:serverId]).users
    @users = User.all
    render :index
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def create
      @user = User.new(user_params)
      if @user.save
          login!(@user)
          render :show
      else
          render json: @user.errors.full_messages, status: 401
      end
  end

  def update
    @user = User.find_by(id: params[:id])
    @servers = Server.all
    if @user.update(username: params[:user][:username])
      render 'api/users/show'
    end
  end

  private
  def user_params
      params.require(:user).permit(:username, :email, :password)
  end
end