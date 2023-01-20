import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import Ideas from './views/Ideas';
import Container from './components/Container';
import CopyWriting from './views/CopyWriting';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/ideas' element={<Ideas />} />
            <Route path='/copywriting' element={<CopyWriting />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
