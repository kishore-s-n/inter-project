import BackButton from "./Backbtn";

const ScheduleGraph = () => {
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
      <div className="bg-white-50 min-h-screen py-8">
        <BackButton />
        <div className="grid grid-cols-24 gap-2">
          {renderHours()}
        </div>
      </div>
    );
  };
  
  export default ScheduleGraph