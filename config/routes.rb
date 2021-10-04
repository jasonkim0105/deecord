Rails.application.routes.draw do
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root :to => "static_pages#root"

    namespace :api, defaults: { format: :json } do
      resources :users, only: [:create, :show]
      resource :session, only: [:create, :destroy]
      resources :servers, only: [:create, :index, :show, :update, :destroy] do
        collection do
          post 'join'
        end

        member do
          delete 'leave'
        end
      end
      resources :user_servers, only: [:create, :destroy]

    end
end
