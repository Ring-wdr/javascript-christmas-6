const weekDay = ['일', '월', '화', '수', '목', '금', '토'];

export const currentCalendar = monthCalendar();

export default function monthCalendar({ year = 2023, month = 12 }) {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);
  const startDay = startDate.getDay();
  const totalDays = endDate.getDate();
  return Array.from({ length: totalDays }, (_, idx) => ({
    date: idx + 1,
    weekDay: weekDay[(startDay + idx) % 7],
  }));
}
