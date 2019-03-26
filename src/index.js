const muffinDiv = document.querySelector('#muffin-list')

MuffinAdaptor.getMuffins().then(muffins => {
  const muffinObjects = muffins.map(muffinData => {
    return new Muffin(muffinData)
  })
  muffinObjects.forEach(muffin => {
    muffinDiv.innerHTML += muffin.render()
  })
})
