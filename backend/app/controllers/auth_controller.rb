class AuthController < ApplicationController
  before_action :set_user, except: [:logout]

  def register
    return render json: { message: 'User is already existed.' }.to_json, status: :forbidden if @user

    @user = User.new(user_params)
    return render json: { message: @user.errors }.to_json, status: :bad_request unless @user.valid?

    if @user.save
      authenticate
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def login
    return render json: { message: 'User is not existed.' }.to_json, status: :not_found unless @user

    if @user.authenticate(user_params[:password])
      authenticate
      render status: :ok
    else
      render json: { message: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def logout
    reset_session
    render status: :ok
  end

  private

  def set_user
    @user ||= User.find_by(email: user_params[:email].downcase)
  end

  def user_params
    params.permit(:email, :password)
  end

  def authenticate
    session[:current_user_id] = @user.id
  end
end
