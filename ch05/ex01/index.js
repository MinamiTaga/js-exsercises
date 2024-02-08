const fun = () => {
  {
    const num = 1; 
    console.log(num);
  }
    // console.log(num); ここはエラーになる
  const num = 2;
  console.log(num);
  {
    // console.log(num); ここもエラー
    const num = 1; 
    console.log(num);
  }
}

fun();
