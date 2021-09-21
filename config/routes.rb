Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  resources :categories, only: :index
  resources :blogs # do resources :comments
  resources :users, only: :create
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/categories/:category_id/blogs', to: 'blogs#get_by_category'
end
