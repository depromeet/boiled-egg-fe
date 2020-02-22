import React, { Component } from 'react';
import styled from "styled-components";
import font from '../../../font/210옴니고딕040.ttf';

const title = '{등록된 도서}';

class BookPanel extends Component {
    render() {
        return (
            <Wrapper>
                <Title>{title}</Title>
            </Wrapper>
        );
    }
}
const Title = styled.div`
    @font-face {
        font-family: '210옴니고딕040';
        src: url(${font}) format('truetype');
    }
    font-family: '210옴니고딕040';
    width: 182px;
    height: 35px;
    font-size: 30px;
    color: #000000;
    z-index: 7;
`;
const Wrapper = styled.div`
    position: absolute;
    top:508px;
    left: -500px;
    z-index: 7;
`;
export default BookPanel;