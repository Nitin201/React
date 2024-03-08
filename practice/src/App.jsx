import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let name="nitin";
function App()
{
  return(
    <>
    <navbar>

    <nav>
      <li>home</li>
      <li>about</li>
      <li>contact us</li>
    </nav>
    </navbar>
    <div className='container'><h1>hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ratione eligendi, maxime saepe autem quibusdam asperiores omnis magni laboriosam atque ad aut nam beatae soluta optio! Suscipit repellendus blanditiis reprehenderit.</p></div>
    </>
    

  )

}



export default App
