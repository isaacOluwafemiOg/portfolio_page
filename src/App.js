import logo from './logo.svg';
import './App.scss';
import {Routes,Route, Router} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={< Layout/>}>
          <Route index element={< Home />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
