class Order {
  constructor({user_id, muffin_id, review, stars, title}) {
    this.user_id = user_id;
    this.muffin_id = muffin_id;
    this.review = review;
    this.stars = stars;
    this.title = title;

    Order.all.push(this);
  }
}

Order.all = [];
