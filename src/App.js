import './App.css';
import GoodsDetailPage from './pages/GoodsDetailPage';
import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import MyPage from './pages/MyPage';
import TestPage from './pages/TestPage';
import Chatting from './apis/Chatting';
import CategoryPage from './pages/CategoryPage';

function App() {

  return (
    <div className="App">
      <Routes>
        {/* 일단 바꿔둠 */}
      <Route path="/" element={<TestPage />} /> 
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/goodsDetail" element={<GoodsDetailPage />} />
        <Route path="/rentalSearch" element={<SearchPage />} />
        <Route path="/rentalCategory" element={<CategoryPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/chatting" element={<Chatting />} />
      </Routes>
    </div>

  );
}

export default App;
