import React from 'react';
import './UploadEventForm.css';

const UploadEventForm = ({ addEvent }) => {
  return (
    <div className="upload-event-form-container">
      <h2>Upload Event</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newEvent = {
          title: formData.get('eventTitle'),
          sportName: formData.get('sportName'),
          place: formData.get('eventPlace'),
          date: formData.get('eventDate'),
          timings: formData.get('eventTimings'),
          rules: formData.get('eventRules'),
          prizes: {
            '1st': formData.get('prize1'),
            '2nd': formData.get('prize2'),
            '3rd': formData.get('prize3'),
            '4th': formData.get('prize4'),
            '5th': formData.get('prize5'),
          },
          poster: URL.createObjectURL(formData.get('eventImage')),
          icon: 'FaFutbol', // Default icon, can be changed later
        };
        addEvent(newEvent);
      }}>
        <div className="form-group">
          <label htmlFor="eventTitle">Event Title</label>
          <input type="text" id="eventTitle" name="eventTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="sportName">Sport Name</label>
          <input type="text" id="sportName" name="sportName" />
        </div>
        <div className="form-group">
          <label htmlFor="eventPlace">Event Place</label>
          <input type="text" id="eventPlace" name="eventPlace" />
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date</label>
          <input type="date" id="eventDate" name="eventDate" />
        </div>
        <div className="form-group">
          <label htmlFor="eventTimings">Event Timings</label>
          <input type="text" id="eventTimings" name="eventTimings" />
        </div>
        <div className="form-group">
          <label htmlFor="eventRules">Event Rules</label>
          <textarea id="eventRules" name="eventRules"></textarea>
        </div>

        <div className="prizes-section">
          <h4>Prizes</h4>
          <div className="prize-input">
            <label>1st</label>
            <input type="text" name="prize1" placeholder="Prize for 1st place" />
          </div>
          <div className="prize-input">
            <label>2nd</label>
            <input type="text" name="prize2" placeholder="Prize for 2nd place" />
          </div>
          <div className="prize-input">
            <label>3rd</label>
            <input type="text" name="prize3" placeholder="Prize for 3rd place" />
          </div>
          <div className="prize-input">
            <label>4th</label>
            <input type="text" name="prize4" placeholder="Prize for 4th place" />
          </div>
          <div className="prize-input">
            <label>5th</label>
            <input type="text" name="prize5" placeholder="Prize for 5th place" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="eventImage">Event Image</label>
          <input type="file" id="eventImage" name="eventImage" />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadEventForm;
