import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Labs from './components/Labs';
import Support from './components/Support';
import NotFound from './components/NotFound';
import { NavLink, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <ul>
        <li>
         <NavLink to="/">Home</NavLink> 
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
        <NavLink to="/support"> support</NavLink>
        </li>
        <li>
        <NavLink to="/labs"> labs</NavLink>
        </li>
        {/* <li>
        //<NavLink to="*">not found</NavLink>
        </li> */}


      </ul>
      
      <Routes>
        
        { <Route path="/" element={<Main></Main>}/> /*ye parent route hai jisme Outlet hai jisse saare child route render honge */}
        { <Route index element={<Home></Home>}></Route> /* ye default route set krta hai*/  }
        <Route path="/about" element={<About></About>}/>
         <Route path="/labs" element={<Labs></Labs>}/>
        <Route path="/support" element={<Support></Support>}/>
        <Route path="*" element={<NotFound></NotFound>}/>
        
       
      
      
      </Routes>
      
    </div>
  );
}

export default App;
