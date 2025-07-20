import { useState } from 'react'
import './App.css'
import AppRouter from './Router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AppRouter/>
     
    </>
  );
}

export default App
