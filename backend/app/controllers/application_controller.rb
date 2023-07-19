class ApplicationController < ActionController::API
  private
    def current_user
      @_current_user ||= session[:current_user_id] &&
        User.find_by(id: session[:current_user_id])
    end

    def require_login
      unless current_user
        render status: :unauthorized
      end
    end
end
