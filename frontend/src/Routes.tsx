import Home from '../src/pages/Home/';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Sweepstake from 'pages/Sweepstake';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/sweepstake" exact>
        <Sweepstake />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;