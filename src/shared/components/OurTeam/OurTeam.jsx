import "./OurTeam.css";
import Tilt from "react-parallax-tilt";
const OurTeam = () => {
  return (
    <div className="our_team" id="our_team">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-12 col-12">
            <img
              src="/logo-white.png"
              className="my-3 logo"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ width: "auto", maxHeight: "70px" }}
              alt="--"
            />
            <h1 className="light-white" data-aos="fade-up" data-aos-delay="200">
              فريقنا
            </h1>
            <h2
              className="text-white line-height fw-bold"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              وراء كل فكرة ناجحة فريق مبدع يجمع بين الخبرة والشغف لصناعة الأفضل
              دائًما
            </h2>
            <span
              className="light-white"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              إن انسجام فريقنا هو السر في تحويل أفكارك إلى واقع.
            </span>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-12 col-12">
            <br />
            <br />
            <ul className="list-unstyled p-0">
              <Tilt>
                <li>
                  <img src="/team/58.png" alt="" />
                  <div className="team_info">
                    <b className="text-white d-block">Moataz Mohamd</b>
                    <b className="text-white d-block main-color text-sm">
                      CMO, CO-FOUNDER
                    </b>
                  </div>
                </li>
              </Tilt>
              <Tilt>
                <li>
                  <img src="/team/57.png" alt="" />
                  <div className="team_info">
                    <b className="text-white d-block">Mohamed A.Bahnsawy</b>
                    <b className="text-white d-block main-color text-sm">
                      FOUNDER,CTO
                    </b>
                  </div>
                </li>
              </Tilt>
              <Tilt>
                <li>
                  <img src="/team/59.png" alt="" />
                  <div className="team_info">
                    <b className="text-white d-block">Sherif watany</b>
                    <b className="text-white d-block main-color text-sm">
                      CEO, CO-FOUNDER
                    </b>
                  </div>
                </li>
              </Tilt>
            </ul>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <hr />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="team_members">
              <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/67.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Al-Anoud Shaban</b>
                      <b className="text-white d-block main-color text-sm">
                        PROJECT MANAGER
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/66.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Yousef Ashraf</b>
                      <b className="text-white d-block main-color text-sm">
                        TEAM LEADER FRONT END DEVELOPER
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/68.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Mohamed Roshdy</b>
                      <b className="text-white d-block main-color text-sm">
                        TEAM LEADER FLUTER DEVELOPER
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/69.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Anas Ashraf</b>
                      <b className="text-white d-block main-color text-sm">
                        TEAM LEADER BACK END DEVELOPER
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/65.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Ahmed Ibrahim</b>
                      <b className="text-white d-block main-color text-sm">
                        PRODUCT DESIGNER
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/63.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Mahmoud Moukhtar</b>
                      <b className="text-white d-block main-color text-sm">
                        MARKETING MANAGER
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/61.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Malak Khaled</b>
                      <b className="text-white d-block main-color text-sm">
                        ACCOUNT MANAGER
                      </b>
                    </div>
                  </div>
                </div>

                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/71.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Mohamed Kamal</b>
                      <b className="text-white d-block main-color text-sm">
                        UI-UX Designer
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/72.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Mohamed Kamal</b>
                      <b className="text-white d-block main-color text-sm">
                        Software Tester
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/60.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Amr Tarek</b>
                      <b className="text-white d-block main-color text-sm">
                        BACK END DEVELOPER
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/64.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Mohamed Fisal</b>
                      <b className="text-white d-block main-color text-sm">
                        Back End Developer
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/62.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Abdelrhman Ali</b>
                      <b className="text-white d-block main-color text-sm">
                        Back End Developer
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/70.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Mahmoud Abdelrhman</b>
                      <b className="text-white d-block main-color text-sm">
                        Back End Developer
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/84.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Mohamed Elshafai</b>
                      <b className="text-white d-block main-color text-sm">
                        Back End Developer
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/80.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Salem Mohamed</b>
                      <b className="text-white d-block main-color text-sm">
                        Back End Developer
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/85.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Khaled Abdelbasit</b>
                      <b className="text-white d-block main-color text-sm">
                        Back End Developer
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/73.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Abdelrhman Hosny</b>
                      <b className="text-white d-block main-color text-sm">
                        Front End Developer
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/74.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Asmaa Abdelrazek</b>
                      <b className="text-white d-block main-color text-sm">
                        Front End Developer
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/75.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Mahmoud Amged</b>
                      <b className="text-white d-block main-color text-sm">
                        Front End Developer
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/77.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Abdallah Khalifa</b>
                      <b className="text-white d-block main-color text-sm">
                        Flutter Developer
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/82.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Zeyad Medhat</b>
                      <b className="text-white d-block main-color text-sm">
                        Flutter Developer
                      </b>
                    </div>
                  </div>
                </div>

                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/79.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Mahmoud Abdelmomen</b>
                      <b className="text-white d-block main-color text-sm">
                        Flutter Developer
                      </b>
                    </div>
                  </div>
                </div>

                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/87.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Abdelrhman Adel</b>
                      <b className="text-white d-block main-color text-sm">
                        Flutter Developer
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/83.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Marwan Ali</b>
                      <b className="text-white d-block main-color text-sm">
                        Flutter Developer
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/86.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Ayman Mansour</b>
                      <b className="text-white d-block main-color text-sm">
                        Flutter Developer
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/78.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Doaa Abuelkhair</b>
                      <b className="text-white d-block main-color text-sm">
                        Flutter Developer
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/81.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Huda Abdelsabour</b>
                      <b className="text-white d-block main-color text-sm">
                        Sales
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/76.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Rehab Rabiea</b>
                      <b className="text-white d-block main-color text-sm">
                        Sales
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/88.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Shrouk Mohamed</b>
                      <b className="text-white d-block main-color text-sm">
                        Sales
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                  <div
                    className="member_card"
                    style={{ backgroundImage: "url('/team/89.png')" }}
                  >
                    <div className="team_info">
                      <b className="text-white d-block">Aya Ahmed</b>
                      <b className="text-white d-block main-color text-sm">
                        Account Manager
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
