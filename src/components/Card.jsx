import React from 'react';
import  styled from "styled-components";
function Card({data}) {
  return (
  <Main>  {data?.map((items)=>{
  return(
<Box key={items.id}> <h2>{items.setup}</h2>
<hr/>
<h4>{items.punchline}😁</h4> </Box>
    );
    })}
    </Main>

  )
}

export default Card

const Main=styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
padding:20px;
margin-top:10px;
margin:5%;

`;
const Box=styled.div`
    height:200px;
    width:275px;
    padding:20px;
    border-radius: 10px;
    background-color:#DFD3C3 ;
    margin-top:10px;
    margin-left:10px;
`;