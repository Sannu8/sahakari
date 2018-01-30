import React, { Component } from 'react';
import './Css/Header.css';

class Header extends Component {
  render() {
    return (
      <header>

  			<table>
          <tbody>
  				<tr>
  					<td align = "left">
  						<button onClick = {this.back} className = "btn" > Back</button>
  					</td>
  						<td align = "right"><button onClick = {this.forward} className = "btn" >  Forward </button>
  					</td>
  				</tr>
          </tbody>
  			</table>

  			<img src = "http://i.imgur.com/T40J2f3.png" alt = "logo" />

  			<span id = "caselogin"></span>

  			<h1> Prativa Saving & Credit Co-operative Limited </h1>
  			<h2>  </h2>
        <br />
  		</header>
    )
  }
}

export default Header;
