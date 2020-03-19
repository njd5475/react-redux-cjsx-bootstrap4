import React from 'react';
import Counter from './Counter';
import MonthView from './MonthView';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-primary">
          Alerts appear!
        </div>
        <div className="row">
          <h1>Welcome!</h1>
        </div>
        <MonthView />
        <Counter />
        <div className="row">
          <div className="col-md-12">
            <ul>
              <li><a href="http://brunch.io/">Brunch</a></li>
              <li><a href="https://facebook.github.io/react/">React</a></li>
              <li><a href="http://redux.js.org">Redux</a></li>
              <li><a href="http://v4-alpha.getbootstrap.com/">Bootstrap 4</a></li>
              <li><a href="https://jquery.com/">jQuery</a></li>
              <li><a href="http://momentjs.com/">Moment.js</a></li>
              <li><a href="http://coffeescript.org/">CoffeeScript</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
