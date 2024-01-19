/* eslint-disable react/prop-types */

function Title(props) {
  return (
    <div className="text-5xl font-bold text-center mb-10">
      <h1>
        {props.title}
      </h1>
    </div>
  )
}

export default Title