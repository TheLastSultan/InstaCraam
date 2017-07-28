Rails.application.routes.draw do
  namespace :api do
    get 'follows/create'
  end

  namespace :api do
    get 'follows/destroy'
  end

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :images, except: [:new, :edit] do
      resources :comments, only: [:create, :show, :index]
    end
    resources :users, only: [:create, :update, :show] do
      resources :images, only: [:index]
    end
    resources :comments, only: [:index, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
