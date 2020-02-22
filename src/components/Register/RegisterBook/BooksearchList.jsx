import React,{Fragment, Component, useState} from 'react';
import styled from 'styled-components';
import font from '../../../font/210옴니고딕040.ttf';
import BookPanel from "./BookPanel"

export function isClick(thumbnail,title,authors,publishedAt,isbn){
    try {
        console.log(thumbnail,title,authors,publishedAt,isbn);
        const publishY = publishedAt.substring(0,4);
        const publishM = publishedAt.substring(5,7);
        const publishsplit = publishY + "." + publishM;
    
        localStorage.setItem(
            "registerInfo",
            JSON.stringify({
              thumbnail: thumbnail,
              title: title,
              authors: authors,
              publishedAt: publishsplit,
              isbn: isbn,
             })
          );  
        } catch (error) {
        this.setState({ error });
      }
    
}

const BooksearchList = props => {
    
    const [int, setIndex] = useState(null);
    const [panel, setPanel] = useState(null);

    const books = props.books.map((book, index)=>{
        function changeColor(i) {
            setIndex(i);
            setPanel(i);
          }

        return (
       
            <Book 
            key={index} title={book.title} 
            onClick={() => {isClick(book.thumbnail,book.title,book.authors,book.publishedAt,book.isbn); changeColor(index);} }
            style={{backgroundColor : int=== index? "white": "#fffbeb", border: int=== index? "solid 4px #ff2e41" : "none", color: int === index? "#50231b": "#000000"
                    , borderStyle: int=== index? "dotted" : 'none'}}
            > 
                <Image src={book.thumbnail} alt="img"/>
                <Title style={{color: int === index? "#50231b": "#000000"}}>{book.title}</Title>
                <Author style={{color: int === index? "#50231b": "#000000"}}>{book.authors}지음 / {book.publisher}</Author>
                <Publishat style={{color: int === index? "#50231b": "#000000"}}>{book.publishedAt}</Publishat>
            </Book>
     
         
        );
    });

    return (
        <Fragment>
            <Wrapper>
                {books}
            </Wrapper>
            <Total>총 {books.length}개의 결과</Total>
            {/*{
            int === panel?  <BookPanel/> : "none" 
            }*/}
           
        </Fragment>
    );
}

const Total = styled.div`
    position: absolute;
    top: 1033.5px;
    left: 363.5px;
    width: 140px;
    font-size: 20px;
    color: #707070;
    z-index:5;
`; 
const Book = styled.div`
    height: 160px;
    //color: ${props => props.isSelectOn? "#ffffff" : "707070"} ;
`;
const Author = styled.div`
    font-size: 22px;
    color: #707070;
    position: relative;
    top: -66px;
    left: 170px;
    height: 318px;
    width: 318px;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    
`
const Title = styled.div`
    @font-face {
        font-family: '210옴니고딕040';
        src: url(${font}) format('truetype');
    }
    font-size: 25px;
    font-family: '210옴니고딕040';
    width: 318px;
    color: #000000;
    position: relative;
    top: -80px;
    left: 170px;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    `;

const Image = styled.img`
    position: relative;
    top: 30px;
    left: 34px;
    height:106px;
    width:106px;
`;
const Publishat = styled.div`
    position: relative;
    top: -345px;
    left: 170px;
    font-size: 22px;
    color: #707070;
    width: 90px; 
    white-space: nowrap; 
    overflow: hidden; 
    
`;
const Wrapper = styled.div`
    position: absolute;
    z-index:5;
    height: 650px;
    width: 540px;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
    width: 16px;  /* 세로축 스크롤바 길이 */
    height: 1080px;  /* 가로축 스크롤바 길이 */
    background-color: #ffde2b;
  }
  &::-webkit-scrollbar-track {
    background-color: #f7f7f7;
    height: 1080px;
  }
  
`;

export default BooksearchList;