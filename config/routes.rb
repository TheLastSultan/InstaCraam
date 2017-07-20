Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :images, except: [:new, :edit]
    resource :user, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
  end
end
