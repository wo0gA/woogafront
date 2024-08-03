import moment from 'moment';
import React, { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ReactCalendar.css';
import { RentalFeeContext } from '../../context/RentalFeeContext';
import { calculateRentalFee } from '../../utils/calculateRentalFee';

const ReactCalendar = () => {
  const { setRentalFee, dailyRate, setTotalDays, setSelectedRange } = useContext(RentalFeeContext);
  const [value, setValue] = useState(new Date());

  const highlightRanges = [
    { start: new Date(2024, 6, 4), end: new Date(2024, 6, 10) },
    { start: new Date(2024, 6, 15), end: new Date(2024, 6, 20) },
  ];

  const isWithinAnyRange = (date, ranges) => {
    return ranges.some(range => moment(date).isBetween(range.start, range.end, 'day', '[]'));
  };

  const isDateInHighlightedRange = (date, ranges) => {
    return ranges.some(range => moment(date).isBetween(range.start, range.end, 'day', '[]'));
  };

  const doesOverlapWithHighlightedRange = (start, end, ranges) => {
    return ranges.some(range =>
      (moment(start).isBetween(range.start, range.end, 'day', '[]') ||
      moment(end).isBetween(range.start, range.end, 'day', '[]')) ||
      (moment(range.start).isBetween(start, end, 'day', '[]') ||
      moment(range.end).isBetween(start, end, 'day', '[]'))
    );
  };

  const onChange = (nextValue) => {
    if (Array.isArray(nextValue)) {
      const [start, end] = nextValue;
      if (doesOverlapWithHighlightedRange(start, end, highlightRanges)) {
        alert('You cannot select ranges that include highlighted ranges.');
        return;
      }
      setValue(nextValue);
      const totalFee = calculateRentalFee(nextValue, dailyRate);
      setRentalFee(totalFee);
      setSelectedRange(nextValue);
      setTotalDays(moment(end).diff(moment(start), 'days') + 1);
      console.log(`Selected range: ${moment(start).format('YYYY-MM-DD')} - ${moment(end).format('YYYY-MM-DD')}`);
      console.log(`Total rental fee: $${totalFee}`);
    } else {
      if (isDateInHighlightedRange(nextValue, highlightRanges)) {
        alert('You cannot select highlighted dates.');
        return;
      }
      setValue(nextValue);
      setRentalFee(0);
      setSelectedRange(null);
      setTotalDays(0);
      console.log(`Selected date: ${moment(nextValue).format('YYYY-MM-DD')}`);
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (isWithinAnyRange(date, highlightRanges)) {
        return 'highlight';
      }
    }
    return null;
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
        formatDay={(locale, date) => moment(date).format('D')}
        tileClassName={tileClassName}
      />
      {/* <div className="text-gray-500 mt-4">
        {/* {formatDateRange(value)} 
      </div> */}
    </div>
  );
};

export default ReactCalendar;
