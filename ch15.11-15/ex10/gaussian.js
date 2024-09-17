function gaussianFilter(data, width, height) {
  // ガウシアンカーネルの定義 (5x5)

  const kernel = [
    [1, 4, 7, 4, 1],
    [4, 16, 26, 16, 4],
    [7, 26, 41, 26, 7],
    [4, 16, 26, 16, 4],
    [1, 4, 7, 4, 1],
  ];

  const kernelWeight = kernel.flat().reduce((sum, value) => sum + value, 0);

  const outputData = new Uint8ClampedArray(data.length);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0,
        g = 0,
        b = 0;

      for (let ky = 0; ky < 5; ky++) {
        for (let kx = 0; kx < 5; kx++) {
          const px = x + kx - 2;
          const py = y + ky - 2;

          if (px >= 0 && px < width && py >= 0 && py < height) {
            const index = (py * width + px) * 4;
            const weight = kernel[ky][kx];

            r += data[index] * weight;
            g += data[index + 1] * weight;
            b += data[index + 2] * weight;
          }
        }
      }

      const destIndex = (y * width + x) * 4;
      outputData[destIndex] = r / kernelWeight;
      outputData[destIndex + 1] = g / kernelWeight;
      outputData[destIndex + 2] = b / kernelWeight;
      outputData[destIndex + 3] = data[destIndex + 3]; // アルファチャネルをそのままコピー
    }
  }

  return new ImageData(outputData, width, height);
}

self.addEventListener("message", (event) => {
  const data = event.data;
  const imageData = gaussianFilter(data.data, data.width, data.height);
  self.postMessage({ imageData });
});
