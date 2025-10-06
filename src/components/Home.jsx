import React from "react";
import "./Home.css";
import UploadEventForm from "./UploadEventForm";

const Home = ({ showUploadForm, addEvent }) => {
  return (
    <div className="home-container">
      {/* Left Side */}
      <div className="left-content">
        <>
          <h2><span className="highlight-yellow">Winners Never Quit</span> and Quiter Never win</h2>
          <p>Search for events, tournaments, and matches happening near you.</p>
        </>
      </div>

      {/* Right Side - Circle Rotation */}
      <div className="right-content">
        {showUploadForm ? (
          <UploadEventForm addEvent={addEvent} />
        ) : (
          <div className="circle-rotation">
            <div className="circle-card">
              <img src="images/vollyball.png" alt="vollyball" />
            </div>
            <div className="circle-card">
              <img src="images/kabaddi.jpg" alt="kabaddi" />
            </div>
            <div className="circle-card">
              <img src="images/NcZXHD.jpg" alt="cricket" />
            </div>
            <div className="circle-card">
              <img src="images/badmiton.jpg" alt="badmiton" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
