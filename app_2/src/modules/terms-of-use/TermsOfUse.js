import {useGetDataQuery} from "../api/Api";
import {useDispatch} from "react-redux";
import {accept} from "./TermsOfUseSlice";

export function TermsOfUse() {
  const { data, isLoading, error } = useGetDataQuery();
  const dispatch = useDispatch();

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Loading error!</p>
  }

  const onAccept = () => {
    dispatch(accept());
  }

  return (
    <div>
      {data.terms_of_use.paragraphs
        .slice()
        .sort((a, b) => a.index - b.index)
        .map(({index, title, content, text}) =>
          <div key={index}>
            <h2>{title}</h2>
            <p>{content || text}</p>
          </div>)
        }
      <button onClick={onAccept}>Accept</button>
    </div>
  )
}