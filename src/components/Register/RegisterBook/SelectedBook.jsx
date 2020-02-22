import React, { Component, Fragment } from 'react';
import styled from "styled-components";
import font from '../../../font/210옴니고딕040.ttf';

// const userInfo = JSON.parse(localStorage.getItem("userInfo"));
// const username = userInfo.username;
// const useremail = userInfo.useremail;
const title = '{등록된 도서}';
const info = JSON.parse(localStorage.getItem("regitserInfo"));

class SelectedBook extends Component {
    render() {
        return (
            <Fragment>
                { localStorage.getItem("regitserInfo") === null || "" || undefined
                    ?
                        console.log('')
                    :
                    <div>
                    <Title>{title}</Title>
                    <Container>
                        <Image src={info.thumbnail} alt="img"/>
                        <BookTitle>{info.title}</BookTitle>
                        <Author>{info.authors}지음 / {info.publisher}</Author>
                        <Publishat>{info.publishedAt}</Publishat>
                    </Container>
                    </div>
                }
               
            </Fragment>
        );  
    }
}
const Image = styled.div`
    width: 188px;
    height: 188px;
`;
const BookTitle = styled.div`
    width: 188px;
    height: 188px;
`;
const Author = styled.div`
    width: 188px;
    height: 188px;
`;
const Publishat = styled.div`
    width: 188px;
    height: 188px;
`;
const Title = styled.div`
    @font-face {
        font-family: '210옴니고딕040';
        src: url(${font}) format('truetype');
    }
    font-family: '210옴니고딕040';
    position:absolute;
    top:508px;
    left:591px;
    width: 182px;
    height: 35px;
    font-size: 30px;
    color: #000000;
    z-index:4;
`;
const Container = styled.div`
    position:absolute;
    top:571px;
    left:363px;
    width: 648px;
    height: 260px;
    border: solid 3px #00b46a;
    background-color: #ffffff;
    z-index:4;
`;
export default SelectedBook;