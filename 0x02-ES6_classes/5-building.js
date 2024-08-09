export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (typeof this.evacuationWarningMessage !== 'function' || this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
