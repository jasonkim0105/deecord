# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string
#  username        :string
#  password_digest :string
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :owned_servers,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Server

  has_many :user_servers,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :UserServer

  has_many :servers,
    through: :user_servers,
    source: :server


  def self.find_by_credential(username,password)
    user = User.find_by(username:username)

    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password);
  end

  def is_password?(password)
    password_obj = BCrypt::Password.new(self.password_digest)
    password_obj.is_password?(password)
  end


  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    save!
    self.session_token
  end


  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end


end
