Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :images, except: [:new, :edit] do
      resources :comments, only: [:create, :show, :index]
    end
    resources :users, only: [:create, :update, :show] do
      resources :images, only: [:index]
    end
    resources :comments, only: [:index, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
