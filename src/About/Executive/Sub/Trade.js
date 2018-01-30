import React, { Component } from 'react';
import '../../../Css/App.css';

import Hira from '../../../Images/hira.png';
import Govind from '../../../Images/govind.png';
import Junga from '../../../Images/Junga.jpg';

class Trade extends Component {
  render() {
    return(
      <div>

		< br />< br />< br />
		<h3>Trade Sub-Committee:</h3>
		<table>
			<tr >
				<th>Co-Ordinator: Mr. Hira Bahadur Khatri< br />
					Tel: 9847675901
				</th>
				<td><img src = {Hira} className="personImages" /></td>

			</tr>
			<tr>
				<th> Member: Mr. Govind Singh Bhandari< br />
					Tel: 9856037677</th>
				<td><img src = {Govind} className="personImages" /></td>


			</tr>
			<tr>
					<th>Member: Mr. Junga Bahadur Thapa Khatri< br />
						Tel: 9847639389</th>
				<td><img src = {Junga} className="personImages" /></td>


			</tr>


		</table>


      </div>
    )
  }
}

export default Trade;
