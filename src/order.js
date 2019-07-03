class Order {
  constructor({id, muffin_id, review, name, likes}) {
    this.id = id;
    this.muffin_id = muffin_id;
    this.review = review;
    this.name = name;
    this.likes = likes;

    Order.all.push(this);
  }

  render() {
    let d = new Date()
    return `
    <article data-order-id="${this.id}" class="uk-comment">
      <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
        <div class="uk-width-expand">
          <h3 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${this.name}</a></h3>
          <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
            <li>Posted on ${d.getMonth() + 1}/${d.getDate()}</li>
            <li id="like-counter">${this.likes} Likes</li>
            <li><i id="likes" data-likes="${this.likes}"uk-icon="icon: heart"></i></li>
            <li><i id="delete" uk-icon="icon: trash"></i></li>
          </ul>
        </div>
      </header>
      <div class="uk-comment-body">
        <p>${this.review}</p>
      </div>
      <hr>
    </article>
    `
  }
}

Order.all = [];
