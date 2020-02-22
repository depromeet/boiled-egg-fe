import React, { Component } from 'react';
import styled from 'styled-components';
import Checked from '../../../img/checked.png';

const Checkbox = ({className, checked, ...props}) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props}/>
        <StyledCheckbox checked={checked}>
           <Icon viewBox="0 0 38 38"/>
        </StyledCheckbox>
    </CheckboxContainer>
)
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.div`
    opacity: 0.8;
    width: 38px;
    height: 38px;
    position: absolute;
    left: 7px;
    top: 7px;
    z-index: 4;
    background-color:#ff2e41;
`;
const StyledCheckbox = styled.div`
    display:inline-block;
    width: 38px; 
    height: 38px;
    background-color:#ffffff;
    cursor: pointer;
    border: solid 2px #1c3931;
    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 3px pink;
      }
        ${Icon} {
        visibility: ${props => (props.checked ? 'visible' : 'hidden')}
      }
      z-index: 4;
`;
const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    position: relative;
    top: 50px;
    left: -100px;
    z-index:5; 
    
`;

export default Checkbox;