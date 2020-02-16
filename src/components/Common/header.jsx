import React, {Component, Fragment } from "react";
import {Link} from 'react-router-dom';
import menubar from "../../img/menubar.png";
import close_arrow from "../../img/closeArrow.png";
import open_arrow from "../../img/openArrow.png";
import profile from "../../img/profile.png";
import Logo from "./Logo";
import alarm from "../../img/alarm.png";
import styled from "styled-components";
import Font from'./FontStyle.js';

const imagesPath = {
  on: open_arrow,
  off: close_arrow
}

class Header extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true,
    };
    this.doSlide = this.doSlide.bind(this);
    
  }
  
  doSlide = () =>{
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
   }
  

  getImageName = () => this.state.isToggleOn ? 'on' : 'off';

  render(){
    const imageName = this.getImageName();
    
    return (
      <Fragment>
      <Background isToggleOn={this.state.isToggleOn}/>
       <Nav isToggleOn={this.state.isToggleOn}>
        <Logo isToggleOn={this.state.isToggleOn}/>
          <Font/>
          <Profile/>  
          <Button src ={imagesPath[imageName]} onClick={this.doSlide}/>
          <Menubar/> 
          
          <Link to = "login">
            <Login>로그인</Login>
          </Link>
          <Container>
            <MenuItem>
              <Link to="/" style={{textDecoration: 'none'}}>
                <Item>나의 서재</Item>
              </Link>
              <Link to="/registerBook" style={{textDecoration: 'none'}}>
                <Item>도서 등록</Item>
              </Link >
              <Link to="/test" style={{textDecoration: 'none'}}>
                <Item child3>내 위치 설정</Item>
              </Link>
              <Link to="/test" style={{textDecoration: 'none'}}>
                <Item>카테고리</Item>
              </Link>
             

            </MenuItem>
          </Container>

          <Link to="/">
            <Alarm/>
          </Link>
        
      </Nav>
      </Fragment>
    );
  }
}

const Background = styled.div`
  width: 1920px;
  height: 1080px;
  position:absolute;
  top: 0px;
  background-color: ${props => props.isToggleOn? "null" : "rgba(255,255,255,0.7)"};
  z-index: ${props => props.isToggleOn? "null" : "40"};
  `;

const Nav = styled.div`
  position: fixed;
  top: 0px; 
  margin: 0;
  padding:0;
  left: ${props => props.isToggleOn ? "-610px" : "0px"}; 
  transition-property: left;
  transition-duration: 0.8s;
  transition-timing-function: ease;
  z-index: ${props=>props.isToggleOn? "1":"100"};

`;

const Profile = styled.img.attrs({
  src: profile
})`
  position: absolute;
  left:217.7px;
  top:132.1px;
  width: 149.8px;
  height: 149.8px;

`;
const Button = styled.img`
  position: absolute;
  left:639px;
  top:522.4px;

`;

const Menubar = styled.img.attrs({
  src:menubar
})`
  width: 710.3px;
  height: 1080px;
  margin-right:-100px;
`;
const Login = styled.p`
  position: absolute;
  left:260px;
  top:310.7px;
  font-size: 21px;
  border-bottom: 2.8px solid #00b46a;
  padding-bottom: 3px;
  width: 70px;
  text-align: center;
 `;
const Container = styled.nav`
  position: absolute;
  top: 464.3px;
  left: 197px;
  width: 300px;
  font-size: 28px;
  
`;  
const MenuItem = styled.ul`
  list-style:none; 
`;
const Item = styled.li`
  list-style: none;
  margin-bottom: 68.9px;
  position: relative;
  left: ${props=>props.child3 ? "-17px": "0px"};
`;
const Alarm = styled.img.attrs({
  src: alarm
})`
  position: absolute;
  left:32.5px;
  bottom:48.1px;
  width:35.4px;
`;




export default Header;