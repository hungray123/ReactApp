import styled from 'styled-components';
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md'
import picture1 from './image/a3.jpg'

export const SerContainer=styled.div`
  background-image: url(${picture1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 100px;

 display: flex;
 justify-content:center;
 align-items:center;
 padding:0px 30px;
 height:800px;
 position:relative;
 z-index:1;

 @media screen and (max-width:768px){
      height:245px;
    
  }

  @media screen and (max-width:480px){
     height:212px;
  }

`;

export const SerContent=styled.div`
 z-index:3;
 max-width:1200px;
 position:absolute;
 padding:8px 24px;
 display:flex;
 flex-direction:column;
 align-items:center;
 @media screen and (max-width:768px){
      top:20px;
  }

  @media screen and (max-width:480px){
      top:20px;
  }

`
export const SerH1=styled.h1`
 color:white;
 font-size:3rem;
 text-align:center;
 text-shadow: black 0.1em 0.1em 0.2em;

  @media screen and (max-width:768px){
      font-size:24px;
  }

  @media screen and (max-width:480px){
      font-size:18px;
  }
`;
export const SerBtnWrapper =styled.div`
 margin-top:2rem;
 display:flex;
 flex-direction:column;
 align-items:center;
 @media screen and (max-width:768px){
     
      margin-top:8px;
  }

  @media screen and (max-width:480px){
     
      margin-top:8px;

  }
`;
export const ArrowForward =styled(MdArrowForward)`
 margin-left:8px;
 font-size:20px;
 @media screen and (max-width:768px){
    margin-left: 5px;
    /* line-height: 19px; */
    font-size: 12px;
  }
`
export const ArrowRight =styled(MdKeyboardArrowRight)`
 margin-left:8px;
 font-size:20px;
 @media screen and (max-width:768px){
    margin-left: 5px;
    /* line-height: 19px; */
    font-size: 12px;
  }
`
export const SerP =styled.p`
 margin-top:24px;
 color:white;
 font-size:24px;
 text-align:center;
 max-width:600px;
 text-shadow: black 0.1em 0.1em 0.2em;

 @media screen and (max-width:768px){
    padding: 4px 8px;
    font-size: 10px;
  }

  @media screen and (max-width:480px){
      font-size:10px;
      margin-top:5px;
  }
`

