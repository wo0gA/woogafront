import './App.css';
import GoodsDetailPage from './pages/GoodsDetailPage';
import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import MyPage from './pages/MyPage';
import TestPage from './pages/TestPage';
import NearbyPage from './pages/NearbyPage';
import ChattingPage from './pages/ChattingPage';
import LoginPage from './pages/LoginPage';
import ProfileSettingPage from './pages/ProfileSettingPage';
import CategoryPage from './pages/CategoryPage';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/main" element={<MainPage />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/goodsDetail" element={<GoodsDetailPage />} />
        <Route path="/rentalSearch" element={<SearchPage />} />
        <Route path="/rentalCategory" element={<CategoryPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/chatting" element={<ChattingPage />} />
        <Route path="/nearby" element={<NearbyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profileSetting" element={<ProfileSettingPage />} />
      </Routes>
    </div>

  );
}

export default App;
