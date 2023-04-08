import React from 'react';
import PropTypes from 'prop-types';
import primeVideoLogo from '../../assets/prime-video-logo.svg';

export default function PrimevideoLogo({ className }) {
  return (
    <img src={primeVideoLogo} className={className} alt="Logo do primevideo" />
  );
}

PrimevideoLogo.propTypes = {
  className: PropTypes.string,
};

PrimevideoLogo.defaultProps = {
  className: null,
};
