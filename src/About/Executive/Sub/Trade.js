import React, { Component } from 'react';
import '../../../Css/App.css';

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
				<td><img src = "hira.png" className="personImages" /></td>

			</tr>
			<tr>
				<th> Member: Mr. Govind Singh Bhandari< br />
					Tel: 9856037677</th>
				<td><img src = "govind.png" className="personImages" /></td>


			</tr>
			<tr>
					<th>Member: Mr. Junga Bahadur Thapa Khatri< br />
						Tel: 9847639389</th>
				<td><img src = "junga.jpg" className="personImages" /></td>


			</tr>


		</table>


      </div>
    )
  }
}

export default Trade;
