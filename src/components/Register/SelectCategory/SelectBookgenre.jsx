import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import Logo from "../../Common/Logo";
import Header from '../../Common/header';
import styled from "styled-components";
import font from '../../../font/210옴니고딕040.ttf';
import Next from '../../../img/next.png';
import Prev from '../../../img/prev.png';
import YellowCircle from '../../../img/maskgroup2.png';
import RedCircle from '../../../img/redcircle342.png';
import Yellowpath from '../../../img/yellowpath20.png';
import Genre from './Bookgenre';

class SelectBookgenre extends Component {
    goBack = () =>{
        this.props.history.goBack();
    }
    render() {
        return (
            <Wrapper>
                <Logo/>
                <Header/>
                <Button>
                    <TB>카테고리선택</TB>
                </Button>
                <SearchTitle>
                2. 도서 장르를 선택해주세요.
                </SearchTitle>
                <Span/>
                <Genre/>
                <BackgroundRedCircle/>
                <BackgroundYelloCircle/>
                <BackgroundYelloPath/>
                <Link to="/rentalinfo">
                    <Nextbtn/>
                </Link>
                    <Prevbtn onClick={this.goBack}/>
            </Wrapper>
        );
    }
}
const Wrapper = styled.div`
    width: 1920px;
    height: 1080px;
`;
const BackgroundYelloPath = styled.img.attrs({
    src: Yellowpath,
  })`
    position: absolute;
    top: 0px;
    left: 726px;
    height: 1080px;
`;
const BackgroundYelloCircle = styled.img.attrs({
    src: YellowCircle,
  })`
    position: absolute;
    top: 604px;
    left: 355px;

`;
const BackgroundRedCircle = styled.img.attrs({
    src: RedCircle,
  })`
    position: absolute;
    top: 748px;
    left: 449px;

`;
const Nextbtn = styled.img.attrs({
    src: Next,
  })`
    position: absolute;
    top: 899px;
    left: 1771px;

`;
const Prevbtn = styled.img.attrs({
    src: Prev,
  })`
    position: absolute;
    top: 899px;
    left: 199px;

`;
const Button = styled.button`
    position: absolute;
    top:422px;
    left:187px;
    width: 68px;
    height: 236px;
    object-fit: contain;
    border-radius: 48px;
    border: solid 3px #50231b;
    background-color: #ffffff;
    text-algin: center;
    outline:0;
`;

const TB = styled.div`
    writing-mode: tb-rl;
    font-size: 25px;
    margin-left:10px;
    margin-top:10px;
    letter-spacing: 3px;
    color: #50231b;
    font-weight: bold;
    z-index:3;

`;
const SearchTitle = styled.div`
@font-face {
    font-family: '210옴니고딕040';
    src: url(${font}) format('truetype');
 }
 font-family: '210옴니고딕040';
 caret-color: black;
    font-size: 30px;
    color: #000000;
    position:absolute;
    top: 174px; 
    left: 486px;
    z-index: 2;
    width: 389px;
`;
const Span = styled.div`
    background-color: #ffde2b;
    color: #000000;
    width: 360px;
    height: 23px;
    position: absolute;
    top: 180px; 
    left: 520px;
    z-index:1;
    `;
export default SelectBookgenre;