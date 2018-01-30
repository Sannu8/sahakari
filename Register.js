import React, { Component } from 'react';
import './Css/App.css';

class Register extends Component {

  render() {

    return(
      <div>
      < br />< br />

		<form action="register.php" method = "post">
			<table >
				<tr>
					<th>Full Name:</th>
					<td><input type= "text" name ="fullname" required value =""  /> *</td>
				<tr>
					<td></td>
					<td><i><small> 5 or more characters, letters and/or numbers.</small></i> </td>
				</tr>
				</tr>
				<tr valign = "bottom">
					<th> Nationality: </th>
					<td>< br /><input type = "text" name = "nationality" required value = "" /> *</td>
				</tr>
				<tr valign = "bottom">
					<th>Email Address:</th>
					<td>< br /><input type = "email" name = "email" required value = "" /> * </td>
				</tr>
				<tr>
					<td></td>
					<td><i> 10 or more characters, letters or numbers. </i></td>
				</tr>
				<tr valign = "bottom">
					<th>Phone Number:</th>
					<td>< br /><input type = "number" name = "phone" value = "" /></td>
				</tr>
				<tr valign = "bottom">
					<th> Username: </th>
					<td>< br /><input type = "text" name = "username" id = "username" required value = "" /> *</td>
				</tr>
				<tr>
					<td></td>
					<td><i><small> 5 or more characters, letters and/or numbers.</small> </i></td>
				</tr>
				<div class = "pass">
				<tr valign = "bottom">
					<th>Password:</th>
					<td>< br /><input type = "password" id = "password" name = "password" required value = "" onmouseout = "{checkPass}" /> * <span id = "Validate" class = "Validate">    </span> < br /></td>
				</tr>
				</div>
				<tr>
					<td></td>
					<td><i><small>6 or more characters, letters and numbers.< br />
						Must contain atleast one number, one lowercase letter and one uppercase letter.</small></i>
					</td>
				</tr>
				<div class = "pass">
				<tr>
					<th>Confirm Password:</th>
					<td>< br /><input type = "password" id = "confirm" name = "confirm" required value = "" onkeyup = "" /> * < br />
						<span id = "Message" class = "Message">    </span>
					</td>

				</tr>
				</div>
					<tr>
						<td></td>
						<td>< br />
						<input type = "radio" name ="level" id = "AdminRadio" value = "admin" onclick = "" required /> Register as Admin
						< br /><span id = "AdminRegister" class = "AdminRegister">    </span></td>
					</tr>
					<tr><td></td>
						<td> <input type = "Radio" name ="level" id = "UserRadio" value = "user" required />
						Register as User </td>
					</tr>
				<tr>
					<td></td>
					<td>< br /><input type = "checkbox" name ="box"  required /> *
			I have read and agree to the <a href= "Terms.html">Terms of Service. </a></td>
				</tr>
				<tr>
					<td></td>
					<td>
						< br />
            <input type = "submit" name = "register" value = "Register" class = "submit" />
					</td>
				</tr>
				<tr>
					<td></td>
					<td>Already have an account? <a href = "Login.html">Sign In</a></td>
				</tr>
			</table>
		</form>
    </div>
    )
  }
}

export default Register;
