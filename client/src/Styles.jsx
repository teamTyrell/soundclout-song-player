import React from 'react';
import styled, { keyframes } from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  margin: auto;
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
  font-size: 20px;
  font-family: Interstate;
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
  background: #999;
  color: white;
  text-alignment: left;
  :hover {
    background: #333;
  }
`;

const Image = styled.img`
  margin-top: 20px;
  margin-right: 20px;
  object-fit: cover;
  width:340px;
  height:340px;
`;

const ModalDrop = keyframes`
  0% { margin-top: -800px; }
  100% { margin-top: 76px; }
`;

const Modal = styled.div`
  margin-top: 76px;
  justify-content: center;
  padding: 25px;
  background-color: #FFF;
  z-index: 100;
  left: 445px;
  height: auto;
  animation: ${ModalDrop} 0.4s 0s cubic-bezier(.13,1.07,.5,1.01);
`;

const Overlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(0,0%,94.9%,.9);
  z-index: 50;
`;


const ModalImage = styled.img`
  object-fit: cover;
  width: 500px;
  height: 500px;
`;

const ModalTitle = styled.p`
  font-family: Interstate;
  font-size: 22px;
  line-height: 1;
  margin-top: 0px;
  padding-bottom: 9px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 24px;
`;

export {
  Wrapper,
  PlayerDiv,
  SongInfoDiv,
  Play,
  SongName,
  ArtistName,
  FlexEnd,
  InfoColumnLeft,
  InfoColumnRight,
  WaveView,
  Release,
  Genre,
  Image,
  Modal,
  Overlay,
  ModalImage,
  CloseModal,
  ModalTitle
}