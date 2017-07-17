# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Set Jbuilder to format json into lowerCamelCase
Jbuilder.key_format camelize: :lower
