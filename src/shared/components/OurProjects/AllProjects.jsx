import Breadcrumb from "../Breadcrumb/Breadcrumb";
import "./OurProjects.css";
import { FaGlobe } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { BsAndroid2 } from "react-icons/bs";
import Tilt from 'react-parallax-tilt';
const AllProjects = () => {
  return (
    <>
      <Breadcrumb title="كل المشاريع" />

      <div className="all_projects">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 col-12">
              <div className="project_card my-3 shadow-sm rounded-3 border">
                <div className="project_image">
                  <img src="/projects/5.png" alt="--" />
                </div>
                <hr className="mx-2"/>
                <div className="my-2 project_links">
                  <a className="link" target="_blank">
                    <FaGlobe />
                  </a>
                  <a className="link" target="_blank">
                    <BsApple />
                  </a>
                  <a className="link" target="_blank">
                    <BsAndroid2 />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-12">
              <div className="project_card my-3 shadow-sm rounded-3 border">
                <div className="project_image">
                  <img src="/projects/6.png" alt="--" />
                </div>
                <hr className="mx-2"/>
                <div className="my-2 project_links">
                  <a className="link" target="_blank">
                    <FaGlobe />
                  </a>
                  <a className="link" target="_blank">
                    <BsApple />
                  </a>
                  <a className="link" target="_blank">
                    <BsAndroid2 />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-12">
              <div className="project_card my-3 shadow-sm rounded-3 border">
                <div className="project_image">
                  <img src="/projects/7.png" alt="--" />
                </div>
                <hr className="mx-2"/>
                <div className="my-2 project_links">
                  <a className="link" target="_blank">
                    <FaGlobe />
                  </a>
                  <a className="link" target="_blank">
                    <BsApple />
                  </a>
                  <a className="link" target="_blank">
                    <BsAndroid2 />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-12">
              <div className="project_card my-3 shadow-sm rounded-3 border">
                <div className="project_image">
                  <img src="/projects/8.png" alt="--" />
                </div>
                <hr className="mx-2"/>
                <div className="my-2 project_links">
                  <a className="link" target="_blank">
                    <FaGlobe />
                  </a>
                  <a className="link" target="_blank">
                    <BsApple />
                  </a>
                  <a className="link" target="_blank">
                    <BsAndroid2 />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-12">
              <div className="project_card my-3 shadow-sm rounded-3 border">
                <div className="project_image">
                  <img src="/projects/9.png" alt="--" />
                </div>
                <hr className="mx-2"/>
                <div className="my-2 project_links">
                  <a className="link" target="_blank">
                    <FaGlobe />
                  </a>
                  <a className="link" target="_blank">
                    <BsApple />
                  </a>
                  <a className="link" target="_blank">
                    <BsAndroid2 />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-12">
              <div className="project_card my-3 shadow-sm rounded-3 border">
                <div className="project_image">
                  <img src="/projects/10.png" alt="--" />
                </div>
                <hr className="mx-2"/>
                <div className="my-2 project_links">
                  <a className="link" target="_blank">
                    <FaGlobe />
                  </a>
                  <a className="link" target="_blank">
                    <BsApple />
                  </a>
                  <a className="link" target="_blank">
                    <BsAndroid2 />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-12">
              <div className="project_card my-3 shadow-sm rounded-3 border">
                <div className="project_image">
                  <img src="/projects/11.png" alt="--" />
                </div>
                <hr className="mx-2"/>
                <div className="my-2 project_links">
                  <a className="link" target="_blank">
                    <FaGlobe />
                  </a>
                  <a className="link" target="_blank">
                    <BsApple />
                  </a>
                  <a className="link" target="_blank">
                    <BsAndroid2 />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-12">
              <div className="project_card my-3 shadow-sm rounded-3 border">
                <div className="project_image">
                  <img src="/projects/12.jpg" alt="--" />
                </div>
                <hr className="mx-2"/>
                <div className="my-2 project_links">
                  <a className="link" target="_blank">
                    <FaGlobe />
                  </a>
                  <a className="link" target="_blank">
                    <BsApple />
                  </a>
                  <a className="link" target="_blank">
                    <BsAndroid2 />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProjects;
