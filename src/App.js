import "./styles.css";
import Products from "./components/Products";
import Card from "./components/Card";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="App">
      <Route exact path="/" component={Products} />
      <Route path="/card" component={Card} />
    </div>
  );
};

export default App;
