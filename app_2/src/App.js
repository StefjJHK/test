import './App.css';
import {TermsOfUse} from "./modules/terms-of-use/TermsOfUse";
import {useSelector} from "react-redux";
import {ImagesList} from "./modules/images/ImagesList";

function App() {
  const isTermsOfUseAccepted = useSelector(state => state.termsOfUse.accepted)

  return (
    <div className="App">
      {isTermsOfUseAccepted ? <ImagesList/> : <TermsOfUse />}
    </div>
  );
}

export default App;
