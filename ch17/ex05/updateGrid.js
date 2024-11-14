import { ROWS, COLS } from './index.js';

// Life Game のルールに従ってセルを更新する
export function updateGrid(grid) {
  // 新しいグリッドを作成
  const nextGrid = grid.map((arr) => [...arr]);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // 周囲のセルの生存数を数えて nextGrid[row][col] に true or false を設定する (実装してね)
      let count = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          // 本人は除外する
          if (i === 0 && j === 0) {
            continue;
          }
          const x = col + j;
          const y = row + i;
          // grid外は除外する
          if (x >= 0 && x < COLS && y >= 0 && y < ROWS) {
            count += grid[y][x] ? 1 : 0;
          }
        }
      }
      if (!grid[row][col]) {
        if (count === 3) {
          nextGrid[row][col] = true;
        }
      } else {
        if (count < 2 || count > 3) {
          nextGrid[row][col] = false;
        }
      }
    }
  }
  return nextGrid;
}
