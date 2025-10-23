import './Partner.css';

const Partner = () => {
    return (
      <div className="partner text-center">
        <div className="container">
          <h1 className="text-white fw-bold line-height" data-aos="fade-up">
            برمجة.<span className="main-color">تك </span>
            <br /> شريكك في ابتكار الحلول البرمجية المميزة.
          </h1>
          <div className="gradient"></div>
          <a className="navbar-brand" href="#">
            <img src="/logo-white.png" />
          </a>
        </div>
      </div>
    );
}

export default Partner;
