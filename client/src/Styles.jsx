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
  flex-direction: row;
  height: 380px;
  width: 1240px;
  background-color: grey;
  background-image: linear-gradient(to bottom right, 	#686868, gray);
  justify-content: space-between;
  align-items: flex-start;
`;

const PlayerDiv = styled.div`
  flex-basis: 3 1 auto;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 27px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SongInfoDiv = styled.div`
  width: 100%;
  height: 215px;
  display: flex;
  flexDirection: row;
`;

const Play = styled.img`
  width: 60px;
  height: 60px;
`;

const InfoSpace = styled.div`
  width: 270px;
`;

const Blank = styled.div`
  width: 100%;
`;

const WaveView = styled.img`
  width: 815px;
  height: 100px;
  order: 3;
  justify-self: flex-end;
`;

const SongName = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 24px;
  font-family: Interstate;
  line-height: 37px;
  padding: 4px 7px;
  // position: absolute;
  // left: 213px;
  // top: 38px;
  color: white;
  background: black;
`;

const InfoColumnLeft = styled.div`
  margin-left: 9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FlexEnd = styled.div`
  margin-left: auto;
`;

const InfoColumnRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArtistName = styled.p`
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 16px;
  font-family: Interstate;
  line-height: 1.2;
  padding: 2px 7px 3px;
  // position: absolute;
  // left: 213px;
  // top: 18px;
  color: white;
  background: black;
`;

const CloseModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
`;

const Release = styled.p`
  align-self: flex-end;
  margin-top: 0px;
  margin-bottom: 18px;
  // position: absolute;
  font-size: 20px;
  font-family: Interstate;
  // top: 18px;
  // right: 503px;
  color: white;
  text-alignment: left;
`;

const Genre = styled.p`
align-self: flex-end;
margin-top: 0px;
  margin-bottom: 0px;
border-radius: 25px;
  height: 24px;
  padding: 0 8px;
  line-height: 24px;
  font-size: 20px;
  font-family: Interstate;
  background: #999999;
  // position: absolute;
  // top: 58px;
  // right: 503px;
  color: white;
  text-alignment: left;
`;

const Image = styled.img`
  margin-top: 20px;
  margin-right: 20px;
  // position: absolute;
  // top: 32px;
  // right: 130px;
  object-fit: cover;
  width:340px;
  height:340px;

`;

const Modal = styled.div`
  background-color: #FFF;
  padding: 50px;
  z-index: 1000;
`

const Overlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, .7);
  z-index: 1000;
`;


const ModalImage = styled.img`
  object-fit: cover;
  width: 500px;
  height: 500px;
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
  FlexEnd,
  InfoColumnLeft,
  InfoColumnRight,
  Blank,
  WaveView,
  Release,
  Genre,
  Image,
  Modal,
  Overlay,
  ModalImage,
  CloseModal
}