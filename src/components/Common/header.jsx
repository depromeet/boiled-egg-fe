import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import menubar from "../../img/menubar.png";
import close_arrow from "../../img/closeArrow.png";
import open_arrow from "../../img/openArrow.png";
import profile from "../../img/profile.png";
import Logo from "./Logo";
import alarm from "../../img/alarm.png";
import styled from "styled-components";
import Font from "./FontStyle.js";

const imagesPath = {
    on: open_arrow,
    off: close_arrow
};
// const userInfo = JSON.parse(localStorage.getItem("userInfo"));
// const username = userInfo.username;
// const useremail = userInfo.useremail;

class Header extends Component {
    // state={
    //   isLoginOn:false,
    // }
    constructor(props) {
        super(props);
        this.doSlide = this.doSlide.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            isToggleOn: true,
            isLoginOn: true
        };
    }
    componentDidMount() {
        setTimeout(() => {
            if (localStorage.getItem("userInfo") === null) {
                this.setState(prevState => ({
                    isLoginOn: !prevState.isLoginOn
                }));
            } else {
                console.log(
                    "로컬스토리지에 값이 존재함" + this.state.isLoginOn
                );
            }
        }, 1000);
    }

    doSlide = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    };
    logout = () => {
        if (this.state.isLoginOn === false) {
            this.setState((prevState, props) => ({
                isLoginOn: !prevState.isLoginOn
			}));
			window.location.href = "/login";
        } else {
            //로컬 스토리지에 값이 존재함
            console.log(this.state.isLoginOn);

            this.setState(prevState => ({
                isLoginOn: !prevState.isLoginOn
            }));

            localStorage.removeItem("userInfo");
			window.location.href = "/";
        }
    };

    getImageName = () => (this.state.isToggleOn ? "on" : "off");

    render() {
        const imageName = this.getImageName();

        return (
            <Fragment>
                <Background isToggleOn={this.state.isToggleOn} />
                <Nav isToggleOn={this.state.isToggleOn}>
                    <Logo isToggleOn={this.state.isToggleOn} />
                    <Font />
                    <Profile />
                    <Button
                        src={imagesPath[imageName]}
                        onClick={this.doSlide}
                    />
                    <Menubar />

                    <Login onClick={this.logout}>
                        {this.state.isLoginOn ? "로그아웃" : "로그인"}
                    </Login>
                    <Container>
                        <MenuItem>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Item>나의 서재</Item>
                            </Link>
                            <Link
                                to="/registerBook"
                                style={{ textDecoration: "none" }}
                            >
                                <Item>도서 등록</Item>
                            </Link>
                            <Link to="/test" style={{ textDecoration: "none" }}>
                                <Item child3>내 위치 설정</Item>
                            </Link>
                            <Link to="/test" style={{ textDecoration: "none" }}>
                                <Item>카테고리</Item>
                            </Link>
                        </MenuItem>
                    </Container>

                    <Link to="/">
                        <Alarm />
                    </Link>
                </Nav>
            </Fragment>
        );
    }
}

const Background = styled.div`
    width: 1920px;
    height: 100%;
    position: absolute;
    top: 0px;
    background-color: ${props =>
        props.isToggleOn ? "null" : "rgba(255,255,255,0.7)"};
    z-index: ${props => (props.isToggleOn ? "null" : "40")};
`;

const Nav = styled.div`
    position: fixed;
    top: 0px;
    margin: 0;
    padding: 0;
    left: ${props => (props.isToggleOn ? "-610px" : "0px")};
    transition-property: left;
    transition-duration: 0.8s;
    transition-timing-function: ease;
    z-index: ${props => (props.isToggleOn ? "6" : "100")};
`;

const Profile = styled.img.attrs({
    src: profile
})`
    position: absolute;
    left: 217.7px;
    top: 132.1px;
    width: 149.8px;
    height: 149.8px;
`;
const Button = styled.img`
    position: absolute;
    left: 639px;
    top: 522.4px;
`;

const Menubar = styled.img.attrs({
    src: menubar
})`
    width: 710.3px;
    height: 1080px;
    margin-right: -100px;
    z-index: ${props => (props.isToggleOn ? "6" : "100")};
`;
const Login = styled.p`
    position: absolute;
    left: 260px;
    top: 310.7px;
    font-size: 21px;
    border-bottom: 2.8px solid #00b46a;
    padding-bottom: 3px;
    width: ${props => (props.isLoginOn ? "70" : "82")};
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
    list-style: none;
`;
const Item = styled.li`
    list-style: none;
    margin-bottom: 68.9px;
    position: relative;
    left: ${props => (props.child3 ? "-17px" : "0px")};
`;
const Alarm = styled.img.attrs({
    src: alarm
})`
    position: absolute;
    left: 32.5px;
    bottom: 48.1px;
    width: 35.4px;
`;

export default Header;
