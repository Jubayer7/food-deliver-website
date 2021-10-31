import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/menu">
              <Menu></Menu>
            </Route>
            <Route path="/menu/:foodId">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="/order">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
