import React, { Component } from 'react';
import '../../../Css/App.css';

import Jou from '../../../Images/Jou.png';
import Padam from '../../../Images/Padam.jpg';
import Junga from '../../../Images/Junga.jpg';

class Education extends Component {
  render() {
    return(
      <div>
      < br />< br />< br />
		<h3>Education Sub-Committee:</h3>
		<table>
			<tr >
				<th>Co-Ordinator: Jau Maya Rana< br />
					Tel: 9846062790
				</th>
				<td><img src = {Jou} className="personImages" /></td>

			</tr>
			<tr>
				<th> Member: Junga Bahadur Thapa Khatri< br />
					Tel: 9847639389</th>
				<td><img src = {Junga} className="personImages" /></td>


			</tr>
			<tr>
					<th>Member: Mr. Padam Bahadur Khadka< br />
						Tel: 9846266088</th>
				<td><img src = {Padam} className="personImages" /></td>


			</tr>


		</table>
    </div>
    )
  }
}

export default Education;
