import React, {Component} from 'react';
import Grid from './Grid';
import HomeBaru from './props';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


class App extends Component {
    render() {
      return(
        <div className="">
          <Grid propsa="ini menggunakan props" isiparagraf="ini menggunakan props juga"/>
          <HomeBaru example="lorem"/>
        </div>
      )
    }
}

export default App;
