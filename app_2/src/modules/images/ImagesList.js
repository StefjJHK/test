import {useGetDataQuery} from "../api/Api";
import {CanvasImage} from "./CanvasImage";

export function ImagesList() {
  const { data, isLoading, error } = useGetDataQuery();

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Loading error!</p>
  }

  return (
    <div>
      {data.images.map(x => <CanvasImage url={x.image_url} key={x.image_url} />)}
    </div>
  )
}