import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import './components/Style.css'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import UsersPage from './components/UsersPage';
import SingleUser from './components/SingleUser';
import PageNotFound from './components/PageNotFound';
import Card from './components/Card';
import Checkout from './components/Checkout';
import Products from './components/Products';
import { CartProvider } from './components/context';

function App() {

  return (
    <div>
      <CartProvider>
           <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/homepage' element = {<HomePage/>}/>
            <Route path='/about' element = {<AboutPage/>}/>
            <Route path='/contact' element = {<ContactPage/>}/>
            <Route path='/userPage' element = {<UsersPage/>}/>
            <Route path='/user/:id' element = {<SingleUser/>}/>
            <Route path='*' element = {<PageNotFound/>}/>
            <Route path='/card' element = {<Card/>}/>
            <Route path='/checkout' element = {<Checkout/>}/>
            <Route path='/' element = {<Products/>}/>

          </Routes>
      </BrowserRouter>
      </CartProvider>
   
    </div>
  );
}

export default App;
