import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const MainPage = ({ showUploadForm, addEvent }) => {
  return (
    <>
      <Home showUploadForm={showUploadForm} addEvent={addEvent} />
      <About />
      <Contact />
    </>
  );
};

export default MainPage;
