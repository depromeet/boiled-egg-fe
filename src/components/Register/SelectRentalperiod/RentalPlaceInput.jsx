import React, { Component } from 'react';
import styled from 'styled-components';
import appleFont from '../../../font/AppleSDGothicNeoM.ttf';

class RentalPlaceInput extends Component {
    state = {text: ''};

    onFormSubmit = e => {
    console.log(this.state.text);
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    
}
    render() {
        return (
            <div>
            <Span>대여 장소(직접입력)</Span>
            <form onSubmit = {this.onFormSubmit}>
                        <Input type="text" value={this.state.text} 
                        onChange={(e) => this.setState({text: e.target.value})} style={{outline: 'none', color:'black'}}/>
                        </form>
        </div>
        );
    }
}

const Span = styled.div`
    font-size: 24px;
    color: #000000;
    width:300px;
    position:absolute;
    top:269px;
    left: 486px;
`;
const Input = styled.input`
    position:absolute;
    top: 313px; 
    left: 486px;
    width: 476px;
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

export default RentalPlaceInput;