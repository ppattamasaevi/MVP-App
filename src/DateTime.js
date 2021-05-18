import React, { useState, useEffect } from 'react';
import moment from 'moment';

const DateTime = () => {

  const [time, setTime] = useState(moment().format('h:mm:ss a'));

  useEffect(() => {
   var timerID = setInterval( () => tick(), 1000 );
  });

  const tick = () => {
    setTime(moment().format('h:mm:ss a'));
  }

  return (
    <>
      <div>{moment().format('MMMM Do YYYY')}</div>
      <div>{time}</div>
    </>
   );

}

export default DateTime;