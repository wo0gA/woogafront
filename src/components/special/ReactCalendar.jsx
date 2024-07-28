import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // react-calendar 기본 CSS
import './ReactCalendar.css'; // 커스텀 CSS

const ReactCalendar = () => {
  // value를 Date 또는 Date[]로 설정하여 범위 선택을 처리합니다.
  const [value, setValue] = useState(new Date());

  const onChange = (nextValue) => {
    setValue(nextValue);
  };

  // value가 배열일 경우 날짜 범위를 형식화하여 출력합니다.
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
        selectRange={true} // 범위 선택을 활성화합니다.
      />
      <div className="text-gray-500 mt-4">
        {formatDateRange(value)}
      </div>
    </div>
  );
};

export default ReactCalendar;
