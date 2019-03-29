const muffinDiv = document.querySelector('#muffin-list')
const newModal = document.querySelector('#new-muffin')
const loginLi = document.querySelector('li#login')

// primary fetch.
MuffinAdaptor.getMuffins().then(muffins => {
  const muffinObjects = muffins.map(muffinData => {
    return new Muffin(muffinData)
  })
  muffinObjects.forEach(muffin => {
    muffinDiv.innerHTML += muffin.render()
    muffinDiv.innerHTML += muffin.renderModal()
  })
})

// login function.
loginLi.addEventListener('click', function(event){
  const loginModal = document.querySelector('div#login')

  loginModal.addEventListener('submit', function(event) {
    event.preventDefault();
    loginLi.querySelector('a').innerHTML = `<span class="uk-icon uk-margin-small-right" uk-icon="icon: user"></span> ${event.target.name.value}`
    loginLi.dataset.name = event.target.name.value
    UIkit.modal(document.querySelector('div#login')).hide()
  })
})


// primary event listener for click on muffin image.
muffinDiv.addEventListener('click', function(event) {
  if(event.target.tagName === 'IMG') {
    const muffinId = parseInt(event.target.dataset.muffinId)
    const modalTag = document.querySelector(`#modal-full-${muffinId}`)
    const muffin = Muffin.all.find(muffin => muffin.id === muffinId)

    if(!!loginLi.dataset.name) {
      modalTag.querySelector('#name-input').value= loginLi.dataset.name
    }

    if(modalTag.dataset.event === "false") {
      modalTag.dataset.event = "true"
      muffin.orders = muffin.orders.map(order => {return new Order(order)})

      // load review section.
      modalTag.querySelector('#review-section').innerHTML = ""
      muffin.orders.forEach(order => {
        modalTag.querySelector('#review-section').innerHTML = order.render() + modalTag.querySelector('#review-section').innerHTML
      })

      // patch likes function.
      modalTag.querySelector('#review-section').addEventListener('click', function(event) {
        if(!!event.target.closest('i')) {
          if(event.target.closest('i').id === "likes") {
            let updatedLikes = parseInt(event.target.closest('#likes').dataset.likes) + 1
            let orderId = parseInt(event.target.closest('article').dataset.orderId)
            OrderAdaptor.patchOrder(orderId, updatedLikes).then(orderObject => {
              if(!!orderObject){
                Order.all.find(order => order.id === orderObject.id).likes = updatedLikes
                event.target.closest('#likes').dataset.likes = updatedLikes
                event.target.closest('ul').querySelector('#like-counter').innerText = `${updatedLikes} Likes`
              }
            })
          }else if(event.target.closest('i').id === "delete") {
            let orderId = parseInt(event.target.closest('article').dataset.orderId)
            if(event.target.closest('article').querySelector('a').innerText === modalTag.querySelector('#name-input').value) {
              OrderAdaptor.deleteOrder(orderId).then(orderObject => {
                if(!!orderObject) {
                  event.target.closest('article').remove()
                  alert("Comment Deleted")
                }
              })
            } else {
              alert("This isn't your comment")
            }

          }
        }

      })

      // patch flavor function.
      modalTag.addEventListener('click', function(event) {
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

      // post review function.
      modalTag.addEventListener('submit', function(event) {
        event.preventDefault()
        let name = event.target.name.value
        let review = event.target.review.value
        let muffinId = parseInt(event.target.dataset.muffinId)
        OrderAdaptor.postOrder(muffinId, review, name).then(orderObject => {
          if(!!orderObject) {
            let order = new Order(orderObject)
            muffin.orders.push(order)
            modalTag.querySelector('#review-section').innerHTML = order.render() + modalTag.querySelector('#review-section').innerHTML
          }
        })
      })
    }
  }
})

// post muffin function.
newModal.addEventListener('submit', function(event) {
  event.preventDefault()
  const flavor = event.target.flavor.value
  const calorie = event.target.calorie.value
  const image_url = event.target.image_url.value

  MuffinAdaptor.postMuffin(calorie, flavor, image_url).then(muffinObject => {
    if(!!muffinObject) {
      const muffin = new Muffin(muffinObject)
      muffinDiv.innerHTML = muffin.render() + muffinDiv.innerHTML
      muffinDiv.innerHTML = muffin.renderModal() + muffinDiv.innerHTML
    }
  })
})
