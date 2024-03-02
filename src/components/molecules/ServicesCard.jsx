/* eslint-disable react/prop-types */


function ServicesCard(props) {
  return (
    <div className="w-full bg-primary dark:bg-bgLight text-bgLight dark:text-bgDark rounded-xl">
      <div className="m-4 flex gap-4 md:flex-col">
        <div className="text-5xl md:text-7xl dark:text-primary">
          {props.icon}
        </div>
        <div>
          <h1 className="text-xl font-bold">
            {props.title}
          </h1>
          <p>{props.caption}</p>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard