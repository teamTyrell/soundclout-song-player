import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  margin-left: 7%;
  margin-right: 7%;
  display: flex;
  flexDirection: row;
  height: 380px;
  background: orange;
  justify-content: space-between;
  align-items: flex-start;
`;

const PlayerDiv = styled.div`
  flex-basis: 3 1 auto;
  display: flex;
  flexDirection: column;
  padding-top: 30px;
  padding-left: 35px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SongInfoDiv = styled.div`
  width: 100%;
  display: flex;
  flexDirection: row;
  align-items: flex-start;
`;

const Play = styled.img`
  width: 60px;
  height: 60px;
`;

const InfoSpace = styled.div`
  width: 550px;
`;

const Blank = styled.div`
  width: 100%;
`;

const WaveView = styled.div`
  width: 100%;
  order: 3;
  background: pink;
`;

const SongName = styled.p`
  font-size: 24px;
  line-height: 37px;
  padding: 4px 7px;
  position: absolute;
  left: 213px;
  top: 38px;
  color: white;
  background: black;
`;

const ArtistName = styled.p`
  font-size: 16px;
  line-height: 1.2;
  padding: 2px 7px 3px;
  position: absolute;
  left: 213px;
  top: 18px;
  color: white;
  background: black;
`;

const Release = styled.p`
  position: absolute;
  font-size: 20px;
  top: 18px;
  right: 503px;
  color: white;
  text-alignment: left;
`;

const Genre = styled.p`
border-radius: 25px;
  height: 24px;
  padding: 0 8px;
  line-height: 24px;
  font-size: 20px;
  background: grey;
  position: absolute;
  top: 58px;
  right: 503px;
  color: white;
  text-alignment: left;
`;

const Image = styled.img`
  position: absolute;
  top: 32px;
  right: 130px;
  object-fit: cover;
  width:340px;
  height:340px;
`;

export {
  Title,
  Wrapper,
  PlayerDiv,
  SongInfoDiv,
  Play,
  SongName,
  ArtistName,
  InfoSpace,
  Blank,
  WaveView,
  Release,
  Genre,
  Image
}