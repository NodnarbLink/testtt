import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components

import Homepage from './components/pages/homePage';
import INStbl from './components/tblcomponent/Tbl.js';

//includes

import './assets/css/default.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Homepage />
            <INStbl data={this.dataSet}>
             </INStbl>


        </div>
    );
  }

  dataSet = [
    [ "Link", "1451", "24", "12", "240", "100", "45" ],
    [ "v.Link", "1420", "23", "11", "231", "121", "47" ],
    [ "OMGWTFBBQ", "1300", "14", "7", "195", "40", "31" ],
    [ "Torix", "1341", "15", "10", "160", "9000", "51" ],
    [ "Wooly", "1422", "21", "11", "261", "104", "46" ],
    [ "Jems", "1211", "13", "6", "185", "150", "23" ],
    [ "Morty", "1111", "12", "7", "145", "123", "22" ],
    [ "Tarpin", "1564", "30", "14", "312", "115", "1" ],
    [ "Snailman", "1368", "18", "14", "246", "171", "45" ]
  ];
}

export default App;
