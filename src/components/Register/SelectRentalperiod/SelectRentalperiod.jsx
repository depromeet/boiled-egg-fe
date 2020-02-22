import React, { Component, Fragment } from 'react';
import styled from "styled-components";
import Logo from "../../Common/Logo";
import Header from '../../Common/header';
import Prev from '../../../img/prev.png';
import font from '../../../font/210옴니고딕040.ttf';
import RentalPlaceInput from './RentalPlaceInput';
import ReturnPlaceInput from './ReturnPlaceInput';
import Calendar from './Calendar';
import omniFont from '../../../font/210옴니고딕040.ttf';
import RentalTime from './RentalorReturnTime';

class SelectRentalperiod extends Component {
    goBack = () =>{
        this.props.history.goBack();
    }
    
    render() {
        return (
            <Fragment>
                <Logo/>
                <Header/>
                <Button>
                    <TB>대여기간선택</TB>
                </Button>
                <SearchTitle>
                3. 대여 기간,날짜,장소를 정해주세요.
                </SearchTitle>
                <Span/>
                <RentalPlaceInput/>
                <ReturnPlaceInput/>
                <Calendar/>
                <RentalTime/>
                <Prevbtn onClick={this.goBack}/>
                <CompleteButton>등록완료</CompleteButton>
            </Fragment>
        );
    }
}
const CompleteButton = styled.button`
    width: 138px;
    height: 64px;
    position: absolute;
    top: 885px;
    left: 1725px;
    background-color:#ff2e41;
    color: #ffffff;
    @font-face {
        font-family: '210옴니고딕040.ttf';
        src: url(${omniFont}) format('truetype');
     }
     font-family: '210옴니고딕040.ttf';
    font-size: 24px;
    outline:0;
    border:0;
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
    width: 28px;

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
    width: 500px;
`;
const Span = styled.div`
    background-color: #ffde2b;
    color: #000000;
    width: 460px;
    height: 24px;
    position: absolute;
    top: 178px; 
    left: 520px;
    z-index:1;
    `;
export default SelectRentalperiod;