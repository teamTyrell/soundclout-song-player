import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

export default class ReleaseDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date
    }
  }

  stringToDate() {
    if (this.state.date) {
      console.log(this.state.date);
      var date = this.state.date.split("").filter(function (letter) {
        return letter != '"';
      }).join("");
      console.log(date);
      return new Date(date);
    }
  }

  render() {
    return (
      <Moment toNow>
        {this.stringToDate()}
      </Moment>
    )
  }
}