// src/App.jsx
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Rootlayout from './components/layouts/Rootlayout'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Error from './components/pages/Error'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App



