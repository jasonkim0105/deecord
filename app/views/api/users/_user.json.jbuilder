json.extract! user, :id, :username, :email
json.server_users user.servers.pluck(:id)
json.owned_servers user.owned_servers.pluck(:id)