import React, { Component } from 'react';
import '../../Css/App.css';


import Ganga from '../../Images/ganga.png';
//import Bhim from '../../Images/bhim.png';
import Ratna from '../../Images/ratna.png';

//import Bhim from '../../Images/bhim.png';
//import Bom from '../../Images/bom.png';
//import Chun from '../../Images/chun.jpg';

import Ghan from '../../Images/Ghan.png';
import Govind from '../../Images/govind.png';
//import Hira from '../../Images/hira.jpg';

//import Jou from '../../Images/jou.png';
import Kamal from '../../Images/Kamal.png';
//import Kamala from '../../Images/kamala.jpg';
//import Ran from '../../Images/ran.jpg';



class Board extends Component {
  render() {
    return(
      <div>

		< br />< br />< br />
		<h3>Board of Directors:</h3>
		<table>
			<tr >
				<th>Chairman: Mr. Ganga Bahadur Khadka< br />
					Tel: 9846049916
				</th>
				<td><img src = {Ganga}  className="personImages"  /></td>

			</tr>
			<tr>
				<th>Vice-Chairman: Mrs. Bhim Kumari Thapa (Kalpana)< br />
					Tel: 9819196681</th>
				<td><img src = "vicechairman.png" className="personImages"   /></td>


			</tr>
			<tr>
					<th>Secretary: Mr. Ratna Bahadur Mahat< br />
						Tel: 9846054890</th>
				<td><img src = {Ratna}  className="personImages"  /></td>


			</tr>
			<tr>
				<th>Treasurer: Mr. Bhim Raj Pun< br />
					Tel: 9846024555</th>
				<td><img src = "treasurer.png"  className="personImages"  /></td>


			</tr>
			<tr>
				<th>Member: Mr. Bom Bahadur Tilija Pun< br />
					Tel: 9846138049</th>
				<td><img src = "bom.png" className="personImages"   /></td>

			</tr>
			<tr>
				<th>Member: Mrs. Chun Maya Gurung< br />
					Tel: 9804162896</th>
				<td><img src = "chunmaya.png"   className="personImages" /></td>

			</tr>
			<tr>
				<th>Member: Mr. Ghan Bahadur Khadka< br />
					Tel: 9841386183</th>
				<td><img src = "ghan.png"  className="personImages"  /></td>

			</tr>
			<tr>
				<th>Member: Mr. Govinda Singh Bhandari< br />
					Tel: 9856037677</th>
				<td><img src = {Govind}  className="personImages"  /></td>

			</tr>
			<tr>
				<th>Member: Mr. Hira Bahadur Khatri< br />
					Tel: 9847675901</th>
				<td><img src = "hira.png"  className="personImages"  /></td>

			</tr>
			<tr>
				<th>Member: Mrs. Jou Maya Rana< br />
					Tel: 9846062790</th>
				<td><img src = "jou.png"  className="personImages"  /></td>

			</tr>
			<tr>
				<th>Member: Mr. Kamal Poudel< br />
					Tel: 9846059736</th>
				<td><img src = {Kamal}   className="personImages" /></td>

			</tr>
			<tr>
				<th>Member: Mrs. Kamala Karki Chettri< br />
					Tel: 9846061991</th>
				<td><img src = "kamla.png"  className="personImages"  /></td>

			</tr>
			<tr>
					<th>Member: Mr. Run Bahadur Pun< br />
						Tel: 9846117473</th>
				<td><img src = "ran.png"  className="personImages"  /></td>

			</tr>

		</table>

      </div>
    )
  }
}

export default Board;
