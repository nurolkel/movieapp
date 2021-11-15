import React from 'react';
// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header/index';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';
// Styles
import { GlobalStyles } from '../src/styles/GlobalStyles';
// Context
import UserProvider from './context';



const App = () => ( 
      <Router>
        <UserProvider>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/:movieId' element={<Movie />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </UserProvider>
      </Router>
  );


export default App;
