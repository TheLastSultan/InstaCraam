# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  img_url    :string           not null
#  user_id    :integer          not null
#  caption    :text
#  location   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Image < ApplicationRecord
  validates :img_url, presence: true
  validates :poster, presence: true

  belongs_to :poster,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Comment
end
