// import Project from '../assets/login.png';
// import data from '../data/projects.json';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
//import { data } from "autoprefixer";
import { FaJs, FaReact, FaHtml5, FaCss3, FaGithub, FaDocker } from "react-icons/fa";

export default function Home() {
  const settings = {
    dots: true,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const skillsArr = [
    {
      "name": 'JavaScript',
      "icon": FaJs
    },
    {
      "name": "HTML",
      "icon": FaHtml5
    },
    {
      "name": "CSS",
      "icon": FaCss3
    },
    {
      "name": "Git",
      "icon": FaGithub
    },
    {
      "name": "Reactjs",
      "icon": FaReact
    },
    {
      "name": "Docker",
      "icon": FaDocker
    }
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="header">
        <div className="header-logo">
          <a href="#app"><h3 className="header-name">Prabir Padhy</h3></a>
        </div>
        <div className="header-container">
          <div className="nav-item"><a href="#about">About</a></div>
          <div className="nav-item"><a href="#projects">Projects</a></div>
          <div className="nav-item"><a href="#skills">Skills</a></div>
        </div>
      </div>

      <div id="body" className="body">
        <div className="body-container">
          <div className="body-profile">
            <img alt='avatar' src="picofme.png" />

            <div className="body-content">
              <div className="body-headline">Prabir Padhy</div>
              <div className="body-text">Software Engineering Lead</div>
            </div>

            {/* <div className="body-icons">
                        <a href="https://www.educative.io/" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
                        <a href="https://www.educative.io/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
                    </div>  */}
          </div>
        </div>
      </div>

      <div id="about" className="about">
        <h1 className="about-heading">About Me</h1>
        <div className="about-info">
          <p className="about-desc">Innovative and accomplished professional with 12 years of diverse experience in software Development lifecycle as an Architect and Java Full Stack
            Developer. Specialized in crafting cutting-edge solutions in Distributed Systems and Event-Driven Architecture, with a focus on leveraging AWS for
            scalable and secure applications. Proficient in building efficient Microservices architectures using Java and Node.js, complemented by a deep
            understanding of Data Structures & Algorithms. A proven leader with a track record of providing technical guidance, conducting architecture reviews,
            code reviews and implementing solutions that enhance project efficiency and quality. Skilled in integrating new technologies, optimizing workflows,
            and reducing manual processes.</p>
          <div className="about-img">
            <div className="about-img-wrapper">
              <img src="src/assets/Detective.png" alt="Detective" />
            </div>
          </div>
        </div>
      </div>

      {/* <div id='projects' className='projects'>
            <div className="heading">
                <h2>WORKS</h2>
            </div>
                <div className="projects-container">
                    <Slider {...settings}>
                    {
                        data.map((project, key) => {
                            return (
                                <div key={key} className="project">
                                    <div className="content">
                                        <img src={Project} alt="Project" />
                                        <h2 className="name">{project.name}</h2>
                                        {
                                            project.description.length > 130 
                                            ? <p className='description-min'>{project.description}</p>
                                            :  <p className='description'>{project.description}</p>                                            
                                        }
                                        <div>
                                            <a
                                            className="project-button"
                                            target="_blank"
                                            href={project.link}
                                            rel="noreferrer"
                                            >GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </Slider>
                </div>
        </div> */}


      <div id='skills' className='skills'>
        <h2 className='title'>Skills</h2>
        <div className='skill-holder'>
          {
            skillsArr.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <i key={index} className='skill-cards'>
                  <Icon className='skill-icon' />
                  <p
                    className="skill"
                  >
                    {skill.name}
                  </p>
                </i>
              )
            })
          }
        </div>
      </div>

      <footer id="footer" className="footer">
        <div className="footer-contact-info">
          <h1 className="footer-heading">Connect With Me</h1>
          <p className="footer-contact-access">Email: prabir.sain@gmail.com</p>
          <p className="footer-contact-access">Mobile: +91-9483207656</p>
        </div>
      </footer>

    </main>
  )
}
