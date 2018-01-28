import React, { Component } from 'react';
import '../../../Css/App.css';

class Loan extends Component {
  render() {
    return(
      <div>
      < br />< br />< br />
		<h3>Loan Sub-Committee:</h3>
		<table>
			<tr >
				<th>Co-Ordinator: Mr. Ran Bahadur Pun< br />
					Tel: 9846117473
				</th>
				<td><img src = "ran.png" className="personImages" /></td>

			</tr>
			<tr>
				<th> Member: Mrs. Gyan Kumari Karki< br />
					Tel: 9846256796 </th>
				<td><img src = "gyan.jpg" className="personImages" /></td>


			</tr>
			<tr>
					<th>Member: Mrs. Radhika Khatri< br />
						Tel: 9856031351</th>
				<td><img src = "radhika.jpg" className="personImages" /></td>


			</tr>


		</table>
      </div>
    )
  }
}

export default Loan;
