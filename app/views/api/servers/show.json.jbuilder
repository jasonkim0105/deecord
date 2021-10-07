json.extract! @server, :id, :name, :owner_id, :invite_code
json.users @server.users.pluck(:id)

json.channels server.channels.pluck(:id)