class MuffinAdaptor {
  static getMuffins() {
    return fetch("http://localhost:3000/api/v1/muffins")
    .then(res => res.json())
  }

  static postMuffin(calorie, flavor, image_url) {
    return fetch("http://localhost:3000/api/v1/muffins", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        calorie: calorie,
        flavor: flavor,
        image_url: image_url
      })
    })
    .then(res => res.json())
  }

  static patchMuffin({id, flavor}) {
    return fetch(`http://localhost:3000/api/v1/muffins/${id}`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
        flavor: flavor
      })
    })
    .then(res => res.json())
  }
}
