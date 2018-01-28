import React, { Component } from 'react';
import '../Css/App.css';

class Periodic extends Component {
  render() {
    return(
      <div>
      <br /><br /><br />
		<h3>Periodic Savings:</h3>

		<p>The Co-Operative offers Periodic Savings service for the shareholders
    of the co-operative in order to save money for a certain period of time.
    <h4>Interest Rates:</h4>
    <ul>
      <li> 6 months = 10% interest rate</li>
      <li>1 year = 11% interest rate</li>
      <li>2 years = 12% interest rate</li>
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

export default Periodic;
