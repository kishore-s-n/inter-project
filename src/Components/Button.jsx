export const Button = (props) => {
  return (
    <div className="w-full flex justify-center ">

      {/* eslint-disable-next-line react/prop-types */}
      <button className="bg-gradient-to-r from-blue-500 to-slate-300  text-white text-xl p-2 w-3/4 rounded-xl">
        {props.text}
      </button>
    </div>
  )
}
