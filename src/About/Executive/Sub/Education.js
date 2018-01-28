import React, { Component } from 'react';
import '../../../Css/App.css';

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
				<td><img src = "jou.png" className="personImages" /></td>

			</tr>
			<tr>
				<th> Member: Junga Bahadur Thapa Khatri< br />
					Tel: 9847639389</th>
				<td><img src = "junga.jpg" className="personImages" /></td>


			</tr>
			<tr>
					<th>Member: Mr. Padam Bahadur Khadka< br />
						Tel: 9846266088</th>
				<td><img src = "padam.jpg" className="personImages" /></td>


			</tr>


		</table>
    </div>
    )
  }
}

export default Education;
