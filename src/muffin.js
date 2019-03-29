class Muffin {
  constructor({id, calorie, flavor, image_url, orders}) {
    this.id = id;
    this.calorie = calorie;
    this.flavor = flavor;
    this.image_url = image_url;
    this.orders = orders;

    Muffin.all.push(this);
  }

  render() {
    return `
    <div>
    <div data-muffin-id="${this.id}" id="muffin-card" class="uk-card uk-card-default uk-box-shadow-large uk-border-rounded uk-inline-clip uk-transition-toggle" tabindex="0">
      <div class="uk-card-media-top">
        <div class="uk-card-badge uk-label">${this.calorie} Calories</div>
          <img href="#modal-full-${this.id}" uk-toggle class="uk-border-rounded uk-transition-scale-up uk-transition-opaque" data-muffin-id="${this.id}" src="${this.image_url}" alt="">
          <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
               <p class="uk-h4 uk-margin-remove uk-text-center">${this.flavor}</p>
           </div>
        </div>
      </div>
    </div>
    </div>
    `
  }

  renderModal() {
    return `
    <div id="modal-full-${this.id}" data-event="false" class="uk-modal-full uk-animation-scale-up" uk-modal>
        <div class="uk-modal-dialog">
            <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
            <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                <div class="uk-background-cover" style="background-image: url('${this.image_url}');" uk-height-viewport></div>
                <div class="uk-padding-large">
                    <h1>${this.flavor}</h1>
                    <form>
                      <fieldset class="uk-fieldset">
                        <div class="uk-margin">
                          <div class="uk-inline">
                            <a class="uk-form-icon uk-form-icon-flip uk-modal-close" href="#" uk-icon="icon: pencil"></a>
                            <input class="uk-input uk-border-rounded" name="flavor" type="text" placeholder="${this.flavor}">
                          </div>
                        </div>
                      </fieldset>
                    </form>

                    <form data-muffin-id="${this.id}" id="review-form">
                      <fieldset class="uk-fieldset">
                      <div class="uk-margin">
                        <div class="uk-inline">
                          <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: user"></span>
                          <input id="name-input" class="uk-input uk-border-rounded" name="name" type="text" placeholder="Name">
                        </div>
                      </div>
                      <div class="uk-margin">
                        <textarea class="uk-textarea uk-border-rounded" name="review" placeholder="Review"></textarea>
                      </div>
                      <button class="uk-button uk-border-rounded uk-button-primary uk-width-1-1 uk-margin-small-bottom" type="submit">Review</button>
                      </fieldset>
                    </form>
                    <section id="review-section" uk-overflow-auto></section>
                </div>
            </div>
        </div>
    </div>
    `
  }
}

Muffin.all = [];
