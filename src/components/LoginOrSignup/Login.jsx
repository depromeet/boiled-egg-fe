import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Common/Logo";
import LoginBackground from "./LoginBackground";
import GoogleLogin from "./LoginGoogle";
import NaverLogin from "./LoginNaver";
import back from "../../img/back.png";
import styled from "styled-components";
import Font from "../Common/FontStyle.js";

class Login extends Component {
	render() {
		return (
			<Wrapper>
				<Logo />
				<Font />
				<LoginBackground />
				<FontLogin>로그인</FontLogin>
				<Link to="/">
					<Back />
				</Link>
				<NaverLogin />
				<GoogleLogin />

				<Link to="/signup">
					<SignupLink>아직 회원이 아니신가요?</SignupLink>
				</Link>
			</Wrapper>
		);
	}
}
const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
`;
const FontLogin = styled.div`
	position: absolute;
	top: 304px;
	right: 430px;
	font-size: 38px;
	font-weight: 600;
	line-height: 1.2;
	z-index: 2;
	color: #50231b;
`;
const SignupLink = styled.div`
	position: absolute;
	top: 708.5px;
	right: 404px;
	font-size: 15px;
	color: #00b46a;
	font-weight: 500;
	border-bottom: 1.2px solid #00b46a;
	padding-bottom: 3px;
	width: 170px;
	text-align: center;
	z-index: 2;
`;
const Back = styled.img.attrs({
	src: back
})`
	position: absolute;
	top: 527.6px;
	left: 997.8px;
	z-index: 3;
`;

export default Login;
