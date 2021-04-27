import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Button=styled(Link)`
 border-radius:50px;
 background: ${({primary})=>(primary ? '#01BF71':'#010606')};
 white-space:nowrap;
 padding:${({big})=>(big?'16px 48px':'14px 25px')};
 color: ${({dark})=>(dark?'#010606':'#fff')};
 font-size: ${({fontBig})=>(fontBig?'20px':'16px')};
 outline:none;
 border:none;
 cursor: pointer;
 display:flex;
 justify-content:center;
 align-items:center;
 transition: all 0.2s ease-in-out;
 text-decoration:none;
 &:hover{
     transition:all 0.2s ease-in-out;
     background: ${({primary})=>(primary ? '#0099FF':'#fff')};
     color:#FF0033;
 }
 @media screen and (max-width:768px){
     padding: 4px 8px;
     font-size:11px;

  }
 
`