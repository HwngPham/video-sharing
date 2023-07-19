class ApplicationController < ActionController::API
  private

  def current_user
    return unless session[:current_user_id]

    @current_user ||= User.find_by(id: session[:current_user_id])
  end

  def require_login
    render status: :unauthorized unless current_user
  end
end
