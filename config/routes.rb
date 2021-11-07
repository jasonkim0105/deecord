Rails.application.routes.draw do
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root :to => "static_pages#root"

    mount ActionCable.server, at: '/cable'

    namespace :api, defaults: { format: :json } do
      resources :users, only: [:create, :show, :update, :index]
      resource :session, only: [:create, :destroy]
      resources :servers, only: [:create, :index, :show, :update, :destroy] do
        resources :channels, only: [:create, :destroy, :update, :show, :index] do
          resources :messages, only: [:index]
        end


        collection do
          post 'join'
        end

        member do
          delete 'leave'
        end
      end
      resources :user_servers, only: [:create, :destroy]
      resources :messages, only: [:create]

    end
end
