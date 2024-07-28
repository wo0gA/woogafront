import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ReactCalendar.css';

const ReactCalendar = () => {
  const [value, setValue] = useState(new Date());

  const onChange = (nextValue) => {
    setValue(nextValue);
  };

  const formatDateRange = (value) => {
    if (Array.isArray(value)) {
      const [start, end] = value;
      return `${moment(start).format('YYYY년 MM월 DD일')} - ${moment(end).format('YYYY년 MM월 DD일')}`;
    }
    return moment(value).format('YYYY년 MM월 DD일');
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={true}
        formatDay={(locale, date) => moment(date).format('D')} // 날짜 뒤에 '일' 없이 출력
      />
      <div className="text-gray-500 mt-4">
        {formatDateRange(value)}
      </div>
    </div>
  );
};

export default ReactCalendar;
