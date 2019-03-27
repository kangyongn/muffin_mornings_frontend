const muffinDiv = document.querySelector('#muffin-list')

MuffinAdaptor.getMuffins().then(muffins => {
  const muffinObjects = muffins.map(muffinData => {
    return new Muffin(muffinData)
  })
  muffinObjects.forEach(muffin => {
    muffinDiv.innerHTML += muffin.render()
    muffinDiv.innerHTML += muffin.renderModal()
  })
})

muffinDiv.addEventListener('click', function(event) {
  if(event.target.tagName === 'IMG') {
    const muffinId = parseInt(event.target.dataset.muffinId)
    const modalTag = document.querySelector(`#modal-full-${muffinId}`)
    const muffin = Muffin.all.find(muffin => muffin.id === muffinId)

    modalTag.addEventListener('click', function(event) {
      debugger
      if(!!event.target.closest('a')) {
        const muffinFlavor = event.target.closest('.uk-inline').querySelector('input').value
        muffin.flavor = muffinFlavor
        MuffinAdaptor.patchMuffin(muffin).then(muffinObject => {
          if(!!muffinObject) {
            modalTag.querySelector('h1').innerText = muffinFlavor
          }
        })
      }
    })

    modalTag.addEventListener('submit', function(event) {
      event.preventDefault()
      const name = event.target.name.value
      const review = event.target.review.value
      const muffinId = parseInt(event.target.dataset.muffinId)
      OrderAdaptor.postOrder(muffinId, review, name).then(orderObject => {
        if(!!orderObject) {
          console.log("worked!");
        }
      })
    })
  }
})
