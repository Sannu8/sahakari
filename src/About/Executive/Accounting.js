import React, { Component } from 'react';
import '../../Css/App.css';

import Ganesh from '../../Images/Ganesh.png';
import Krishna from '../../Images/Krishna.png';
import Manju from '../../Images/manju.jpg';


class Accounting extends Component {
  render() {
    return(
      <div>
      <  br /><  br /><  br />
  <h3>Accounting Committee:</h3>
  <table>
    <tr >
      <th>Co-Ordinator: Mr. Ganesh Khadka<  br />
        Tel: 9846206714
      </th>
      <td><img src = "ganesh.png" className="personImages" /></td>

    </tr>
    <tr>
      <th> Member: Mr. Krishna Bahadur Karki<  br />
        Tel: 9846392139</th>
      <td><img src = "krishna.png" className="personImages" /></td>


    </tr>
    <tr>
        <th>Member: Mrs. Manju B.K. <  br />
          Tel: 9806515397</th>
      <td><img src = "manju.jpg" className="personImages"/></td>


    </tr>


  </table>
      </div>
    )
  }
}

export default Accounting;
