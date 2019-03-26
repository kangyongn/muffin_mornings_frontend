class Muffin {
  constructor({calorie, flavor, image_url}) {
    this.calorie = calorie;
    this.flavor = flavor;
    this.image_url = image_url;

    Muffin.all.push(this);
  }

  render() {
    return `
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 100px">
          <img src=${this.image_url}></img>
        </div>
    </div>
    `
  }
}

Muffin.all = [];
