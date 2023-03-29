import React from 'react';
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
      {<Icon />}
    </TextLessButton>
  );
}
