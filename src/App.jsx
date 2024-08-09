import { useEffect,useState} from 'react';
import './App.css';
import Header from './components/Header';
import Card from "./components/Card";
import Footer from './components/Footer';

function App() {
  const [jokedata,setjokedata]=useState(null);
  const [filterdata,setfilterdata]=useState(null);
useEffect(()=>{
async function fetchdata() {
  const response=await fetch("https://official-joke-api.appspot.com/jokes/ten");
  const data=await response.json();
  setjokedata(data);
  console.log(jokedata);
  setfilterdata(data);
}
fetchdata();

},[])
  
  return (
    <>
      <Header jokedata={jokedata} filterdata={filterdata} setfilterdata={setfilterdata} />
      <Card data={filterdata}/>
      <Footer/>
    </> 
  
  );
}

export default App;
//type All general programming 