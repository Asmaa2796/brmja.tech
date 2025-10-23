import "./OurProjects.css";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { BsApple, BsAndroid2 } from "react-icons/bs";
import { useState } from "react";

const OurProjects = () => {
  const projects = [
    { id: 1, img: "/projects/5.png", category: "system" },
    { id: 2, img: "/projects/6.png", category: "mobile" },
    { id: 3, img: "/projects/7.png", category: "mobile" },
    { id: 4, img: "/projects/8.png", category: "mobile" },
    { id: 5, img: "/projects/9.png", category: "web" },
    { id: 6, img: "/projects/10.png", category: "web" },
    { id: 7, img: "/projects/11.png", category: "web" },
    { id: 8, img: "/projects/12.jpg", category: "mobile" },
    { id: 9, img: "/projects/50.jpg", category: "system" },
    { id: 10, img: "/projects/40.jpg", category: "web" },
    { id: 11, img: "/projects/25.png", category: "system" },
    { id: 12, img: "/projects/38.jpg", category: "system" },
  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <div className="our_projects text-center" id="our_projects">
      <div className="container">
        <h1 className="text-secondary">أهم</h1>
        <h2 className="fw-bold mb-4">مشاريعنا</h2>

        <div className="btns mb-4">
          <button
            className={`shadow-sm ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            الكل
          </button>
          <button
            className={`shadow-sm ${filter === "web" ? "active" : ""}`}
            onClick={() => setFilter("web")}
          >
            موقع ويب
          </button>
          <button
            className={`shadow-sm ${filter === "mobile" ? "active" : ""}`}
            onClick={() => setFilter("mobile")}
          >
            تطبيق موبايل
          </button>
          <button
            className={`shadow-sm ${filter === "system" ? "active" : ""}`}
            onClick={() => setFilter("system")}
          >
            نظم إدارة
          </button>
        </div>

        <div className="row">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="col-xl-3 col-lg-3 col-md-4 col-12"
            >
              <div className="card_image">
                <img src={project.img} alt="project" />
                <hr className="mx-2" />
                <div className="my-2 project_links">
                  <a className="link" target="_blank" rel="noreferrer" style={{borderColor:"#777"}}>
                    <FaGlobe style={{color:"#777"}} />
                  </a>
                  <a className="link" target="_blank" rel="noreferrer" style={{borderColor:"#000"}}>
                    <BsApple style={{color:"#000"}} />
                  </a>
                  <a className="link" target="_blank" rel="noreferrer" style={{borderColor:"forestgreen"}}>
                    <BsAndroid2 style={{color:"forestgreen"}} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center my-3">
          <Link className="all_projects shadow-sm fw-bold" to="/all_projects">
            كل المشاريع <FaArrowLeftLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
