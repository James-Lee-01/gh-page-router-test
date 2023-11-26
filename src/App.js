import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'
import FirstSubPage from './pages/FirstSubPage'
import SecondSubPage from './pages/SecondSubPage'
import ThirdSubPage from './pages/ThirdSubPage'

const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path='*' element={<HomePage/>} />
          <Route path='first' element={<FirstPage/>} />
          <Route path='second' element={<SecondPage/>} />
          <Route path='third' element={<ThirdPage/>} />
          <Route path='first/sub' element={<FirstSubPage/>} />
          <Route path='second/sub' element={<SecondSubPage/>} />
          <Route path='third/sub' element={<ThirdSubPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
