import React from 'react';
import Image from 'next/image';
import styles from './overlay.module.css';

const Overlay = ({ isVisible, onClose, image, video, text }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
        {image && <Image src={image} alt="Overlay Image" width={600} height={400} className={styles.overlayImage} />}
        
        {video && (
          <video controls width="600" height="400" className={styles.overlayImage}>
            <source src={video} type="video/mp4" />
            browser doesnt support
          </video>
        )}

        {text && <p className={styles.overlayText}>{text}</p>}

        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

export default Overlay;

