import React from 'react';
import primeVideoLogo from '../../assets/prime-video-logo.svg';

export default function PrimevideoLogo({ className }) {
  return (
    <img src={primeVideoLogo} className={className} alt="Logo do primevideo" />
  );
}
