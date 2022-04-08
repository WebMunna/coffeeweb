import React from 'react';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Customer from './components/Customer';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Product from './components/Product';



function App() {
  return (
    <div className="App">
      <div className='container'>
         <Header/>
      </div>
      <div className='line'></div>
      
        <Home/>
      <div className='container'>
         <About/>
      </div>
      
      <div className='container'>
         <Menu/>
      </div>
      <div className='container'>
         <Product/>
      </div>
      <div className='container'>
         <Customer/>
      </div>
      <div className='container'>
         <Contact/>
      </div>
      <div className='container'>
         <Blog/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
