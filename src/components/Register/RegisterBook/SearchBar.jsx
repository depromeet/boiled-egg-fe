import React,{Fragment, Component} from "react";
import styled from "styled-components";
import appleFont from '../../../font/AppleSDGothicNeoM.ttf';
import * as func from './BooksearchList.jsx';


class SearchBar extends Component {
    state = {text: ''};
    constructor(props){
        super(props);
        this.state = {
          isToggleOn: true,
        };
    }
    onFormSubmit = e => {
        console.log(this.state.text);
        e.preventDefault();
        this.props.onSubmit(this.state.text);
        
    }

    render(){
        return(
            <Wrapper isToggleOn={this.state.isToggleOn}>
            <SearchTitle>
                1. 등록할 도서를 정해주세요.
            </SearchTitle>
                <Span/>
                    <form onSubmit = {this.onFormSubmit}>
                    <SearchBox type="text" value={this.state.text} 
                    onChange={(e) => this.setState({text: e.target.value})} style={{outline: 'none', color:'black'}}/>
                        <SearchButton>검색</SearchButton>
                    </form>
            </Wrapper>
    
        );
    }
       
}
const Wrapper = styled.div`
    position: absolute;
    top:  ${props => props.isToggleOn? "":"-100px"}
`;

const Span = styled.div`
    background-color: #ffde2b;
    color: #000000;
    width: 300px;
    height: 23px;
    position: absolute;
    top: 468px; 
    left: 392px;
    z-index:1;
    `;
const SearchButton = styled.button`
    position: absolute;
    top: 537px;
    left: 879px;
    width: 114px;
    height: 68px;
    border-radius: 48px;
    background-color: #ff2e41;
    border: none;
    z-index: 4;
    color: white;
    font-size: 24px;
    outline:0;
`;
const SearchTitle = styled.div`
    font-size: 30px;
    color: #000000;
    position:absolute;
    top: 464px; 
    left: 363px;
    font-weight: bold;
    z-index: 2;
    width:384px;
`;
const SearchBox = styled.input`
    position:absolute;
    top: 520px; 
    left: 364px;
    width: 623px;
    height: 100px;
    border: solid 3px #4bab3f;
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

export default SearchBar;
