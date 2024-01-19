/* eslint-disable react/no-unescaped-entities */
import ButtonFill from "../components/atoms/ButtonFill"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

function Home() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex items-center content-center w-full h-screen" id="home">
      <div className="md:hidden">
        <div className="flex items-center">
          <div className="grid gap-4">
            <div className="bg-primary text-bgLight text-xl rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:text-bgLight transition duration-500 ease-in-out">
              <a href="https://github.com/Karlen404" target="blank" rel="noopener noreferrer">
                <BsGithub />
              </a>
            </div>
            <div className="bg-primary text-bgLight text-xl rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:text-bgLight transition duration-500 ease-in-out">
              <a href="" target="blank" rel="noopener noreferrer">
                <BsLinkedin />
              </a>
            </div>
            <div className="bg-primary text-bgLight text-xl rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:text-bgLight transition duration-500 ease-in-out">
              <a href="" target="blank" rel="noopener noreferrer">
                <BsInstagram />
              </a>
            </div>
          </div>
          <div className="rounded-full overflow-hidden h-40 w-40 m-auto block">
            <img src="https://i.pinimg.com/564x/2e/59/86/2e59860113e8d0faa1a6334d550f8d0d.jpg" alt="Profile" />
          </div>
          <div className="w-10">
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-5xl font-bold">Hi, I'm <span className="text-primary">Karlen</span></h1>
          <h3 className="text-3xl font-semibold mt-2">FrontEnd Developer</h3>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus sed labore ad fugiat possimus animi et sint, deserunt unde optio dolores blanditiis eum quae!</p>
          <div className="mt-3">
            <ButtonFill title="Lets talk" bg="bg-primary" text="text-bgLight" />
          </div>
        </div>
      </div>

      <div className="hidden md:inline w-full">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="grid gap-4 md:mr-10 lg:mr-16">
              <div className="bg-primary text-bgLight text-xl rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:text-bgLight transition duration-500 ease-in-out">
                <a href="https://github.com/Karlen404" target="blank" rel="noopener noreferrer">
                  <BsGithub />
                </a>
              </div>
              <div className="bg-primary text-bgLight text-xl rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:text-bgLight transition duration-500 ease-in-out">
                <a href="" target="blank" rel="noopener noreferrer">
                  <BsLinkedin />
                </a>
              </div>
              <div className="bg-primary text-bgLight text-xl rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:text-bgLight transition duration-500 ease-in-out">
                <a href="" target="blank" rel="noopener noreferrer">
                  <BsInstagram />
                </a>
              </div>
            </div>
            <div className="lg:w-96 md:w-80">
              <div></div>
              <div>
                <h1 className="text-5xl font-bold">Hi, I'm <span className="text-primary">Karlen</span></h1>
                <h3 className="text-3xl font-semibold mt-4">FrontEnd Developer</h3>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque harum minus nulla, praesentium modi consectetur tempore voluptatum</p>
              </div>
              <div className="mt-6" onClick={() => scrollToSection('contact')}>
                <ButtonFill title="Let's talk" bg="bg-primary"/>
              </div>
            </div>
          </div>
          <div className="rounded-full overflow-hidden lg:w-96 lg:h-96 md:w-52 md:h-52">
            <img src="https://i.pinimg.com/564x/09/4a/6d/094a6d5924b859462b44df14ad26545c.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home