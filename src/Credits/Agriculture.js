import React, { Component } from 'react';
import '../Css/App.css';

class Agriculture extends Component {
  render() {
    return(
      <div>
      <br /><br /><br />
		<h3>Agricultural Loan:</h3>

		<p>
      The Co-Operative offers Agricultural Loan service to the customers who are directly or indirectly related to the agricultural field.
      This is to encourage the farmers for their active participation in the agricultural field.

      <h4>Features:</h4>
      <ul>
        <li>Minimum Balance: Rs 100</li>
        <li>9.00% Interest Rate</li>
        <li>The account holder must be a citizen of Nepal of age 18 years or older.</li>
        <li>He/she should be directly or indirectly related to agriculture.</li>

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

export default Agriculture;
