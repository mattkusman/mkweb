import React, {useState} from 'react';
// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './pages/home';
import About from "./pages/about";
import Contact from "./pages/contact";
import Rachew from "./pages/rachew";
import MainMenu from "./components/mainMenu";

function App() {
    const [open, changeOpen] = useState(true)

    return (
      <Router>
          <div style={{backgroundColor: '#262626', color: '#ACBFA4'}}>
              <MainMenu />
              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='/contact' element={<Contact/>} />
                  <Route path='/rachew' element={<Rachew/>} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
