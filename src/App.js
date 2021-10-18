import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/Home/Services/Services';
import NotFound from './Pages/Notfound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Detail from './Pages/Detail/Detail/Detail';


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/detail/:id'>
          <Detail></Detail>
        </Route>
        <Route exact path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
