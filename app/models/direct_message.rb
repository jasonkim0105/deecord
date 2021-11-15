class DirectMessage < ApplicationRecord
  validates :body presence: true

  belongs_to :dmchannel,
    primary_key: :id,
    foreign_key: :dm_channel_id,
    class_name: :DmChannel

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

end
