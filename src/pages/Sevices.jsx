import Title from "../components/atoms/Title"
import ServicesCard from "../components/molecules/ServicesCard"
import { RiCodeView } from "react-icons/ri";
import { CiPen } from "react-icons/ci";

function Sevices() {
  const icon = <RiCodeView />
  const icon2 = <CiPen />
  const icon3 = <CiPen />
  return (
    <div className="my-10" id="services">
      <Title title="Services" />
      <div className="gap-4 md:flex">
        <ServicesCard title='Web Development' caption='dsad' icon={icon} />
        <ServicesCard title='UI/UX Design' caption='dsad' icon={icon2} />
        {/* <ServicesCard title='Web Development' caption='dsad' icon={icon3} /> */}
      </div>
    </div>
  )
}

export default Sevices