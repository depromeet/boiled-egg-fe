import React, { Component, Fragment } from 'react';
import styled from "styled-components";
import Checkbox from './Checkbox';


class Bookgenre extends Component {
    state ={checked: false, value:""};

    handleCheckboxChange = () => {
        console.log("check");
        this.setState(initialState=>({ 
            
            checked: !initialState.checked}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
      }
    render() {
        const category_first = ['소설','시/에세이','경제경영','자기계발','인문','역사/문화'
    ,'정치/사회','건강/의학'];
        const category_second = ['교재/수험서','IT/프로그래밍','과학/공학','예술/대중문화'
    ,'종교','가정/생활/요리','여행/취미','매거진'];
        const category_third = ['아동','유아','e 오디오북','북모닝CEO'
    ,'외국도서','국어/외국어','청소년교양'];

        const categorylist_first = category_first.map(
        (category_first,index) => (
            <div key={index}>
            <Checkbox
                checked={this.state.checked}
                value={this.state.value} 
                onChange={this.handleCheckboxChange}/>
            <Category key={index}>{category_first}</Category></div>)
        );
        const categorylist_second = category_second.map(
        (category_second,index) => (
            <div key={index}>
            <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}/>
            <Category  key={index}>{category_second}</Category></div>)
        );
        const categorylist_third = category_third.map(
        (category_third,index) => (
            <div key={index}>
            <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}/>
            <Category  key={index}>{category_third}</Category></div>)
        );
       

        return (
            <Fragment>
                <BackgroudBox/>
                <form onSubmit={this.onSubmit}>
                    <FormCheck>
                        <Label
                        onClick={this.handleCheckboxChange}>
                             {categorylist_first}
                        </Label>
                        <Label>
                             {categorylist_second}
                        </Label>
                        <Label>
                            {categorylist_third}
                        </Label>
                    </FormCheck>
                </form>
                <MultiSelect>복수선택가능</MultiSelect>
            </Fragment>
        );
    }
}

const Category = styled.div`
    color:#000000;
    font-size:26px;
    position: relative;
    left: -30px;
    top: 10px;
`;

const Label = styled.div`
    position:absolute;
    top: 260px;
    left: 675px;
    z-index:3; 
    
`;
const FormCheck = styled.div`
    width:230px;
    height: 1080px;
    & ${Label}:nth-child(2){
    position:relative;
    left: 980px;
    top: 255px;
    }
    & ${Label}:nth-child(3){
    position:relative;
    top: -369px;
    left: 1320px;
    }
`;
// const FormCheck = styled.div`
//     width:230px;
//     position:absolute;
//     top: 319px;
//     left: 675px;
//     z-index:3;
//     line-height: 70px;
//     height: 100%;
    
//     & ${Label}:nth-child(2){
//         position:relative;
//         top: -570px;
//         left: 200px;
//         height:100%;
        
//     }
//     & ${Label}:nth-child(3){
//         position:relative;
//         top: -1100px;
//         left: 500px;
//     }

// `;
const BackgroudBox = styled.div`
    width:1048px;
    height: 716px;
    position: absolute;
    background-color: #fffbeb;
    top: 233px;
    left: 486px;
    z-index:2;
`;
const MultiSelect = styled.div`
    width: 118px;
    font-size:20px;
    position: absolute;
    color: #707070;
    top: 965px;
    left: 1416px;
    z-index:2;
`;

export default Bookgenre;