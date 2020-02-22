import React, { Component, Fragment} from 'react';
import DateRange from './DateRange';
import styled from 'styled-components';



class Calendar extends Component {
    
      render(){
        return (
         <Fragment>
          <Span>대여 / 반납 날짜</Span>
          <Calendarlocation>
            <DateRange/>
          </Calendarlocation>
          </Fragment>
        )
      }
}
const Calendarlocation = styled.div`
    *{
      color:#000000;
      font-size: 20px;
     
      
    }
    .DateRangePicker{
      width:540px;
      height: 20px;
  
    }
    
    .DateRangePicker__MonthDates{
      width: 500px;
      height: 340px;
    }
    .DateRangePicker__MonthHeader{
      left: 120px;
    }
   
   
    position: absolute;
    top: 505px;
    left: 470px;
    
`;
const Span = styled.div`
    width: 175px;
    height: 27px;
    font-size: 24px;
    color: #000000;
    position:absolute;
    top:461px;
    left: 486px;
`;
const calendarstyle = styled.div`
    width: 509px;
    position: absolute;
    top:505px;
    left:486px;
`;

export default Calendar;