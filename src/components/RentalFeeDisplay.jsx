import React, { useContext } from 'react';
import { RentalFeeContext } from '../context/RentalFeeContext';

const RentalFeeDisplay = () => {
  const { rentalFee, dailyRate, totalDays, selectedRange } = useContext(RentalFeeContext);

  return (
    <div className="text-gray-700 mt-4">
      <div>총 대여료 : ${rentalFee}</div>
      <div>총 기간 : {totalDays}일</div>
      {selectedRange && (
        <div>선택된 기간 : {selectedRange[0].toLocaleDateString('ko-KR')} - {selectedRange[1].toLocaleDateString('ko-KR')}</div>
      )}
    </div>
  );
};

export default RentalFeeDisplay;
