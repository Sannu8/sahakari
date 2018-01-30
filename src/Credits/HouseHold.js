import React, { Component } from 'react';
import '../Css/App.css';

class HouseHold extends Component {
  render() {
    return(
      <div>
      < br />< br />< br />
		<h3>HouseHold Loan:</h3>

		<p>
      The Co-Operative offers HouseHold Loan service to the customers of the society
      in order support them in thier day to day household livelihood.

      <h4>Features:</h4>
      <ul>
        <li>Minimum Balance: Rs 100</li>
        <li>9.00% Interest Rate</li>
        <li>The account holder must be a citizen of Nepal of age 18 years or older.</li>

      </ul>

            <h4>Documents Required:</h4>
            <ul>
              <li>One copy of a recent passport sized photograph</li>
              <li>Photocopy of Citizenship</li>
            </ul>

    </p>
</div>
    )
  }
}

export default HouseHold;
