Rails.application.routes.draw do
  namespace :auth do
    post 'login', to: 'login', as: 'login'
    post 'register', to: 'register', as: 'register'
    delete 'logout', to: 'logout', as: 'logout'
  end

  namespace :api do
    resources :videos
  end
end
