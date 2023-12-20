import React from 'react'
import { useState } from 'react'
import Header from './components/MainHeader/Header/Header'
import Payment from './components/Payment/Payment'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Content/Nav/Nav'
import Content from './components/Content/Content'
import Hero from './components/HeroSection/Hero'
import Comment from './components/Comment/Comment'
function App() {
  const [navVisible, setnavVisible] = useState(false)
  const [chosenCar, setChousenCar] = useState([])

//Починить верстку поп и рек карс
//Добавить массивы на страницу комментов
//Из видео по роутеру посмотреть код с комментариями и сделать похожим образом 
//сделать коммиты после каждго выполненного пункта 
// сделать пренес на страницу комментов при клике на картинку каждой машитны
  let navclass 
  navclass = navVisible ? "NavVisible" : "NavNotVisible"
  return (
    <div>

          <Header navVisible = {navVisible} setnavVisible = {setnavVisible}></Header>
          <div id='Wrapper' className={navclass}  >
            <nav>
            <Nav navVisible = {navVisible} setnavVisible = {setnavVisible}></Nav>
            </nav>
            <main>
              <Routes>
                <Route path='/' element = {<Content setChousenCar = {setChousenCar} navVisible = {navVisible} setnavVisible = {setnavVisible}></Content>}></Route>
                <Route path='/Comments/:id' element ={<Comment/>}></Route>
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
