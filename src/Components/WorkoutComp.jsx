
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
        <input type="checkbox" name={props.name} id={props.id} className="h-5 w-5"/>
    </div>
  )
}

export default WorkoutComp