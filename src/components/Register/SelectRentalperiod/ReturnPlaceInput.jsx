import React, { Component } from 'react';
import styled from 'styled-components';
import appleFont from '../../../font/AppleSDGothicNeoM.ttf';
import omniFont from '../../../font/210옴니고딕040.ttf';

class ReturnPlaceInput extends Component {
    state = {text: ''};

    onFormSubmit = e => {
    console.log(this.state.text);
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    
}
    render() {
        return (
            <div>
            <Span>반납 장소</Span>
            <Identify>대여장소와 동일</Identify>
            <form onSubmit = {this.onFormSubmit}>
                        <Input type="text" value={this.state.text} 
                        onChange={(e) => this.setState({text: e.target.value})} style={{outline: 'none', color:'black'}}/>
                        </form>
        </div>
        );
    }
}
const Identify = styled.button`
    position:absolute;
    top:259px;
    left:1352px;
    width: 186px;
    height: 44px;
    font-size: 20px;
    border:0;
    outline:0;
    @font-face {
        font-family: '210옴니고딕040.ttf';
        src: url(${omniFont}) format('truetype');
     }
     font-family: '210옴니고딕040.ttf';
     color: #ffffff;
     background-color: #00b46a;
`;
const Span = styled.div`
    font-size: 24px;
    color: #000000;
    width:300px;
    position:absolute;
    top:269px;
    left:1026px;
`;
const Input = styled.input`
    position:absolute;
    top: 313px; 
    left: 1026px;
    width: 485px;
    height: 78px;
    border: solid 2px #000000;
    background-color: #ffffff;
    z-index: 4;
    padding-left: 24px;
    font-size: 35px;
    color: #000000;
    @font-face {
        font-family: 'AppleSDGothicNeo';
        src: url(${appleFont}) format('truetype');
     }
     font-family: 'AppleSDGothicNeo';
     caret-color: black;

`;

export default ReturnPlaceInput;