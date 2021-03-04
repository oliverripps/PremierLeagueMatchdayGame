import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link} from "react-router-dom";
import Submit from "./components/Submit.js";
import Scoreboard from "./components/Scoreboard.js";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

function App() {
  return (
    <Router>
    <AppBar position="static">
  <Toolbar>
    <Button component={Link} to={'/'} color="inherit">Submit Predictions</Button>
    <Button component={Link} to={'/scoreboard'} color="inherit">Scoreboard</Button>
  </Toolbar>
    </AppBar>
    <Route exact path ="/" component = {Submit} />
    <Route path ="/scoreboard" component = {Scoreboard} />
    </Router>
  );
}

export default App;
