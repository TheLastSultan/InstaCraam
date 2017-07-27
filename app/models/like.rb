# == Schema Information
#
# Table name: likes
#
#  id           :integer          not null, primary key
#  likable_type :string           not null
#  likable_id   :integer          not null
#  liker_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Like < ApplicationRecord
  validates :likable_type, :likable_id, :liker_id, presence: true

  belongs_to :liker,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :User

  belongs_to :likable, polymorphic: true
end
