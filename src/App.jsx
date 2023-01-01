
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Register from './components/Register'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Contact from './components/Contact'
AOS.init();

function App() {


  return (
    <HashRouter>
       <Layout>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/services'element={<Services/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/register'element={<Register/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path="*"element={<NotFound/>}/>
      </Routes>
      </Layout>
    </HashRouter>
  )
}


export default App
