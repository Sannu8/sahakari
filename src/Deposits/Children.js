import React, { Component } from 'react';
import '../Css/App.css';

class Children extends Component {
  render() {
    return(
      <div>
      < br />< br />< br />
		<h3>Children Savings:</h3>

    <p>
      The Co-Operative offers Savings service for the children under 18 years of age
      in order to encourage them to start saving early on for their future prosperity and security.


      <h4>Features:</h4>
      <ul>
        <li>Minimum Balance: Rs 100</li>
        <li>9.00% Interest Rate</li>
        <li>The account holder must be below 16 years of old.</li>
        <li>Supervision of a guardian is required in order to open this account.</li>



      </ul>
      <h4>Documents Required:</h4>
      <ul>
        <li>One copy of a recent passport sized photograph</li>
        <li>Photocopy of Birth Certificate</li>
      </ul>

    </p>
    </div>
    )
  }
}

export default Children;
