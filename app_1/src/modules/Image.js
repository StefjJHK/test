import { apiBaseUrl } from './Api.js';

function downloadImage(image, name) {
  const data = image.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = name;
  link.href = data;

  link.click();
}

//Условие задачи "Show images as canvas elements", отобразить картинки на **отдельных** элементах canvas
//Условие сигнатуры метода renderImageToCanvas(imageUrl), на чистом js не понятно что возвращает метод
//в задачи нет уточнения, поэтому принимаю render за 'вернуть js-объект'
export async function renderImageToCanvas(imageUrl) {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = `${apiBaseUrl}/${imageUrl}`;

  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = img.width;
  canvas.height = img.height;

  context.drawImage(img, 0, 0);

  const button = document.createElement('button');
  button.innerText = 'Download';
  button.onclick = async () => {
    downloadImage(canvas, imageUrl.split('/').pop());
  };

  const container = document.createElement('div');
  container.append(canvas, button);

  return container;
}
