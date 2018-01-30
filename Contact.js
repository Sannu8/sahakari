import React, { Component } from 'react';
import './Css/App.css';

class Contact extends Component {
  render() {
    return(
    <div>
    < br />< br />< br />< br />
  			<form action = "Message.php" method = "post">
  				<table>

  					<tr><th>First Name: </th>
  						<td><input type = "text" name = "firstname" /></td>
  					</tr>
  					<tr><th>Last Name: </th>
  						<td><input type = "text" name = "lastname" /></td>
  					</tr>
  					<tr><th>Email Address: </th>
  						<td><input type = "email" id = "email" name = "email" /></td>
  					</tr>
  					<tr><th>Confirm Email: </th>
  						<td><input type = "email" id = "confirm" name = "confirm" onkeyup="EmailMatch(); return false;" />< br /><span id = "message"></span></td>
  					</tr>
  					<tr><th>Message: </th>
  						<td><textarea rows = "10" cols = "100" name = "message"></textarea></td>< br />
  					</tr>
  					<tr>
  						<td></td>
  						<td><input type = "submit" name = "submit" value = "Submit" /></td>
  					</tr>
  				</table>
  			</form>

    </div>
    )
  }
}

export default Contact;
