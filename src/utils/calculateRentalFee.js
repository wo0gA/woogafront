// 대여료 계산 함수
export const calculateRentalFee = (range, dailyRate) => {
  if (!Array.isArray(range) || range.length !== 2) {
    throw new Error('Invalid date range');
  }

  const [startDate, endDate] = range;
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(Math.abs((endDate - startDate) / oneDay));

  const totalRentalFee = diffDays * dailyRate;

  return totalRentalFee;
};

