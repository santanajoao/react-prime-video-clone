import React from 'react';
import PropTypes from 'prop-types';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import TextLessButton from '../TextLessButton';

const iconMapping = {
  left: SlArrowLeft,
  right: SlArrowRight,
};

export default function ArrowButton({
  className,
  direction,
  onClick,
  textTip,
}) {
  const Icon = iconMapping[direction];
  if (!Icon) {
    throw new Error('invalid value for prop direction');
  }

  return (
    <TextLessButton textTip={textTip} onClick={onClick} className={className}>
      <Icon />
    </TextLessButton>
  );
}

ArrowButton.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  textTip: PropTypes.string.isRequired,
};

ArrowButton.defaultProps = {
  className: null,
  onClick: null,
};
