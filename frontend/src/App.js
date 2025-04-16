import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopUsersPage from './pages/TopUsersPage';
import TrendingPostsPage from './pages/TrendingPostsPage.js';
import LiveFeedPage from './pages/LiveFeedPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/top-users" element={<TopUsersPage />} />
        <Route path="/trending-posts" element={<TrendingPostsPage />} />
        <Route path="/live-feed" element={<LiveFeedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
