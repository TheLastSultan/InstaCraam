# == Schema Information
#
# Table name: images
#
#  id                 :integer          not null, primary key
#  img_url            :string           not null
#  user_id            :integer          not null
#  caption            :text
#  location           :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Image < ApplicationRecord
  validates :img_url, presence: true
  validates :poster, presence: true

  has_attached_file :image, default_url: "/assets/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :poster,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Comment

  has_many :likes, as: :likable

  has_many :likers,
    through: :likes,
    source: :liker

end
