export const obj = {
  r: 0,
  theta: 0,

  get x() {
    return this.r * Math.cos(this.theta);
  },

    get y() {
    return this.r * Math.sin(this.theta);
  },

  set x(value) {
    if (isNaN(value)) {
      throw new Error('x should be defined number');
    }

    const r = Math.sqrt(value ** 2 + this.y ** 2);
    const theta = Math.atan2(this.y, value);
    this.r = r;
    this.theta = theta;
  },

  set y(value) {
    if (isNaN(value)) {
      throw new Error('y should be defined number');
    }

    const r = Math.sqrt(this.x ** 2 + value ** 2);
    const theta = Math.atan2(value, this.x);
    this.r = r;
    this.theta = theta;
  }
};

// GPT