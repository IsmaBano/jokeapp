import React from 'react'
import styled from 'styled-components'


function Header({jokedata,filterdata,setfilterdata}) {
  const searchtype=(e)=>{
   const searchval=e.target.value;
   if(searchval==""){
    setfilterdata(null);
   }
   const filter=jokedata?.filter((item)=>
    item.type.toLowerCase().includes(searchval.toLowerCase())
  )
  setfilterdata(filter);
};
 function filterval(val){
  if(val=="All"){
    setfilterdata(jokedata);
   }
   else{
   const filter=jokedata?.filter((item)=>
    item.type.toLowerCase().includes(val.toLowerCase())
  )
  setfilterdata(filter);
}
 }
  return (
   <>
   <Main>
    <Logo><h1>Joke App</h1></Logo>
   <Nav>
    <Box>
      <input type='search' onChange={searchtype} placeholder='Search the type' />
    <ul>
      <li><Button onClick={()=> filterval("All")}>All</Button></li>
      <li><Button onClick={()=> filterval("General")}>General</Button></li>
      <li><Button onClick={()=> filterval("Programming")}>Programming</Button></li>
    </ul>
    </Box>
   </Nav>
   </Main>
   </>
  )
}

export default Header

const Main=styled.div`
display:flex;
justify-content: left;
background-color:#C5705D;
padding:10px;
`;

const Nav=styled.div`
display:flex;
justify-content:center;
`;
const Box=styled.div`
  padding:10px;
  ul{
  display:flex;
  gap:10px;
  list-style: none;
  font-weight: bolder;
  }
  input{
  height:50px;
  max-width:300px;
  border-radius:5px;
  font-size:20px;
  }
`;
const Logo=styled.div`
display:flex;
font-weight:bold;
font-family: "Sankofa Display", sans-serif;
  font-style: normal;
width:40%;
`;

const Button=styled.button`
 border: 2px solid #b34e37 ;
 font-weight:bold;
 cursor:pointer;
 &:hover{
 background-color:#b34e37;
 }
`;

