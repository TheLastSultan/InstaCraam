# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :post, :author, presence: true

  belongs_to :post,
             primary_key: :id,
             foreign_key: :post_id,
             class_name: :Image

  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User

  has_many :likes, as: :likable
end
