
const Schedule = () => {
    const renderHours = () => {
      const hours = [];
      for (let i = 0; i < 24; i++) {
        hours.push(
          <div key={i} className="hour-notation border-b border-gray-300">
            {`${i < 10 ? '0' + i : i}:00`}
          </div>
        );
      }
      return hours;
    };
  
    return (
      <div className="bg-gray-100 min-h-screen py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Today's Schedule</h1>
        <div className="grid grid-cols-24 gap-2">
          {renderHours()}
        </div>
      </div>
    );
  };
  
  export default Schedule