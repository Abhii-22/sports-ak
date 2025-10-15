import React, { useState } from 'react';
import './UploadModal.css';

const UploadModal = ({ onClose, addReel }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type.startsWith('video/')) {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.onloadedmetadata = () => {
          window.URL.revokeObjectURL(video.src);
          if (video.duration > 15) {
            setError('Video cannot be longer than 15 seconds.');
            setFile(null);
          } else {
            setFile(selectedFile);
            setError('');
          }
        };
        video.src = URL.createObjectURL(selectedFile);
      } else {
        setFile(selectedFile);
        setError('');
      }
    }
  };

  const handleSubmit = () => {
    if (file) {
      addReel(file);
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Upload Achiever Media</h2>
        <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
        {error && <p className="error-message">{error}</p>}
        <div className="modal-actions">
          <button onClick={handleSubmit} disabled={!file || error}>Submit</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
