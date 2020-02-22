import React, { Component } from 'react';
import styled from "styled-components";
import add from "../../../img/add.png";

class RentalTimeInputBox extends Component {
    constructor(props){
        super(props);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
        this.state = {
          isToggleOn_start: true, 
          isToggleOn_end: true, 
          isClickOn: true,
          start: "",
          end: "",
     
        };
    }
    
    onChangeColor = () => {
        this.setState(prevState => ({
            isClickOn: !prevState.isClickOn,
        }));
    }
    


    //숫자 입력 제한 
    handleChangeStart = event => {
        const { value, maxLength } = event.target;
        const message = value.slice(0, maxLength);
        this.setState({
            start: message,
          });
          this.state.start === "" || this.state.isToggleOn_start === false ? 
            console.log("색 변경")
          :
          this.setState(prevState => ({
            isToggleOn_start: !prevState.isToggleOn_start,
          }))
          
        }
    handleChangeEnd = event => {
        const { value, maxLength } = event.target;
        const message = value.slice(0, maxLength);
        this.setState({
            end:message
          });
          this.state.end === "" || this.state.isToggleOn_end === false ? 
           console.log("색 변경")
          :
          this.setState(prevState => ({
           isToggleOn_end: !prevState.isToggleOn_end,
          }))
          
        }
    render() {
        return (
            <Wrapper>
                <Am onClick={this.onChangeColor} isClickOn={this.state.isClickOn} disabled={this.state.isClickon}>오전</Am>
                <Pm onClick={this.onChangeColor} isClickOn={this.state.isClickOn} disabled={this.state.isClickOn}>오후</Pm>
                <Input/>
                <StartInput type="number" maxLength="1" value={this.state.start} onChange={this.handleChangeStart} />
                    <StartHour isToggleOn_start={this.state.isToggleOn_start} onChange={this.handleChangeStart}>시
                        <Hypen>-</Hypen>
                    </StartHour>
                <EndInput type='number'maxLength="1" value={this.state.end} onChange={this.handleChangeEnd} />
                    <EndHour isToggleOn_end={this.state.isToggleOn_end} onChange={this.handleChangeEnd}>시</EndHour>
                <Addbtn/>
            </Wrapper>
        );
    }
}
const Addbtn = styled.img.attrs({
  src: add
})`
  position: absolute;
  left:1258px;
  top:605px;

`;
const Wrapper = styled.div`
    *{
        color: #000000;
    }
    
`;
const Hypen = styled.div`
    position: absolute;
    top: -1px;
    left: 44px;
    color: #000000;
`;
const Input = styled.div`
  position: absolute;
  top:505px;
  left:1326px;  
  width: 208px;
  height: 64px;
  border: solid 2px #000000;
  background-color: #ffffff;
`;
const Am = styled.button`
  width: 122px;
  height: 68px;
  border: solid 2px #000000;
  position: absolute;
  top:505px;
  left:1029px;
  font-size: 25px;
  outline:none;
  background-color: ${props => props.isClickOn? "#ffffff" : "#ffde2b"}
`;
const Pm = styled.button`
  width: 122px;
  height: 68px;
  border: solid 2px #000000;
  position: absolute;
  top:505px;
  left:1166px;
  font-size: 25px;
  outline:none;
  background-color: ${props => props.isClickOn?  "#ffde2b" :"#ffffff"  }

`;
const StartInput = styled.input`
  position: absolute;
  top:526px;
  left:1364px;
  width: 27px;
  height: 29px;
  font-size: 25px;
  outline: none;
  border: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
`;
const EndInput = styled.input`
  position: absolute;
  top:526px;
  left:1456px;
  width: 25px;
  height: 29px;
  font-size: 25px;
  outline: none;
  border: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
`;
const StartHour = styled.div`
  position: absolute;
  top:527px;
  left:1381.3px;
  font-size: 25px;
  color: ${props => props.isToggleOn_start? "#bcbcbc" : "#000000"}; 
`;

const EndHour = styled.div`
    position: absolute;
    top:527px;
    left:1474px;
    font-size: 25px;
    color: ${props => props.isToggleOn_end? "#bcbcbc" : "#000000"}; 
    `;
export default RentalTimeInputBox;