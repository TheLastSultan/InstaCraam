require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Shootr
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.paperclip_defaults = {
      :storage => :s3,
      :s3_credentials => {
        :bucket => ENV["S3_BUCKET_NAME"],
        :access_key_id => ENV["AWS_ACCESS_KEY_ID"],
        :secret_access_key => ENV["AWS_SECRET_ACCESS_KEY"],
        :s3_region => ENV["s3_region"]
      }
    }

    # config.paperclip_defaults = {
    #   :storage => :s3,
    #   :s3_credentials => {
    #     :bucket => ENV["s3_bucket"],
    #     :access_key_id => ENV["s3_access_key_id"],
    #     :secret_access_key => ENV["s3_secret_access_key"],
    #     :s3_region => ENV["s3_region"]
    #   }
    # }

  end
end
