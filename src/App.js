import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from './Components/Admin/Admin';
import EventTasks from './Components/EventTasks/EventTasks';
import Landingpage from './Components/Landingpage/Landingpage';
import Register from './Components/Register/Register';
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddEvent from './Components/AddEvent/AddEvent';

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({
    displayName: '',
    email: '',
    emailVerified: false,
    photoURL: ''
  });
  

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
              <Landingpage></Landingpage>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
          <PrivateRoute path="/register">
              <Register />
          </PrivateRoute>
          <Route path="/admin">
              <Admin />
          </Route>
          <Route path="/tasks">
              <EventTasks />
          </Route>
          <Route path="/addEvent">
              <AddEvent />
          </Route>

          <Route path="*">
              <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
