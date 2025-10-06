import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import MainPage from './components/MainPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Events from './components/Events';
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

  const addEvent = (newEvent) => {
    setEvents(prevEvents => [...prevEvents, { ...newEvent, id: prevEvents.length + 1 }]);
    setShowUploadForm(false); // Hide form after submission
  };
  const showHeader = location.pathname !== '/events';

  return (
    <div className="App">
      {showHeader && <Header onUploadClick={() => setShowUploadForm(prev => !prev)} />}
      <main>
        <Routes>
          <Route path="/" element={<MainPage showUploadForm={showUploadForm} addEvent={addEvent} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/events" element={<Events events={events} />} />
        </Routes>
      </main>
      <BottomNav />
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
