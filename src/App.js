import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
//import pages
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import NavBar from "./components/NavBar";

//import App styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/recipes/:id" component={Recipe} />
          <Route path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
