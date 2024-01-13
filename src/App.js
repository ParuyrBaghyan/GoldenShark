import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/js/Footer';
import AllProducts from './pages/AllProducts';
import Header from './components/js/Header';
import { Context } from './components/js/Context';
import { useRef } from 'react';
import { useState } from 'react';
import Like from './pages/Like';
import Cart from './pages/Cart';
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import './components/css/App.css'


function App() {

  const rollRef = useRef()
  const hotRollRef = useRef()
  const makiRef = useRef()
  const soupRef = useRef()
  const desertRef = useRef()
  const [like, setLike] = useState([])
  const [cart, setcart] = useState([])
  let [itemTotal, setItemTotal] = useState(0)
  let [count, setCount] = useState(0)
  let [openMore, setOpenMore] = useState(false)
  let [total, setTotal] = useState(0)
  let [dat, setDat] = useState()
  let headerRef = useRef()

  const addLike = item => !like.includes(item) ? setLike([...like, item]) : '';
  const removeLike = id => setLike([...like.filter(item => item.id !== id)]);
  const addCart = item => !cart.includes(item) ? setcart([...cart, item]) : '';
  const removeCart = id => setcart([...cart.filter(item => item.id !== id)]);
  const handleClick = function () {
    headerRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const el = {
    rollRef, hotRollRef, makiRef, soupRef, desertRef,
    like, setLike,
    addLike, removeLike,
    addCart, removeCart,
    cart, setcart,
    itemTotal, setItemTotal,
    count, setCount,
    openMore, setOpenMore,
    total, setTotal,
    dat, setDat,
    headerRef
  }
  return (
    <div className="App">
      <Context.Provider value={el}>
        <a className='to-top' onClick={() => { handleClick() }}><BsFillArrowUpCircleFill /></a>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Ողջ տեսականին' element={<AllProducts />}></Route>
          <Route path='/Նախընտրած ապրանքներ' element={<Like />}></Route>
          <Route path='/Զամբյուղ' element={<Cart />}></Route>
        </Routes>
        <div className="bottom-padding"></div>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
