import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Counter from './Counter';
import Counter_2 from './Counter_2';
import Map from './Map';
import Gallery from './Gallery';
import Calendar from './Calendar';
import Trendino from './Trend';
import React, { Component as C } from 'react';
import { render as r } from 'react-dom';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';

const Content = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Map} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/counter" component={Counter} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/trend" component={Trendino} />
    </Switch>
  </main>
);


const Menu = () => (
	<header>
	<nav>
	<ul>
	<li><Link to="/">Карта</Link></li>
	<li><Link to="/gallery">Галерея</Link></li>
	<li><Link to="/counter">Liker</Link></li>
	<li><Link to="/calendar">Material-UI</Link></li>
	<li><Link to="/trend">Trend</Link></li>
	</ul>
	</nav>
	</header>
);

const App = () => (
  <div><Menu /><Content />
  </div>
);


r(
<BrowserRouter><MuiThemeProvider><App /></MuiThemeProvider></BrowserRouter>,
document.querySelector('.cont'),
);
