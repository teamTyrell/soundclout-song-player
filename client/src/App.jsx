import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import Info from './Info.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      song: {}
    }
  }

  randomSong() {
    this.setState({ index: Math.floor(Math.random() * Math.floor(99)) }, () => {
      // console.log('new state: ', this.state.index);
      const config = {
        params: {
          id: `${this.state.index}`
        }
      }
      axios.get(`/api/library/${this.state.index}`, config)
        .then((response) => {
          console.log(response);
          this.setState({ song: response.data.data[0] })
        })
        .catch((error) => {
          console.log('rats! ', error);
        })
    })
  }

  componentDidMount() {
    this.randomSong();
  }

  render() {
    return (
      <Info song={this.state.song}></Info>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));