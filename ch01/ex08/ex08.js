class DefaultMap extends Map {
  constructor(defaultValue) {
    super();
    this.defaultValue = defaultValue;
  }

  get(key) {
    if (this.has(key)) {
      return super.get(key);
    } else {
      return this.defaultValue;
    }
  }
}

class Histgram {
  constructor() {
    this.letterCounts = new DefaultMap(0);
    this.totalLetters = 0;
  }

  add(text) {
    text = text.replace(/\s/g, '').toUpperCase();

    for (const character of text) {
      const count = this.letterCounts.get(character);
      this.letterCounts.set(character, count + 1);
      this.totalLetters++;
    }
  }

  toString() {
    let entries = [...this.letterCounts];

    entries.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[1] - a[1];
      }
    })

    for (const entry of entries) {
      entry[1] = entry[1] / this.totalLetters * 100;
    }

    entries = entries.filter(entry => entry[1] >= 1);

    const lines = entries.map(
      ([l, n]) => `${l}: ${'#'.repeat(Math.round(n))} ${n.toFixed(2)}%`
    );

    return lines.join('\n');
  }
}

async function histgramFromStdin() {
  process.stdin.setEncoding('utf-8');
  const histgram = new Histgram();
  for await (const chunk of process.stdin) {
    histgram.add(chunk);
  }
  return histgram;
}

histgramFromStdin().then(histogram => { console.log(histogram.toString()) });