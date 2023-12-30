import { useState } from 'react'
import Todos from './components/todos'

function App() {

  return (
    <>
      <h1 className='text-zinc-700 font-bold text-lg text-center py-11'>TodoList</h1>
      <Todos />
    </>
  )
}

export default App
