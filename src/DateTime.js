import React, { useState, useEffect } from 'react';
import moment from 'moment';

const DateTime = () => {

  const timeNow = moment().format('h:mm:ss a');
  const [time, setTime] = useState(timeNow);

  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
  });

  const tick = () => {
    setTime(moment().format('h:mm:ss a'));
  }

  const timeEnd = moment([2021, 5]);

  return (
    <>
      <div>{moment().format('MMMM Do YYYY')}</div>
      <div>{time}</div>
      <div>{time.toString().indexOf('pm') === -1 ? "Good Morning, Pep" : "Good Afternoon, Pep" }</div>
      <div>Safe to head out {timeEnd.fromNow()}</div>
    </>
   );

}

export default DateTime;