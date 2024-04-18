import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CardStory from './components/CardStory'
import Card from './components/Card'

function App() {



  return (
    <>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/card" element={<Card/>}></Route>
        <Route path="/cardstory/:id" element={<CardStory/>}></Route>
        </Routes>
    </>
  )
}

export default App
