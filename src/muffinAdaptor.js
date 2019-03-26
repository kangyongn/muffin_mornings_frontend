class MuffinAdaptor {
  static getMuffins() {
    return fetch("http://localhost:3000/api/v1/muffins")
    .then(res => res.json())
  }
}
