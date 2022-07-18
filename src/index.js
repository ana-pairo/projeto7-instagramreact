import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";

function App() {
  return (
    <div>
      <NavBar />
      <Corpo />
      <FundoMobile />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
