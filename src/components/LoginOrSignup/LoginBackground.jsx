import React, { Component } from "react";
import styled from "styled-components";
import graphicTV from "../../img/graphicTV@1x.png";

class LoginBackground extends Component {
	render() {
		return (
			<Background>
				<GraphicTV />
			</Background>
		);
	}
}

const Background = styled.div`
	background-color: #ffde2b;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
	bottom: 0px;
	z-index: 1;
`;
const GraphicTV = styled.img.attrs({
	src: graphicTV
})`
	width: 707.8px;
	height: 593.8px;
	position: absolute;
	top: 125.5px;
	left: 155px;
`;

export default LoginBackground;
