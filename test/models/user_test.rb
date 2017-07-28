# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  avatar_url      :string           default("https://s3-us-west-2.amazonaws.com/shootr-dev/profile.svg")
#  description     :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  fullname        :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
