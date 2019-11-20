import React, {Component} from 'react';
import Grid from './Grid';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


class App extends Component {
    render() {
      return(
        <div className="container">
          <Grid/>
        </div>
      )
    }
}

export default App;
