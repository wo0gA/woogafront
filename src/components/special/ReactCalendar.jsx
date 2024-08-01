import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ReactCalendar.css';

const ReactCalendar = () => {
  const [value, setValue] = useState(new Date());

  const onChange = (nextValue) => {
    setValue(nextValue);
    if (Array.isArray(nextValue)) {
      const [start, end] = nextValue;
      console.log(`Selected range: ${moment(start).format('YYYY-MM-DD')} - ${moment(end).format('YYYY-MM-DD')}`);
    } else {
      console.log(`Selected date: ${moment(nextValue).format('YYYY-MM-DD')}`);
    }
  };

  const formatDateRange = (value) => {
    if (Array.isArray(value)) {
      const [start, end] = value;
      return `${moment(start).format('YYYY년 MM월 DD일')} - ${moment(end).format('YYYY년 MM월 DD일')}`;
    }
    return moment(value).format('YYYY년 MM월 DD일');
  };

  // 여러 기간을 정의하는 배열 추가
  const highlightRanges = [
    { start: new Date(2024, 6, 4), end: new Date(2024, 6, 10) }, // 기간 1 - 7월 4일 ~ 7월 10일
    { start: new Date(2024, 6, 15), end: new Date(2024, 6, 20) }, // 기간 2 - 7월 15일 ~ 7월 20일
  ];

  // 날짜가 여러 기간 중 하나에 속하는지 확인하는 함수 수정
  const isWithinAnyRange = (date, ranges) => {
    return ranges.some(range => moment(date).isBetween(range.start, range.end, 'day', '[]'));
  };

  // tileClassName 함수 수정
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (isWithinAnyRange(date, highlightRanges)) {
        return 'highlight';
      }
    }
    return null;
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={true}
        formatDay={(locale, date) => moment(date).format('D')} // 날짜 뒤에 '일' 없이 출력
        tileClassName={tileClassName} // 수정된 부분
      />
      <div className="text-gray-500 mt-4">
        {formatDateRange(value)}
      </div>
    </div>
  );
};

export default ReactCalendar;
