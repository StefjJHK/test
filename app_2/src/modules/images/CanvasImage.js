import {baseUrl} from "../api/Api";
import {useEffect, useRef} from "react";

//всегда отображается картинка с кнопкой, в случае если нужна большая
//гибкость, я обычно добавляю type в пропсы, например type: 'default' | 'download'
export function CanvasImage({url}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = `${baseUrl}/${url}`;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      const context = canvas.getContext('2d');
      context.drawImage(img, 0, 0);
    }

  }, [url]);

  const onDownload = () => {
    const data = canvasRef.current.toDataURL('image/png');
    const imageName = url.split('/').pop()
    const link = document.createElement('a');
    link.download = imageName;
    link.href = data;

    link.click();
  }

  return (
    <div>
      <canvas ref={canvasRef} />
      <button onClick={onDownload}>Download</button>
    </div>
  );
}