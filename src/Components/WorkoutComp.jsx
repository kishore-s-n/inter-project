
function WorkoutComp  (props) {
  
  return (
    <div className="flex items-center justify-between shadow-xl w-full max-w-[600px] mx-auto p-4 rounded-3xl">
        <div className="flex items-center gap-5">
          <img src={props.imgsrc} alt="image of the workouts" className="h-20 w-20 rounded-full"/>
          <div>
            <h1 className="text-lg">{props.title}</h1>
            <p className="text-slate-400">{props.datentime}</p>
          </div>
        </div>


        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>


    </div>
  )
}

export default WorkoutComp