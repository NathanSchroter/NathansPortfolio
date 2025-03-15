import React from 'react';
import Image from 'next/image';
import styles from './Overlay.module.css';

const Overlay = ({ isVisible, onClose,image,text }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
         <Image src={image} alt="sampleCardImage" width={"auto"} height={"auto"} className={styles.overlayImage} />
        <p className={styles.overlayText}>{text}</p>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

export default Overlay;