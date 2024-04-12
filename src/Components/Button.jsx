export const Button = (props) => {
  return (
    <div className="w-full flex justify-center ">

      {/* eslint-disable-next-line react/prop-types */}
      <button className="bg-blue-600 text-white text-xl p-2 w-3/4 m-7 rounded-xl">{props.text}</button>
    </div>
  )
}
