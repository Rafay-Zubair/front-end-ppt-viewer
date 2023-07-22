import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import "./index.css";

const App = ({slides}) => {
  return (
    <div className="App">
      <Navigation />
      <Main slide={slides}/>
    </div>
  );
};

export default App;