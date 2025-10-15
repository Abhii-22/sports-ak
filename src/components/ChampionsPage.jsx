import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './ChampionsPage.css';

const ChampionsPage = ({ reels, handleLike }) => {
  return (
    <div className="reels-container">
      {reels.length > 0 ? (
        reels.map(reel => (
          <div key={reel.id} className="reel">
            {reel.type.startsWith('video/') ? (
              <video src={reel.src} autoPlay loop muted className="reel-media"></video>
            ) : (
              <img src={reel.src} alt="Reel content" className="reel-media" />
            )}
            <div className="reel-actions">
              <button onClick={() => handleLike(reel.id)} className={reel.liked ? 'like-btn liked' : 'like-btn'}>
                <FaHeart />
              </button>
              <span>{reel.likes}</span>
            </div>
          </div>
        ))
      ) : (
        <p className="no-reels-msg">No reels yet. Be the first to upload!</p>
      )}
    </div>
  );
};

export default ChampionsPage;
