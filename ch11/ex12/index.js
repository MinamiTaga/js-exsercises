class FileError extends Error {
  constructor(path) {
    super(`Capacity Error : ${path}`);
    this.path = path;
  }

  get name() {return 'FileError'}
}

const error = new FileError('http://example.jpg')
console.log(error)