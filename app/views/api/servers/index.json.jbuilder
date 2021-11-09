@servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :name, :owner_id, :invite_code
    json.users server.users
    json.channels server.channels.pluck(:id)
  end
end