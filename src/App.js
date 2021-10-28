import React from 'react';
// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header/index';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
// Styles
import { GlobalStyles } from '../src/styles/GlobalStyles';


const App = () => ( 
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:movieId' element={<Movie />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
  );


export default App;
