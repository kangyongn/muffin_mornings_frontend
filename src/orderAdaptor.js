class OrderAdaptor {
  static postOrder(muffin_id, review, name) {
    return fetch("hhttps://muffin-mornings-backend.herokuapp.com/api/v1/orders", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        muffin_id: muffin_id,
        review: review,
        name: name
      })
    })
    .then(res => res.json())
  }
  static patchOrder(id, likes) {
    return fetch(`https://muffin-mornings-backend.herokuapp.com/api/v1/orders/${id}`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
        likes: likes
      })
    })
    .then(res => res.json())
  }
  static deleteOrder(id) {
    return fetch(`https://muffin-mornings-backend.herokuapp.com/api/v1/orders/${id}`, {method: 'DELETE'})
    .then(res => res.json())
  }
}
