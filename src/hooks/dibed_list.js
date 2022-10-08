import { useState } from 'react';


export const dibed_list = (initial = []) => {

  const [dibedList, setdibedList] = useState(initial);

  const handleDibedList = (value) => {
    setdibedList(value);
  }

  return { dibedList, handleDibedList };
}