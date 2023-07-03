import React, { useEffect, useState } from 'react';

import './DateTimeWidget.scss';

const DateTimeWidget = ({ isTime, isDate }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  });

  if (isTime) {
    return (
      <span>
        {date.toLocaleTimeString('en-US', {
          timeStyle: 'short',
        })}
      </span>
    );
  }

  if (isDate) {
    return (
      <span>
        {date.toLocaleString('en-US', {
          weekday: 'long',
          month: 'long',
          day: '2-digit',
        })}
      </span>
    );
  }
};

export default DateTimeWidget;
