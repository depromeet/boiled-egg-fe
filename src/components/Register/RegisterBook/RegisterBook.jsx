import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Common/header';
import GreenCircle from '../../../img/GreenCircle.png';
import YellowCircle from '../../../img/YellowCircle.png';
import styled from "styled-components";
import SearchBar from './SearchBar';
import Next from '../../../img/next.png';
import font from '../../../font/210옴니고딕020.ttf';
import BooksearchList from './BooksearchList';
import Logo from "../../Common/Logo";
//import SelectedBook from "./SelectedBook";
import axios from 'axios';
import SelectedBook from './SelectedBook';

const http = 'http://boiled-egg-api.jaeyeonling.com:8080';
const title = '{등록된 도서}';
const registerInfo= JSON.parse(localStorage.getItem("regitserInfo"));

class RegisterBook extends Component {
    constructor(props){
        super(props);
        this.state = {
          isToggleOn: true,   
          isSelectOn: true,
        };
    }
    state={
        books:[]
    };
    
    onSearchSubmit = async text =>{
        console.log("연동시작");
        console.log(text);
        const response = await axios.get(http+'/books/search',{
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                },
            params: {
                type: 'TITLE',
                value: text
            }
        }).then(response =>{
            console.log(response.data);
            this.setState({books: response.data})
            this.setState((prevState) => ({
                isToggleOn: false
              }));
        }).catch(error=>{   
            this.setState((prevState) => ({
                isToggleOn: true
              }));
            console.log("검색결과 없음:"+error);
        });
        
        console.log(this.state.books);
    }
   
  
    render() {
        const {books=[]} = this.state;
        return (
            <Fragment>
                <Logo/>
                <Header/>
                <Button>
                    <TB>도서등록하기</TB>
                </Button>
                <SearchBar onSubmit={this.onSearchSubmit} style={{zIndex:1}}/>
                <CircleYellow/>
                <CircleGreen/>
                <ResultBox>
                    {
                        this.state.isToggleOn === true
                        ? <ResultContents>
                            검색결과가 없습니다.
                          </ResultContents>
                        : <BooksearchList books={books}/>
                    }
                </ResultBox>
                  
                <Link to="/selectbookgenre">
                    <Nextbtn/>
                </Link>
            </Fragment>
        );
    }
}

/*const BookList = styled.div`
    position: absolute;
    width: 540px;
    height: 1080px;
    left: 1133px;
    top:0px;
    z-index:100;
`;*/
const ResultContents = styled.div`
    @font-face {
        font-family: '210옴니고딕020';
        src: url(${font}) format('truetype');
     }
    font-size: 26px;
    font-family: '210옴니고딕020';
    color: #707070;
    position: relative;
    top: 524px;
    right: -142px;
    
`;

const Button = styled.button`
    position: absolute;
    top:422px;
    left:187px;
    width: 68px;
    height: 236px;
    object-fit: contain;
    border-radius: 48px;
    border: solid 3px #50231b;
    background-color: #ffffff;
    text-algin: center;
    outline:0;
`;

const TB = styled.div`
    writing-mode: tb-rl;
    font-size: 25px;
    margin-left:10px;
    margin-top:10px;
    letter-spacing: 3px;
    color: #50231b;
    font-weight: bold;
    z-index:3;
  
`;

const CircleGreen = styled.img.attrs({
    src: GreenCircle,
  })`
    position: absolute;
    top: 461px;
    left: 770px;
    z-index: 2;
`;
const CircleYellow = styled.img.attrs({
    src: YellowCircle,
  })`
    position: absolute;
    top: 301.1px;
    left: 528.8px;
    z-index: 1;
`;

const ResultBox = styled.div`
     position: absolute;
     width: 540px;
     height: 1080px;
     left: 1133px;
     top:0px;
     background-color: #fffbeb;
     z-index:1;
`;
const Nextbtn = styled.img.attrs({
    src: Next,
  })`
    position: absolute;
    top: 899px;
    left: 1771px;

`;
export default RegisterBook;