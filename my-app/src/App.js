import logo from './logo.svg';
import './App.css';
import Item from './components/item';
import ItemDate from './components/ItemDate';
import { useState } from 'react';

function App() {
  const[dae , setDae]=useState('mon');
  function clickHandler()
{
  console.log("chl rha hai");
  setDae("none");
  
}
function chand()
{
  console.log("chl chl");
  
  
}

  
  return (
   <div>
    <Item name="Nirmal"></Item>
    <ItemDate day={dae}  date="20" ></ItemDate>
    <button type="submit" onClick={clickHandler}>Submit</button>
    <button type="submit" onClick={chand}>Accept</button>
    <div className="App">Hello Ji</div>
    
   </div>
  );
}

export default App;
