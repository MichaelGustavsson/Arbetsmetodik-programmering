class VehicleView {
  #parentElement = document.querySelector('main div.container');
  #data;

  render(data) {
    this.#data = data;
    this.#clearHtml();
    const html = this.#generateHtml();
    this.#parentElement.insertAdjacentHTML('afterbegin', html);
  }

  #clearHtml() {
    this.#parentElement.innerHTML = '';
  }

  #generateHtml() {
    return `<h1 class="page-title">${this.#data.manufacturer} ${
      this.#data.model
    }</h1>
      <article class="details">
        <section>
          <img src=./images/${this.#data.imageUrl} />
          <div>
            <p>Årsmodell: <span>${this.#data.modelYear}</span></p>
            <p>Antal körda km: <span>${this.#data.mileage}</span></p>
            <p>Pris: <span>${this.#data.value}</span></p>
            <p>Beskrivning: <br/><span>${this.#data.description}</span></p>
          </div>
        </section>
      </article>`;
  }
}

export default new VehicleView();
