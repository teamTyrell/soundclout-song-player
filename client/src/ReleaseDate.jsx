import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

export default class ReleaseDate extends React.Component {
  constructor(props) {
    super(props);
  }

  stringToDate() {
    if (this.props.date) {
      var date = this.props.date.split("").filter(function (letter) {
        return letter != '"';
      }).join("");
      console.log(date);
      return new Date(date);
    }
  }

  render() {
    return (
      <Moment fromNow>
        {this.stringToDate()}
      </Moment>
    )
  }
}