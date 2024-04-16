export class C {
  static method() {
    return 1;
  }

  method() {
    return 2;
  }

  static get C() {
    class C2 {
      static method() {
        return 3;
      }

      method() {
        return 4;
      }
    }
    return C2;
  }

  get C() {
    class C3 {
      static method() {
        return 5;
      }

      method() {
        return 6;
      }
    }
    return C3;
  }
}