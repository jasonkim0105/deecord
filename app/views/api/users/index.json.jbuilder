@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    json.owned_servers user.owned_servers.pluck(:id)
    json.user_servers user.servers.pluck(:id)
  end
end