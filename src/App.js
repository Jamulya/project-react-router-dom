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

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element = {<HomePage/>}/>
            <Route path='/about' element = {<AboutPage/>}/>
            <Route path='/contact' element = {<ContactPage/>}/>
            <Route path='/userPage' element = {<UsersPage/>}/>
            <Route path='/user/:id' element = {<SingleUser/>}/>
            <Route path='*' element = {<PageNotFound/>}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
