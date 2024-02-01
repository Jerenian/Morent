import React from 'react'
import { useState , useEffect} from 'react'
import {Header} from './components/MainHeader/Header/Header'
import Payment from './components/Payment/Payment'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Content/Nav/Nav'
import Content from './components/Content/Content'
import Comment from './components/Comment/Comment'
import { HeaderMini } from './components/MainHeader/Header/HeaderMini'
function App() {
  const [navVisible, setnavVisible] = useState(false)
  const [chosenCar, setChousenCar] = useState([])
  const [screenWD, setWD] = useState(window.innerWidth)
  useEffect(() => {
      const Device = () => {
        setWD(window.innerWidth);
      };
      window.addEventListener('resize', Device);

    }, []);

let head
if(screenWD < 600){
	head = <HeaderMini navVisible = {navVisible} setnavVisible = {setnavVisible}  />
}  
else{
	head = <Header navVisible = {navVisible} setnavVisible = {setnavVisible}  />
}
// SHIFT + TAB минус табуляция
  let navclass 
  navclass = navVisible ? "NavVisible" : "NavNotVisible"
  return (
    <div>

          {head}
          <div id='Wrapper' className={navclass}  >
            <nav>
            <Nav navVisible = {navVisible} setnavVisible = {setnavVisible}></Nav>
            </nav>
            <main>
              <Routes>
                <Route path='/' element = {<Content screenWD = {screenWD} setChousenCar = {setChousenCar} navVisible = {navVisible} setnavVisible = {setnavVisible}></Content>}></Route>
                <Route path='/Comments/:id' element ={<Comment navVisible = {navVisible} />}></Route>
                <Route path='/Payment/:id' element = {<Payment />}></Route>
              </Routes>
                
            </main>
          </div>
          <footer>
            <Footer></Footer>
          </footer>
      </div>
  )
}


export default App
