Rails.application.routes.draw do
  namespace :auth do
    post 'login'
    post 'register'
    delete 'logout'
  end

  scope :api do
    resources :videos
  end
end
