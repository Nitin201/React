import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import FunctionalComp from './components/functional.jsx'
import {ClassComp,ClassComp1} from './components/class.jsx'
import { Click } from './components/click.jsx'
import Counter from './components/counter.jsx'
function App() {
 

  return (
   <div><h1>hello world</h1>
   <h2>hello nitin</h2>
   <FunctionalComp></FunctionalComp>
   <ClassComp></ClassComp>
   <ClassComp1></ClassComp1>
   <Click></Click>
   <Counter></Counter>
   </div>
  )
}

export default App
