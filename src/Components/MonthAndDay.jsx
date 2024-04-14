import React from 'react';

const MonthAndDay = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  const currentDayOfWeek = currentDate.getDay();

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const cardStyle = 'flex items-center justify-center rounded-lg shadow-md p-4 mx-2 my-2';
  const dayStyle = 'text-center font-semibold';

  // Calculate the start and end indexes for the days array
  const startIndex = currentDayOfWeek - 2 < 0 ? 0 : currentDayOfWeek - 2;
  const endIndex = startIndex + 4 >= dayNames.length ? dayNames.length - 1 : startIndex + 4;

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-lg text-center font-semibold"> {currentMonth} & {currentYear}</h1>
      </div>
      <div className="flex  justify-center">
        {dayNames.slice(startIndex, endIndex + 1).map((day, index) => (
          <div
            key={day}
            className={`${cardStyle} ${index === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            <div className={dayStyle}>{day.substring(0, 3)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthAndDay;
