export const signup = (user) => (
  $.ajax({
      method: 'POST',
      url: '/api/users',
      data: { user }
  })
)

export const login = user => (
  $.ajax({
      method: 'POST',
      url: '/api/session',
      data: { user }
  })
)

export const logout = () => (
  $.ajax({
      method: 'DELETE',
      url: '/api/session',
  })
)

export const updateUser = user => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: { user }
  })
}

export const fetchServerUsers = serverId => (
  $.ajax({
    method: 'get',
    url: '/api/users',
    data: { serverId }
  })
);