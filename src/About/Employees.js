import React, { Component } from 'react';
import '../Css/App.css';

import Ratna from '../Images/ratna.png';
import Sajana from '../Images/Sajana.jpg';
import Rita from '../Images/rita.png';
import Binu from '../Images/binu.png';


class Employees extends Component {
  render() {
    return(
      <div>
      <br /><br /><br />
		<h3>Our Employees:</h3>
		<table>
			<tr >
				<th>Managing Director: Mr. Ratna Bahadur Mahat<br />
					Tel: 9846054890
				</th>
				<td><img src = "ratna.png" className="personImages" /></td>

			</tr>
			<tr>
				<th> Assistant Manager: Mrs. Sajana Karmacharya<br />
					Tel: 9846778401</th>
				<td><img src = "Sajana.jpg" className="personImages" /></td>


			</tr>
			<tr>
					<th>Management Assistant: Rita Thapa<br />
						Tel: </th>
				<td><img src = "rita.png" className="personImages" /></td>


			</tr>
			<tr>
					<th>Front Desk Assistant: Binu Khatri<br />
						Tel: </th>
				<td><img src = "binu.png" className="personImages" /></td>


			</tr>


		</table>

      </div>
    )
  }
}

export default Employees;
