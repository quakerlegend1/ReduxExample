import { useState } from 'react'
import reactLogo from './assets/react.svg'
import reduxLogo from '/redux.svg'
import './App.css'
import {SidebarUseState} from "./SideBarUseState";
import { ReduxSideBar } from './ReduxSideBar';
import {increment, resetCount} from "./Redux/sidebarSlice";
import { useSelector, useDispatch } from 'react-redux';
import {addReduxItem, resetArray} from "./Redux/addSlice";

function App() {
  
  const [count, setCount] = useState(0)
  const [arr, setArr] = useState([]);
  const countRedux = useSelector((state)=> state.sidebar.value);
  const dispatch = useDispatch();

    function addItem() {
        setCount((count) => count + 1)
        setArr((prev)=>[...prev,1])
      }

      function reset() {
        setCount(0)
        setArr([])
      }

    
    
  return (
    <>
    
    <div className="App">
      <h4>Redux позволяет избегать prop-drilling</h4>
      <ReduxSideBar/>
      <SidebarUseState count={count} arr={arr}/>
      <div>
          <img src={reduxLogo} className="logo"alt="Vite logo" />
          <img src={reactLogo} className="logo" alt="React logo" /> 
      </div>
      <h1>Redux<sub style={{fontSize:"14px"}}>Toolkit</sub>+ React</h1>
      <div className="card">
        <button onClick={()=> {dispatch(increment());dispatch(addReduxItem())}}>
          Redux count is {countRedux}
        </button>
        <span> &nbsp;¯\_&#40;ツ&#41;_/¯ &nbsp;</span>
        <button onClick={() => {addItem()}} style={{marginBottom:"20px"}}>
          useState count is {count}
        </button>
      </div>
      <button className="redux-reset" onClick={()=> {dispatch(resetCount());dispatch(resetArray())} }>
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
