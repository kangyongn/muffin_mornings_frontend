class Order {
  constructor({muffin_id, review, name}) {
    this.muffin_id = muffin_id;
    this.review = review;
    this.name = name;

    Order.all.push(this);
  }

  render() {
    return `
    <article class="uk-comment">
    <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
        <div class="uk-width-expand">
          <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${this.name}</a></h4>
        </div>
        </header>
        <div class="uk-comment-body">
          <p>${this.review}</p>
        </div>
    </article>
    `
  }
}

Order.all = [];
