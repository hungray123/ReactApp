import styled from 'styled-components';
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md'

export const HeroContainer=styled.div`
 background: #0c0c0c;
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

export const HeroBg=styled.div`
   position:absolute;
   top:0;
   bottom:0;
   left:0;
   right:0;
   width:100%;
   height:100%;
   overflow: hidden;
 `;

export const VideoBg=styled.video`
 width:100%;

 height:auto;//aaa

 --o-object-fit:cover;
 object-fit:cover;
 background:#232a34;

`;
export const HeroContent=styled.div`
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
export const HeroH1=styled.h1`
 color:white;
 font-size:3rem;
 text-align:center;

  @media screen and (max-width:768px){
      font-size:24px;
  }

  @media screen and (max-width:480px){
      font-size:18px;
  }
`;
export const HeroBtnWrapper =styled.div`
 margin-top:2rem;
 display:flex;
 flex-direction:column;
 align-items:center;
 @media screen and (max-width:768px){
      font-size:24px;
      margin-top:1rem;
  }

  @media screen and (max-width:480px){
      font-size:18px;
      margin-top:1rem;
  }
`;
export const ArrowForward =styled(MdArrowForward)`
 margin-left:8px;
 font-size:20px;
`
export const ArrowRight =styled(MdKeyboardArrowRight)`
 margin-left:8px;
 font-size:20px;
`
export const HeroP =styled.p`
 margin-top:24px;
 color:white;
 font-size:24px;
 text-align:center;
 max-width:600px;

 @media screen and (max-width:768px){
      font-size:24px;
  }

  @media screen and (max-width:480px){
      font-size:18px;
  }
`

