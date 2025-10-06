import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaListUl, FaTrophy, FaFutbol, FaBasketballBall, FaMedal, FaAward, FaCrown } from 'react-icons/fa';
import './Events.css';
import Modal from './Modal';

const iconMap = {
  FaFutbol: <FaFutbol />,
  FaBasketballBall: <FaBasketballBall />,
};

const prizeIconMap = {
  '1st': <FaCrown className="prize-icon gold" />,
  '2nd': <FaMedal className="prize-icon silver" />,
  '3rd': <FaMedal className="prize-icon bronze" />,
  '4th': <FaAward className="prize-icon" />,
  '5th': <FaAward className="prize-icon" />,
};

const Events = ({ events = [] }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null);
  const navigate = useNavigate();


  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);

    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviews(newPreviews);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    console.log('Uploading:', selectedFiles);
    alert(`${selectedFiles.length} file(s) selected for upload.`);
  };

  const openModal = (poster) => {
    setSelectedPoster(poster);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPoster(null);
  };

  return (
    <>
      <div className="events-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>
      <div className="upcoming-events">
        <h1>Upcoming Sports Events</h1>
        <div className="event-list">
          {events.map(event => (
            <div key={event.id} className="event-item">
              <div className="event-content">
                <h2>{iconMap[event.icon]} {event.title}</h2>
                <p><strong>Sport:</strong> {event.sportName}</p>
                <p><FaCalendarAlt className="event-icon" /> <strong>Date:</strong> {event.date}</p>
                <p><strong>Timings:</strong> {event.timings}</p>
                <p><FaMapMarkerAlt className="event-icon" /> <strong>Place:</strong> {event.place}</p>
                <p><FaListUl className="event-icon" /> <strong>Rules:</strong> {event.rules}</p>
                <div className="event-prizes">
                  <h4><FaTrophy className="event-icon" /> Prizes</h4>
                  <div className="prize-list">
                    {event.prizes && Object.entries(event.prizes).map(([rank, prize]) => (
                      prize && (
                        <div className="prize-ribbon" key={rank}>
                          <span className="prize-rank">{prizeIconMap[rank]} {rank}</span>
                          <span className="prize-amount">{prize}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
              <div className="event-poster-container">
                <img src={event.poster} alt={`${event.title} Poster`} className="event-poster" onClick={() => openModal(event.poster)} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="winners-section">
        <h1>Sports Champions</h1>
        {events.map(event => (
          <div key={event.id} className="winner-card">
            <h2><FaTrophy className="event-icon" /> {event.title} - Winners</h2>
            <p>Date: {event.date}</p>
            <p>Place: {event.place}</p>
            <form className="upload-form" onSubmit={handleUpload}>
              <input type="file" multiple onChange={handleFileChange} />
              <button type="submit">Upload Winner Media</button>
            </form>
            <div className="previews">
              {previews.map((preview, index) => (
                <img
                  src={preview}
                  key={index}
                  alt={`Preview ${index + 1}`}
                  className="preview-image"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
      <Modal show={isModalOpen} onClose={closeModal}>
        {selectedPoster && <img src={selectedPoster} alt="Enlarged event poster" />}
      </Modal>
    </>
  );
};

export default Events;
