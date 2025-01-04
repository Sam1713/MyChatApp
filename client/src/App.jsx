import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
