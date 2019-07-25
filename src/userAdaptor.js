class UserAdaptor {
  static getUsers() {
    return fetch("https://muffin-mornings-backend.herokuapp.com/api/v1/users")
    .then(res => res.json())
  }
}
