import { useState } from 'react'
import './App.css'
import Left from './home/leftpart/Left'
import Right from './home/rightpart/Right'

function App() {

  return (
    <div className='flex h-screen'>
      <Left/>
      <Right/>
    </div>
  )
}

export default App
