/* eslint-disable react/prop-types */

function ButtonFill(props) {
  return (
    <button className={`bg-primary text-bgLight border-solid border border-primary rounded-full px-4 py-2 cursor-pointer ${props.text} hover:bg-hover hover:bg-transparent hover:text-primary dark:hover:border-bgLight dark:hover:text-bgLight transition duration-500 ease-in-out`}>
      {props.title}
    </button>
  )
}

export default ButtonFill