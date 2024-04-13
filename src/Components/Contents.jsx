export const Contents = (props) => {
    return (
        <div className="flex flex-col font-mono lg:p-10">
            <h1 className="text-xl lg:text-5xl lg:py-5">{props.title}</h1>
            <p className="text-sm text-gray-600 font-medium lg:text-xl ">{props.para}</p>
        </div>
    )
}
