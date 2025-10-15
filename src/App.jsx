import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Events from './components/Events';
import UploadEventForm from './components/UploadEventForm';
import ChampionsPage from './components/ChampionsPage';
import Profile from './components/Profile'; // Import Profile component
import { AuthProvider } from './context/AuthContext';

const AppLayout = () => {
  const location = useLocation();
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Annual Football Tournament",
      date: "2024-11-20",
      place: "Main Sports Ground",
      rules: "5-a-side, knockout format.",
      icon: "FaFutbol", // Storing icon name as string
      poster: "https://images.unsplash.com/photo-1551772301-e9aa43404799?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Club Basketball League",
      date: "2024-12-05",
      place: "Indoor Arena",
      rules: "Round-robin league, standard FIBA rules.",
      icon: "FaBasketballBall", // Storing icon name as string
      poster: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2070&auto=format&fit=crop"
    }
  ]);
  const [reels, setReels] = useState([]);

  const addEvent = (newEvent) => {
    setEvents(prevEvents => [...prevEvents, { ...newEvent, id: prevEvents.length + 1 }]);
    setShowUploadForm(false); // Hide form after submission
  };

  const addReel = (file) => {
    const newReel = {
      id: reels.length + 1,
      src: URL.createObjectURL(file),
      type: file.type,
      likes: 0,
      liked: false
    };
    setReels(prevReels => [newReel, ...prevReels]);
  };

  const handleLike = (reelId) => {
    setReels(reels.map(reel => {
      if (reel.id === reelId) {
        return { ...reel, liked: !reel.liked, likes: reel.liked ? reel.likes - 1 : reel.likes + 1 };
      }
      return reel;
    }));
  };
  const noNavRoutes = ['/', '/signin', '/signup'];
  const shouldShowNav = !noNavRoutes.includes(location.pathname);

  return (
    <div className="App">
      {shouldShowNav && <Header onUploadClick={() => setShowUploadForm(prev => !prev)} />}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<MainPage showUploadForm={showUploadForm} addEvent={addEvent} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/events" element={<Events events={events} />} />
          <Route path="/upload" element={<UploadEventForm addEvent={addEvent} />} />
          <Route path="/reels" element={<ChampionsPage reels={reels} handleLike={handleLike} />} />
          <Route path="/profile" element={<Profile events={events} addReel={addReel} />} />
        </Routes>
      </main>
      {shouldShowNav && <BottomNav />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </Router>
  );
}

export default App;
