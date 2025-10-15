import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import UploadModal from './UploadModal';
import EditProfileModal from './EditProfileModal'; // Import the new modal component
import './Profile.css';

const Profile = ({ events, addReel }) => {
  const { currentUser, signOut } = useAuth();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // State to hold editable profile data
  const [profileData, setProfileData] = useState({
    name: currentUser ? currentUser.email.split('@')[0] : '',
    bio: 'Welcome to my profile! Your bio can go here.',
    profilePictureUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop',
  });

  const handleSaveProfile = (updatedUser) => {
    const newProfileData = { ...profileData };
    if (updatedUser.name) {
      newProfileData.name = updatedUser.name;
    }
    if (updatedUser.bio) {
      newProfileData.bio = updatedUser.bio;
    }
    if (updatedUser.profilePicture) {
      newProfileData.profilePictureUrl = URL.createObjectURL(updatedUser.profilePicture);
    }
    setProfileData(newProfileData);
    console.log('Saving updated user profile:', updatedUser);
  };

  if (!currentUser) {
    return (
      <div className="profile-container centered">
        <p>Please sign in to see your profile.</p>
      </div>
    );
  }

  const userEvents = events.filter(event => event.uploadedBy === currentUser.email);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img 
          src={profileData.profilePictureUrl} 
          alt="Profile" 
          className="profile-picture" 
        />
        <div className="profile-info">
          <div className="profile-main-info">
            <h2>{profileData.name}</h2>
            <div className="profile-buttons">
              <button className="edit-profile-btn" onClick={() => setShowEditModal(true)}>Edit Profile</button>
              <button onClick={() => setShowUploadModal(true)} className="upload-btn">Upload</button>
              <button onClick={signOut} className="sign-out-btn">Sign Out</button>
            </div>
          </div>
          <div className="profile-stats">
            <div><strong>{userEvents.length}</strong> Posts</div>
            <div><strong>256</strong> Followers</div>
            <div><strong>189</strong> Following</div>
          </div>
          <div className="profile-bio">
            <p>{profileData.bio}</p>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <div className="tab active">POSTS</div>
      </div>

      <div className="user-events-list">
        {userEvents.length > 0 ? (
          userEvents.map(event => (
            <div key={event.id} className="profile-event-card">
              <img src={event.poster} alt={event.title} className="event-poster" />
              <div className="event-overlay">
                <h4>{event.title}</h4>
                <p>{event.date}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-events-msg">You haven't uploaded any events yet.</p>
        )}
      </div>
      {showUploadModal && <UploadModal onClose={() => setShowUploadModal(false)} addReel={addReel} />}
      {showEditModal && (
        <EditProfileModal 
          user={profileData} 
          onClose={() => setShowEditModal(false)} 
          onSave={handleSaveProfile} 
        />
      )}
    </div>
  );
};

export default Profile;
