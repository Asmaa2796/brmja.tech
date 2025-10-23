import './OurWorks.css';
import { FaGlobe } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { BsAndroid2 } from "react-icons/bs";
import Tilt from 'react-parallax-tilt';
const OurWorks = () => {
    return (
      <div className="our_works text-center" id="our_works">
        <div className="container">
          <h1 className="text-secondary">أهم</h1>
          <h2 className="fw-bold">أعمالنا</h2>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <Tilt>
                <div className="work_card">
                  <img src="/works/2.png" alt="" />
                  <p className="line-height fw-bold">
                    المكتب العالمي الأمني لوزارة الداخلية الليبية
                  </p>
                  <div className="my-2 links">
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
              </Tilt>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <Tilt>
                <div className="work_card">
                  <img src="/works/3.png" alt="" />
                  <p className="line-height fw-bold">Blue Bird International</p>
                  <div className="my-2 links">
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
              </Tilt>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <Tilt>
                <div className="work_card">
                  <img src="/works/4.png" alt="" />
                  <p className="line-height fw-bold">
                    أكاديمية علمني التعليمية - 3almny Academy
                  </p>
                  <div className="my-2 links">
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
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    );
}

export default OurWorks;
