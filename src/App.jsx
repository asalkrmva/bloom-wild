import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Flowers from './pages/Flowers';
import Home from './pages/Home';
import Birthday from './pages/Birthday';
import Food from './pages/Food';
import Plants from './pages/Plants';
import All from './pages/All';
import Basket from './components/Basket';
import Login from './components/Login';

const App = () => {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [username, setUsername] = useState(
    localStorage.getItem('username') || ''
  );

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const isLoggedIn = username !== '';

  function login(name) {
    setUsername(name);
    localStorage.setItem('username', name);
    setIsLoginOpen(false);
  }

  function logout() {
    setUsername('');
    localStorage.removeItem('username');
  }

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <div>
      <Navbar setSearch={setSearch} cart={cart} setIsCartOpen={setIsCartOpen} username={username} setIsLoginOpen={setIsLoginOpen} logout={logout} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/send-flowers' element={<All search={search} cart={cart} addToCart={addToCart}
          isLoggedIn={isLoggedIn}
          setIsLoginOpen={setIsLoginOpen} removeFromCart={removeFromCart} />} />
        <Route path='/flowers' element={<Flowers search={search} cart={cart} addToCart={addToCart} isLoggedIn={isLoggedIn}
          setIsLoginOpen={setIsLoginOpen} removeFromCart={removeFromCart} />} />
        <Route path='/birthday' element={<Birthday search={search} cart={cart} addToCart={addToCart} isLoggedIn={isLoggedIn}
          setIsLoginOpen={setIsLoginOpen} removeFromCart={removeFromCart} />} />
        <Route path='/food&drink' element={<Food search={search} cart={cart} addToCart={addToCart} isLoggedIn={isLoggedIn}
          setIsLoginOpen={setIsLoginOpen} removeFromCart={removeFromCart} />} />
        <Route path='/plants' element={<Plants search={search} cart={cart} addToCart={addToCart} isLoggedIn={isLoggedIn}
          setIsLoginOpen={setIsLoginOpen} removeFromCart={removeFromCart} />} />
      </Routes>
      {isCartOpen && (
        <Basket
          cart={cart}
          setIsCartOpen={setIsCartOpen}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      )}

      {isLoginOpen && (
        <Login
          setIsLoginOpen={setIsLoginOpen}
          login={login}
        />
      )}
    </div>
  );
};

export default App;