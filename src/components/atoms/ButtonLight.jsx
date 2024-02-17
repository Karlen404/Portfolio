/* eslint-disable react/prop-types */

function ButtonLight(props) {

  return (
    <button className={`border-solid border ${props.border} rounded-full px-3 py-1 cursor-pointer ${props.text} ${props.bgHover} ${props.textHover} transition duration-300`}>
      {props.title}
    </button>
  )
}

export default ButtonLight