import {useState} from "react";
import {Route,Routes,NavLink} from "react-router-dom";
import Home from "./Components/Home";
import Array from "./Components/Array";
import LinkedList from "./Components/LinkedList";
import SingleList from "./Components/SingleList";
import DoubleList from "./Components/DoubleList";
import Stack from "./Components/Stack";
import Queue from "./Components/Queue";
import Trees from "./Components/trees";
import Hashtable from "./Components/hashtable";
import Heap from "./Components/Heap";
import Graph from "./Components/Graph";
import {AiOutlineMenu} from "react-icons/ai"
import {StyledContainer} from "./ComponentsStyle/Container.style"

function App() {

  return (
    <section className="container">
      
      <nav>
      
      <div className="homeContainer">
        <div className="homeItem">
          <NavLink className="navlink" style={{padding:"1vh"}} to="/">Algomatron</NavLink>
        </div>
      </div>
      
      <div className="listContainer">

          <div className="listItem">
            <div className="listItemTitle">Data Structures</div>
            <div className="listItemContent">
              <ul>
                <li style={{paddingTop:"1.5vh"}}><NavLink className="navlink" to="/arrays">Arrays</NavLink></li>
                <li><NavLink className="navlink" to="/linkedlists">Linked Lists</NavLink></li>
                <li><NavLink className="navlink" to="/stacks">Stacks</NavLink></li>
                <li><NavLink className="navlink" to="/queues">Queues</NavLink></li>
                <li><NavLink className="navlink" to="/trees">Trees</NavLink></li>
                <li><NavLink className="navlink" to="/hashtable">Hash Table</NavLink></li>
                <li><NavLink className="navlink" to="/heap">Heap</NavLink></li>
                <li><NavLink className="navlink"  to="/graph">Graph</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="listItem">
            <div className="listItemTitle">Algorithms</div>
            <div className="listItemContent">
              <ul>
                <li><NavLink className="navlink" to="/arrays">Arrays</NavLink></li>
                <li><NavLink className="navlink" to="/linkedlists">Linked Lists</NavLink></li>
                <li><NavLink className="navlink" to="/stacks">Stacks</NavLink></li>
                <li><NavLink className="navlink" to="/queues">Queues</NavLink></li>
                <li><NavLink className="navlink" to="/trees">Trees</NavLink></li>
                <li><NavLink className="navlink" to="/hashtable">Hash Table</NavLink></li>
                <li><NavLink className="navlink" to="/heap">Heap</NavLink></li>
                <li><NavLink className="navlink" to="/graph">Graph</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="menu">
            <AiOutlineMenu></AiOutlineMenu>
            </div>

        </div>
      </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/arrays" element={<Array/>}/>
          <Route path="/linkedlists/*" element={<LinkedList/>}>
            <Route path="singlylinkedLists" element={<SingleList/>}/>
            <Route path="doublylinkedLists" element={<DoubleList/>}/>
          </Route>
          <Route path="/stacks" element={<Stack/>}/>
          <Route path="/queues" element={<Queue/>}/>
          <Route path="/trees" element={<Trees/>}/>
          <Route path="/hashtable" element={<Hashtable/>}/>
          <Route path="/heap" element={<Heap/>}/>
          <Route path="/graph" element={<Graph/>}/>

        </Routes>
    </section>
  );
}

export default App;
