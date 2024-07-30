import './App.css';
import GoodsDetailPage from './pages/GoodsDetailPage';
import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import MyPage from './pages/MyPage';
import TestPage from './pages/TestPage';
import NearbyPage from './pages/NearbyPage';
import ChattingPage from './pages/ChattingPage';

function App() {

  return (
    <div className="App">
      <Routes>
        {/* 일단 바꿔둠 */}
      <Route path="/" element={<MainPage />} /> 
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/goodsDetail" element={<GoodsDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/chatting" element={<ChattingPage />} />
        <Route path="/nearby" element={<NearbyPage />} />
      </Routes>
    </div>

  );
}

export default App;
