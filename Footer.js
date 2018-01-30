import React, { Component } from 'react';
import './Css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>

  			<table>

  				<tr>
  					<th>Contact information</th>

  					<th>Copyright 2017 Prativa Ltd.</th>
  					<th>All Rights Reserved </th>


  					<th><a className = "navigation" href = "Terms.html">Terms & Conditions </a>
  					</th>

  					<th><a className = "navigation" href = "policy.html">Accessibility Policy</a> </th>

  					<th><a href = "">Language</a></th>
  				</tr>

  			</table>

  		</footer>
    )
  }
}

export default Footer;
