// 날짜 표시 형식 바꾸는 함수

export const formatDate = (isoString) => {
  const date = new Date(isoString);
  
  // 연도를 두 자리로 포맷
  const year = date.getFullYear().toString().slice(-2);
  
  // 월과 일을 두 자리로 포맷
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}/${month}/${day}`;
};