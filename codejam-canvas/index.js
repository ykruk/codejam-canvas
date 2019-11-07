const frame4 = [
  ["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"],
  ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
  ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
  ["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"]
];

const canvas = document.getElementById('canvas');
const canvasWidth = canvas.getBoundingClientRect().width;
const canvasHeight = canvas.getBoundingClientRect().height;

function draw(frame, scaleX, scaleY, fillStyleCallback) {
  if (canvas.getContext('2d')) {
    const ctx = canvas.getContext('2d');
    const width = frame[0].length;
    const height = frame.length;

    for (let row = 0; row < width; row++) {
      for (let col = 0; col < height; col++) {
        ctx.fillStyle = fillStyleCallback(frame[row][col]);
        ctx.fillRect(col * scaleX, row * scaleY, scaleX, scaleY);
      }
    }
  }
}

function drawImg() {
  const image = new Image();
  image.src = 'data/image.png';
  image.onload = () => {
    if (canvas.getContext('2d')) {
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);
    }
  }
}

const frameOption4 = document.getElementById('frame4');
const frameOption32 = document.getElementById('frame32');
const frameOptionImage = document.getElementById('image');

frameOption4.addEventListener('click', () => {
  draw(frame4, canvasWidth / 4, canvasHeight / 4, function (hexColor) {
    return "#" + hexColor;
  });
});

frameOption32.addEventListener('click', () => {
  draw(frame32, canvasWidth / 32, canvasHeight / 32, function (rgbaColor) {
    return `rgba(${rgbaColor})`;
  });
});

frameOptionImage.addEventListener('click', () => {
  drawImg();
});
