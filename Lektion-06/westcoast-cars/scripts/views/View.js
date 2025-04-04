export default class View {
  _parentElement = undefined;
  _data;

  constructor(parentElement) {
    this._parentElement = parentElement;
  }

  render(data) {
    this._data = data;
    this._clearHtml();
    const html = this._generateHtml();
    this._parentElement.appendChild(html);
    this._generateImageEvent();
  }

  _clearHtml() {
    this._parentElement.innerHTML = '';
  }
}
