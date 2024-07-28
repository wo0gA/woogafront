import './App.css';
import GoodsDetailPage from './pages/GoodsDetailPage';
import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/goodsDetail" element={<GoodsDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>

  );
}

export default App;
