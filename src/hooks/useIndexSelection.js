import { useState } from 'react';

export default function useIndexSelection(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('"min" and "max" should be numbers');
  }

  if (parseInt(min) !== min || parseInt(max) !== max) {
    throw new Error('"min" and "max" should be integers');
  }

  const [selected, setSelected] = useState(min);

  function selectNext() {
    if (selected < max) {
      setSelected(selected + 1);
    }
  }

  function selectPrevious() {
    if (selected > min) {
      setSelected(selected - 1);
    }
  }

  return { selected, setSelected, selectNext, selectPrevious };
}
