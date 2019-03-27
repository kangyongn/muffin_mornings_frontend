class OrderAdaptor {
  static postOrder(muffin_id, review, name) {
    return fetch("http://localhost:3000/api/v1/orders", {
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
}
