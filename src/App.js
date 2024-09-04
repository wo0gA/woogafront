import './App.css';
import GoodsDetailPage from './pages/GoodsDetailPage';
import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import MyPage from './pages/MyPage';
import LoginPage from './pages/LoginPage';
import ProfileSettingPage from './pages/ProfileSettingPage';
import CategoryPage from './pages/CategoryPage';
import ChatPage from "./pages/ChatPage";
import RegistrationPage from './pages/RegistrationPage';
import { RentalFeeProvider } from './context/RentalFeeContext';
import StorePage from './pages/StorePage';
import { NavProvider } from './context/NavContext';
import RegistrationDetailPage from './pages/RegistrationDetailPage';
import EditProductPage from './pages/EditProductPage';

function App() {

  return (
    <RentalFeeProvider>
      <NavProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} /> 
          <Route path="/myPage/:productID" element={<MyPage />} />
          <Route path="/goodsDetail/:productID" element={<GoodsDetailPage />} />
          <Route path="/rentalCategory" element={<CategoryPage />} />
          <Route path="/chatting" element={<ChatPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profileSetting" element={<ProfileSettingPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/registerDetail" element={<RegistrationDetailPage />} />
          <Route path='/loading' element={<></>} /> 
          <Route path='/store/:userID' element={<StorePage/>} />
          <Route path='/editProduct/:productID' element={<EditProductPage />} />
        </Routes>
      </div>
      </NavProvider>
    </RentalFeeProvider>

  );
}

export default App;