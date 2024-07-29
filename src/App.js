import './App.css';
import GoodsDetailPage from './pages/GoodsDetailPage';
import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import MyPage from './pages/MyPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
      </Routes>
    </div>

  );
}

export default App;
