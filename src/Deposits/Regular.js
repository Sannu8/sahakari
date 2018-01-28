import React, { Component } from 'react';
import '../Css/App.css';

class Regular extends Component {
  render() {
    return(
      <div>
      <br /><br /><br />
  <h3>Regular Savings:</h3>

  <p>
    The Co-Operative offers Regular Savings Service in which the shareholders
    of the co-operative deposit money every month. This account is compulsory
    for the shareholders as it is their duty to keep the co-operative running
    smoothly.
  </p>
  <h4>Features:</h4>
  <ul>
    <li>Minimum Balance: Rs. 200</li>
    <li>10.00% Interest Rate</li>
    <li>The account holder must be a citizen of Nepal of age 18 years or older.</li>

  </ul>
  <h4>Documents required:</h4>
  <ul>
    <li>One copy of a recent passport sized photograph</li>
    <li>Photocopy of Citizenship</li>
  </ul>
      </div>
    )
  }
}

export default Regular;
