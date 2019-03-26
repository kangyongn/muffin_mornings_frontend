class Muffin {
  constructor({id, calorie, flavor, image_url}) {
    this.id = id;
    this.calorie = calorie;
    this.flavor = flavor;
    this.image_url = image_url;

    Muffin.all.push(this);
  }

  render() {
    return `
    <div>
        <div data-id="${this.id}" class="uk-flex uk-flex-middle uk-box-shadow-large uk-padding uk-inline-clip uk-transition-toggle">
          <img class="uk-border-rounded" src=${this.image_url}></img>
          <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
               <p class="uk-h4 uk-margin-remove uk-text-center">${this.flavor}</p>
           </div>
        </div>
    </div>
    `
  }
}

Muffin.all = [];
