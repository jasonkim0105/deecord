# == Schema Information
#
# Table name: user_servers
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class UserServer < ApplicationRecord

  belongs_to :server,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Server

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
