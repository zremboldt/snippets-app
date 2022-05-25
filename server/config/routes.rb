require 'sidekiq/web'
# or require 'sidekiq/pro/web'
# or require 'sidekiq-ent/web'


Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  mount Sidekiq::Web => "/sidekiq" # mount Sidekiq::Web in your Rails app
  
  # Defines the root path route ("/")
  # root "articles#index"

  namespace 'api' do
    namespace 'v1' do
      resources :snippets
      resources :collections
    end
  end
end
