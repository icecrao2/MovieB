import { useState } from 'react';
import {
  writeDibedData,
  deleteDibedData,
  getDibedData,
} from '../firebase/DB/databaseAccess.js';
import { emailController } from '../js/localstorage_manager.js';


export const dibed_list = (initial = []) => {


  const { getEmail } = emailController();
  const [dibedList, setdibedList] = useState(initial);


  const handleDibedList = (value) => {
    setdibedList(value);
  }

  const dibedOff = (id) => {

    deleteDibedData(getEmail().replace('.', '*'), id);
    handleDibedList((original) => [...original].filter((data) => data !== id));
  }

  const dibedOn = (id) => {

    writeDibedData(getEmail().replace('.', '*'), id);
    handleDibedList((original) => [...original, id.toString()]);
  }


  //찜하기 버튼 핸들러
  const onClickDibdOn = (evt) => {

    const id = evt.currentTarget.id.toString();
    if (dibedList.includes(id)) {
      dibedOff(id);
      evt.currentTarget.style.color = 'black';
    }
    else {
      dibedOn(id);
      evt.currentTarget.style.color = 'yellow';
    }
  }

  return { dibedList, handleDibedList, dibedOff, dibedOn, onClickDibdOn };
}