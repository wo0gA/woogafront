import React, { createContext, useState } from 'react';

const RentalFeeContext = createContext();

const RentalFeeProvider = ({ children }) => {
  const [rentalFee, setRentalFee] = useState(0);
  const [dailyRate, setDailyRate] = useState(100); // 기본 하루 대여료
  const [totalDays, setTotalDays] = useState(0);
  const [selectedRange, setSelectedRange] = useState(null);

  return (
    <RentalFeeContext.Provider value={{ 
      rentalFee, setRentalFee, dailyRate, setDailyRate , totalDays, setTotalDays, 
      selectedRange, setSelectedRange}}>
      {children}
    </RentalFeeContext.Provider>
  );
};

export { RentalFeeContext, RentalFeeProvider };
