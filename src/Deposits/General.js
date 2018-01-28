import React, { Component } from 'react';
import '../Css/App.css';

class General extends Component {
  render() {
    return(
      <div>
      <br /><br /><br />
		<h3>General Savings:</h3>

    <p>
      The Co-Operative offers General Savings service to the customers of the co-operative
      in order to encourage them to save for their future prosperity and security.

      <h4>Features:</h4>
      <ul>
        <li>Minimum Balance: Rs 200</li>
        <li>8.00% Interest Rate</li>
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

export default General;
