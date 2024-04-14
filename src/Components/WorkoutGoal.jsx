import BackButton from './Backbtn';
import Button from './Button'

const bodyParts = ['Legs', 'Arms', 'Back', 'Chest', 'Shoulders', 'Abs'];

const WorkoutGoal = () => {
  
  return (
    <div className="min-w-4xl max-w-screen p-5 h-screen flex flex-col justify-between items-center">
      <BackButton />
      <div className="top-content mt-10">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Set Your Workout Goals</h1>
        <form>
          {bodyParts.map((part) => (
            <div key={part} className="flex items-center justify-between py-2">
              <label className="flex flex-row-reverse justify-between text-sm bg-slate-200 w-full p-4 rounded-lg hover:shadow-lg">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-500 mr-3"
                />
                {part}
              </label>
            </div>
          ))}
        </form>
      </div>
      <Button to='/Home'>
        Confirm
      </Button>
      <div className="mb-1"></div>
    </div>
  );
};

export default WorkoutGoal;
