import Title from "../components/atoms/Title"
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa"

function About() {
  return (
    <div className="pt-10 my-10" id="about">
      <Title title="About" />
      <div className="gap-8 flex flex-col md:flex-row">
        <div className="h-60 top-28 rounded-2xl overflow-hidden md:w-1/2 md:sticky md:h-auto">
          <img src="https://i.pinimg.com/236x/6f/24/5a/6f245a707c74b269e69a9c831340db1b.jpg" height="800" width="600" alt="" className="object-cover object-center  md:aspect-auto" />
        </div>
        <div className="md:w-1/2 md:sticky">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa natus facere doloremque quasi unde ipsam enim, dolor adipisci voluptatibus. Voluptates veniam aliquid culpa quia ullam itaque id? Aliquam, voluptatibus magni.
            Dignissimos, itaque! Quaerat iure fugiat tenetur aspernatur porro ab deserunt, vitae adipisci dolorem nisi. Quam quisquam ullam repudiandae aliquam velit fugiat,</p>
          <div>
            <p>Skill</p>
            <ul className="flex gap-2">
              <li>
                <FaHtml5 />
              </li>
              <li>
                <FaCss3 />
              </li>
              <li>
                <FaJs />
              </li>
              <li>
                <FaReact />
              </li>
              <li>
                <FaFigma />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About