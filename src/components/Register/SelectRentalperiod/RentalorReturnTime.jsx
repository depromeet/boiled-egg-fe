import React, { Component, Fragment } from 'react';
import RentalTime from './RentalTimeInputBox';
import ReturnTime from './ReturnTimeInputBox';
import styled from 'styled-components';

class RentalorReturnTime extends Component {
    render() {
        return (
            <Fragment>
                <Rental>대여 시간</Rental>
                    <RentalTime/>
                <Return>반납 시간</Return>
                    <ReturnTime/>
                
            </Fragment>
        );
    }
}

const Rental = styled.div`
    position: absolute;
    top: 461px;
    left: 1026px;
    font-size: 24px;
    color: #000000;
    width: 200px;
`;
const Return = styled.div`
    position: absolute;
    top: 672px;
    left: 1026px;
    font-size: 24px;
    color: #000000;
    width: 200px;
    `;
export default RentalorReturnTime;