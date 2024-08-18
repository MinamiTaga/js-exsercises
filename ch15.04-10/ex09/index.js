document.getElementById("image").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const img = new Image();
  const reader = new FileReader();

  reader.addEventListener("load", (e) => {
    img.src = e.target.result;
  });

  img.addEventListener("load", () => {
    const originalCanvas = document.getElementById("original");
    const filteredCanvas = document.getElementById("filtered");
    const originalCtx = originalCanvas.getContext("2d");
    const filteredCtx = filteredCanvas.getContext("2d");

    originalCanvas.width = img.width;
    originalCanvas.height = img.height;
    filteredCanvas.width = img.width;
    filteredCanvas.height = img.height;

    originalCtx.drawImage(img, 0, 0);

    const imageData = originalCtx.getImageData(0, 0, img.width, img.height);
    const data = imageData.data;

    // わからなかったため、以下ChatGPTによる回答
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

    const width = img.width;
    const height = img.height;

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

    const outputImageData = new ImageData(outputData, img.width, img.height);
    filteredCtx.putImageData(outputImageData, 0, 0);
  });

  reader.readAsDataURL(file);
});
