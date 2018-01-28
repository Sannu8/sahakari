import React, { Component } from 'react';
import './Css/NavBar.css';

import List from './List';


class NavBar extends Component {



  render() {
    //For Deposits
    const deposit = ['regular','general','periodic','women', 'children'];
    const value = ["Regular","General","Periodic", "Women's", "Children's" ];

    const depositHref = deposit.map((name) => name + ' ');
    const depositValue = value.map((name) => name + ' Saving');

    //For Credits
    const credit = ['agriculture','business','hire','household', 'industrial'];
    const name = ["Agricultural","Business","Hire Purchase", "Household", "Industrial" ];

    const creditHref = credit.map((name) => name + ' ');
    const creditValue = name.map((name) => name + ' Loan');

    console.log(creditHref);
    console.log(creditValue);

    return (
      <ul className="top-level-menu">
          <List goTo="homepage " value="HOME"/>

          <li><a href="#">ABOUT</a>
        <ul className="second-level-menu">
                <List goTo="overview" value="Overview" />
                <List goTo="objectives " value="Objectives"/>
                <List goTo="employees " value="Employees"/>

              <li>
                  <a href="#">Executive Body</a>
                  <ul className="third-level-menu">
                      <List goTo="board " value="Board of Directors"/>
                      <List goTo="Accounting " value="Accounting Committee"/>
                      <li><a href="#">Sub-Committees</a>
                        <ul className="fourth-level-menu">
                          <List goTo="education " value="Education Sub-Committee"/>
                          <List goTo="loan " value="Loan Sub-Committee"/>
                          <List goTo="trade " value="Trade Sub-Committee"/>
                    </ul>
            </li>

                  </ul>
              </li>

            </ul>
      </li>
        <li>
            <a href="#">DEPOSITS</a>
            <ul className="second-level-menu">
              {depositHref.map((goto, i) =>   <List goTo={goto} value={depositValue[i]}/>)}
            </ul>
        </li>

       <li><a href="#">CREDITS</a>
        <ul className="second-level-menu">
            {creditHref.map((goto, i) =>   <List goTo={goto} value={creditValue[i]}/>)}
        </ul>
       </li>

        <List goTo="gallery" value="GALLERY"/>
        <List goTo="contact" value="CONTACT US"/>
        <List goTo="signin" value="Sign In"/>

    </ul>

    )
  }
}

export default NavBar;
