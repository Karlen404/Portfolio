
import ButtonLight from "../components/atoms/ButtonLight"
import Title from "../components/atoms/Title"
// import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa"
import AboutOptions from "../components/molecules/AboutOptions"

function About() {
  function downloadCV() {
    const url = '/cobacv.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.setAttribute('download', 'cobacv.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="my-10 " id="about">
      <div className="w-full">
        <Title title="About" />
        <div className="gap-8 flex flex-col md:flex-row">
          <div className="h-60 rounded-2xl overflow-hidden md:w-[45%] md:sticky md:h-auto">
            <img src="https://i.pinimg.com/564x/ec/6c/c4/ec6cc4dbe6b419f447151d2a42521218.jpg" height="800" width="600" alt="" className="object-cover object-center  md:aspect-auto" />
          </div>
          <div className="md:w-[55%]">
            <AboutOptions />
            <div className="mt-8">
              <ButtonLight title="Download CV" border="border-primary dark:border-bgLight" bgHover="hover:bg-primary dark:hover:bg-bgLight"
                textHover="hover:text-white dark:hover:text-bgDark" onClick={downloadCV} />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default About