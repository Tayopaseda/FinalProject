import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "./Components/HomePage/Main";
import Banner from "./Components/HomePage/Banner";


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Banner/>
          <Main/>
        </Route>
        <Route path="/Cohorts" exact>

          </Route>
        <Route path="/Solutions" exact>

        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
