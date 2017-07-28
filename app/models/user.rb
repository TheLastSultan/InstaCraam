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

class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, uniqueness: true

  after_initialize :ensure_session_token

  has_many :images,
           primary_key: :id,
           foreign_key: :user_id,
           class_name: :Image

  has_many :comments,
           primary_key: :id,
           foreign_key: :author_id,
           class_name: :Comment

  has_many :followings,
           primary_key: :id,
           foreign_key: :follower_id,
           class_name: :Follow

  has_many :follows,
           primary_key: :id,
           foreign_key: :followed_id,
           class_name: :Follow

  has_many :followers,
           through: :follows,
           source: :follower

  has_many :followees,
           through: :followings,
           source: :followed

  def self.find_by_creds(username, password)
    user = User.find_by(username: username)
    user && user.valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  private

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

end
