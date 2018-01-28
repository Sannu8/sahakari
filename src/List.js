import React, { Component } from 'react';
import './Css/App.css';

class List extends Component {

  render() {

    return (
        <li><a href={this.props.goTo}>{this.props.value}</a></li>
    )
  }
}

export default List;
