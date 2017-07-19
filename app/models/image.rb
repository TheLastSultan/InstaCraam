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

  belongs_to :user_id
end
