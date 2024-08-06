import moment from 'moment';
import React, { useState, useContext, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ReactCalendar.css';
import { RentalFeeContext } from '../../context/RentalFeeContext';
import { calculateRentalFee } from '../../utils/calculateRentalFee';
import { getRentalHistory } from '../../apis/product';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ReactCalendar = () => {
  const { setRentalFee, dailyRate, setTotalDays, setSelectedRange } = useContext(RentalFeeContext);
  const [value, setValue] = useState(new Date());
  const [highlightRanges, setHighlightRanges] = useState([]);
  const {productID} = useParams();

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
        alert('선택한 기간에 이미 대여 약속이 있어요!');
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
        alert('선택한 기간에 이미 대여 약속이 있어요!');
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

  useEffect(() => {
    // 대여 기록을 불러와서 highlightRanges 상태 업데이트
    getRentalHistory(productID).then((data) => {
      const newRanges = data.map((history) => {
        const startYear = history.rental_start_date.substring(0, 4);
        const startMonth = history.rental_start_date.substring(5, 7);
        const startDay = history.rental_start_date.substring(8, 10);
        const endYear = history.rental_end_date.substring(0, 4);
        const endMonth = history.rental_end_date.substring(5, 7);
        const endDay = history.rental_end_date.substring(8, 10);

        return {
          start: new Date(startYear, startMonth - 1, startDay),
          end: new Date(endYear, endMonth - 1, endDay),
        };
      });

      setHighlightRanges(newRanges);
    }).catch((error) => {
      console.error('대여 정보 가져오기 실패:', error);
    });
  }, []);

  useEffect(() => {
    // highlightRanges가 업데이트된 후에 로그 출력
    console.log("<highlightRanges>");
    console.log(highlightRanges);
  }, [highlightRanges]);

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={true}
        formatDay={(locale, date) => moment(date).format('D')}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default ReactCalendar;
