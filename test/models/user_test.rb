# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  avatar_url      :string           default("http://res.cloudinary.com/norriskwan/image/upload/v1500518554/profile_bhxtpb.svg")
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
