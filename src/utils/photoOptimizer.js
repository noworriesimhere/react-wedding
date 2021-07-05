const MAX_WIDTH = 220;
const MAX_HEIGHT = 220;
const QUALITY = 0.9;

const readPhoto = async (photo) => {
  const canvas = document.createElement('canvas');
  const img = document.createElement('img');

  // create img element from File object
  img.src = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(photo);
  });
  await new Promise((resolve) => {
    img.onload = resolve;
  });

  // draw image in canvas element
  canvas.width = img.width;
  canvas.height = img.height;
  canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);

  return canvas;
};

const scaleCanvas = (canvas, scale) => {
  const scaledCanvas = document.createElement('canvas');
  scaledCanvas.width = canvas.width * scale;
  scaledCanvas.height = canvas.height * scale;

  scaledCanvas
    .getContext('2d')
    .drawImage(canvas, 0, 0, scaledCanvas.width, scaledCanvas.height);

  return scaledCanvas;
};

const optimizePhoto = async (photo) => {
  let canvas = await readPhoto(photo);

  if (canvas.width < canvas.height) {
    while (canvas.width >= 2 * MAX_WIDTH) {
      canvas = scaleCanvas(canvas, .5);
    }
  
    if (canvas.width > MAX_WIDTH) {
      canvas = scaleCanvas(canvas, MAX_WIDTH / canvas.width);
    }
  } else if (canvas.height < canvas.width) {
    while (canvas.height >= 2 * MAX_HEIGHT) {
      canvas = scaleCanvas(canvas, .5);
    }
  
    if (canvas.height > MAX_HEIGHT) {
      canvas = scaleCanvas(canvas, MAX_HEIGHT / canvas.height);
    }
  }



  return new Promise((resolve) => {
    canvas.toBlob(resolve, 'image/jpeg', QUALITY);
  });
};

export default optimizePhoto;