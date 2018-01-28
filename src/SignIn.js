import React, { Component } from 'react';
import './Css/App.css';

class SignIn extends Component {
  render() {
    return(
      <div>
      < br />


  <form action="checklogin.php" method = "POST">
    <table>
      < br />< br />
      <tr>

        <th valign = "bottom" > Username:
        <input type = "text" name = "username" id = "username" required value = "" min = "5" /></th>
      </tr>

      <tr valign = "bottom">

          <th >Password:
        <input type = "password" name = "password" id = "password" required value = "" min="6" onkeyup = "CheckPass(); return false;" />
      </th>
    </tr>
    <tr>

      <td align = "center">
        <span id = "Validate" class = "Validate">           </span>
      </td>
      </tr>
      <tr>

          <th >< br /><input type = "checkbox" name ="box" value="checked" />
    Remember me  </th>
      </tr>
      <tr>

        <th >
          < br /><input type = "submit" name = "login" value = "Sign In" id= "login" />
        </th>
      </tr>
      <tr>

        <th><a href = "">< br />Forgot Your Password?</a></th>

      </tr>
      <tr>

        <td>Do not have an account yet? <a href = "Register" >Sign Up!</a></td>
        </tr>
    </table>
  </form>

  </div>



    )
  }
}

export default SignIn;
