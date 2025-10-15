import React, { useState } from 'react';
import './EditProfileModal.css';

const EditProfileModal = ({ user, onClose, onSave }) => {
  const [name, setName] = useState(user.name || '');
  const [bio, setBio] = useState(user.bio || '');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSave = () => {
    const updatedUser = {
      name,
      bio,
      profilePicture,
    };
    onSave(updatedUser);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Edit Profile</h2>
        <div className="form-group">
          <label>Profile Picture</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => setProfilePicture(e.target.files[0])} 
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea 
            value={bio} 
            onChange={(e) => setBio(e.target.value)} 
          />
        </div>
        <div className="modal-actions">
          <button onClick={onClose} className="btn-cancel">Cancel</button>
          <button onClick={handleSave} className="btn-save">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
