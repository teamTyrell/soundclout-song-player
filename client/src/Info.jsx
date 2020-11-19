import React from 'react';
import styled from 'styled-components';
import ReleaseDate from './ReleaseDate.jsx';
import {
  Wrapper,
  PlayerDiv,
  SongInfoDiv,
  Play,
  SongName,
  ArtistName,
  InfoSpace,
  Blank,
  WaveView,
  Image,
  ReleaseGenre,
  NameInfo
} from './Styles.jsx';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    // this.stringToDate = this.stringToDate.bind(this);
  }

  render() {
    return (
      <Wrapper imgUrl={this.props.song.image_url}>
        <PlayerDiv>
          <SongInfoDiv>
            <Play src={`https://soundclout.s3.us-east-2.amazonaws.com/play+(1).png`}></Play>
            <ArtistName>{this.props.song.artist_name}</ArtistName>
            <SongName>{this.props.song.song_name}</SongName>
            <InfoSpace></InfoSpace>
            <ReleaseGenre>{this.props.song.genre}<br></br>
              <ReleaseDate date={this.props.song.created_at}></ReleaseDate>
            </ReleaseGenre>
          </SongInfoDiv>
          <Blank><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></Blank>
          <WaveView><br></br><br></br><br></br><br></br></WaveView>
        </PlayerDiv>
        <div>
          <Image src={this.props.song.image_url}></Image>
        </div>
      </Wrapper>
    );
  }
}