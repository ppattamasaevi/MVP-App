import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';



const DateTime = () => {

  const timeNow = moment().format('h:mm:ss a');
  const [time, setTime] = useState(timeNow);

  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
  });

  const tick = () => {
    setTime(moment().format('h:mm:ss a'));
  }

  const timeEnd = moment([2021, 4, 25]);
  const timeRemaining = timeEnd.fromNow().toString().substring(3);

  return (
    <div className="date-component">
      <Typography color="primary" variant="h4">{moment().format('MMMM Do YYYY')}</Typography>
      <Typography color="primary" variant="h4">{time}</Typography>
      {/* <Typography>{time.toString().indexOf('pm') === -1 ? "Good Morning, Pep" : "Good Evening, Pep" }</Typography> */}
      <Typography>{`- Only ${timeRemaining} to go -`}</Typography>
    </div>
   );

}

export default DateTime;