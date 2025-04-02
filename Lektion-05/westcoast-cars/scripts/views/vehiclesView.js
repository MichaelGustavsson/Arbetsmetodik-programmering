class VehiclesView {
  #parentElement = document.querySelector('#gallery');
  #data;

  render(data) {
    this.#data = data;
    this.#clearHtml();
    const html = this.#generateHtml();
    this.#parentElement.appendChild(html);
    this.#generateImageEvent();
  }

  #clearHtml() {
    this.#parentElement.innerHTML = '';
  }

  #generateImageEvent() {
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
      image.addEventListener('click', () => {
        location.href =
          './vehicle-details.html?vehicle=' + image.getAttribute('vehicleId');
      });
    });
  }

  #generateHtml() {
    const vehicleList = document.createElement('article');
    vehicleList.classList.add('gallery');

    for (let vehicle of this.#data) {
      const section = document.createElement('section');
      section.classList.add('card');
      const image = document.createElement('img');
      image.setAttribute('src', `./images/${vehicle.imageUrl}`);
      image.alt = vehicle.manufacturer;
      image.setAttribute('vehicleId', vehicle.id);
      section.appendChild(image);
      const info = document.createElement('p');
      info.innerText = vehicle.manufacturer;
      section.appendChild(info);
      vehicleList.appendChild(section);
    }

    return vehicleList;
  }
}

export default new VehiclesView();
