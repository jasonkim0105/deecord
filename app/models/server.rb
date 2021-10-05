# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  invite_code :string
#
class Server < ApplicationRecord
  validates :name, :owner_id, presence: true

  after_initialize :ensure_invite_code

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :user_servers,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :UserServer,
    dependent: :destroy

  has_many :users,
    through: :user_servers,
    source: :user

  has_many :channels,
    primary_key: :id,
    foreign_key: :server_id,
    source: :Channel,
    dependent: :destroy

  def self.generate_invite_code
    SecureRandom.urlsafe_base64(5)
  end

  def ensure_invite_code
    self.invite_code ||= self.class.generate_invite_code
  end
end
