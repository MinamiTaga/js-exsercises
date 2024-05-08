class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance = () => {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };

  add = (x, y) => {
    x = x + this.x;
    y = y + this.y;
    return { x, y };
  };
}

const p = new Point(1, 1);
p.distance();
p.add(2, 3);
