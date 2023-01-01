
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {


  return (
    <HashRouter>
       <Layout>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/services'element={<Services/>}/>
        <Route path="*"element={<NotFound/>}/>
      </Routes>
      </Layout>
    </HashRouter>
  )
}


export default App
