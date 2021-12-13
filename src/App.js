import Navbar from "./Navbar";
import Home from "./home";
import Create from "./Create";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BlogDetails from "./BlogDetails";
function App() {
  return (
      <Router>
        <div className="App">
          <header>
              <Navbar/>
          </header>
          <div className="content">
              <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/Create">
                    <Create/>
                </Route>
                <Route path="/blogs/:id">
                    <BlogDetails/>
                </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}
export default App;
