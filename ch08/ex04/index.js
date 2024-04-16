const obj = {
  om: function () {
    const nest = {
      nm: function () {
        console.log(this === obj, this === nest);
      },
      arrow: () => {
        console.log(this === obj, this === nest);
      },
    };
    nest.nm();
    nest.arrow();
  },
};
obj.om();

// 予想
// アローじゃない　false, ture
// アロー true, false

// 結果：予想通り
// アローじゃない　thisは継承されないので注意が必要
// アロー thisを継承するので外側のオブジェクトのthisが引き継がれる