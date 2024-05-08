export function counterGroup() {
  let totalCount = 0;

  const newCounter = function () {
    let n = 0;

    return {
      count: function () {
        totalCount++;
        return n++;
      },
      reset: function () {
        n = 0;
      },
    };
  };

  const total = function () {
    return totalCount;
  };

  return {
    newCounter,
    total,
  };
}
