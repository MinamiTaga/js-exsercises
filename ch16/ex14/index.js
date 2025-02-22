import { threads } from "worker_threads";

document.getElementById("image").addEventListener("change", (event) => {
  console.log("aaa");

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
    console.log("mumumu");

    originalCtx.drawImage(img, 0, 0);

    const imageData = originalCtx.getImageData(0, 0, img.width, img.height);
    const data = imageData.data;

    const worker = new threads.Worker("./worker.js", {
      workerData: {
        data,
        width: img.width,
        height: img.height,
      },
    });

    worker.on("message", (outputData) => {
      const outputImageData = new ImageData(outputData, img.width, img.height);
      filteredCtx.putImageData(outputImageData, 0, 0);
    });
  });

  reader.readAsDataURL(file);
});
