import { useState } from 'react'
import reactLogo from './assets/react.svg'
import reduxLogo from '/redux.svg'
import './App.css'
import {SidebarUseState} from "./SideBarUseState";
import { ReduxSideBar } from './ReduxSideBar';
import {increment, resetCount} from "./Redux/sidebarSlice";
import { useSelector, useDispatch } from 'react-redux';


function App() {
  
  const [count, setCount] = useState(0)
  const [arr, setArr] = useState([]);

    function addItem() {
        setCount((count) => count + 1)
        setArr((prev)=>[...prev,1])
      }

      function reset() {
        setCount(0)
        setArr([])
      }

      const countRedux = useSelector((state)=> state.sidebar.value);
      const dispatch = useDispatch();
      
    
  return (
    <>
    
    <div className="App">
      <ReduxSideBar count={count} arr={arr}/>
      <SidebarUseState count={count} arr={arr}/>
      <div>
          <img src={reduxLogo} className="logo"alt="Vite logo" />
          <img src={reactLogo} className="logo" alt="React logo" /> 
      </div>
      <h1>Redux<sub style={{fontSize:"14px"}}>Toolkit</sub> + React</h1>
      <div className="card">
        <button onClick={()=> dispatch(increment())}>
          Redux count is {countRedux}
        </button>
        <span> &nbsp;¯\_&#40;ツ&#41;_/¯ &nbsp;</span>
        <button onClick={() => {addItem()}} style={{marginBottom:"20px"}}>
          useState count is {count}
        </button>
      </div>
      <button className="redux-reset" onClick={()=>dispatch(resetCount())}>
        Reset redux
      </button>
      &nbsp; 
      <button className="usestate-reset" onClick={()=>reset()}>
        Reset usestate
      </button>
    </div>
    </>
  )
}

export default App
