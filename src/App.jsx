import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import Ideas from './views/Ideas';
import CopyWriting from './views/CopyWriting';
import Resume from './views/Resume';
import EscapeGame from './views/EscapeGame';
import Scripting from './views/Scripting';
import SentimentAnalyser from './views/SentimentAnalyser';

const routes = [
  {
    path: '/',
    element: <HomeView />,
  },
  {
    path: '/escape-game',
    element: <EscapeGame />,
  },
  {
    path: '/ideas',
    element: <Ideas />,
  },
  {
    path: '/copywriting',
    element: <CopyWriting />,
  },
  {
    path: '/resume',
    element: <Resume />,
  },
  {
    path: '/script',
    element: <Scripting />,
  },
  {
    path: '/sentiment-analysis',
    element: <SentimentAnalyser />,
  },
  {
    path: '*',
    element: <h1 className='sandbox-about text-white'>404 Not Found</h1>,
  },
];

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className='container-fluid'>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
