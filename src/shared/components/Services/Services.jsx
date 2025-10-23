import './Services.css';
import Tilt from 'react-parallax-tilt';
const Services = () => {
    return (
      <div className="services" id="services">
        <div className="container">
          <h1 className="text-secondary text-center">خدمات</h1>
          <h2 className='text-center fw-bold'>
            <span>برمجة.</span>
            <b className="main-color">تك</b>
          </h2>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="100">
            <Tilt className="background-stripes parallax-effect" perspective={500}>
              <div className="service_card shadow-sm s_gradient">
                <h5 className="text-white fw-bold">العلامة التجارية والهوية</h5>
                <p className="line-height light-white">
                  الشعارات، ودالئل الهوية البصرية، وأنظمة الهوية لتأسيس صورة
                  عالمة تجارية فريدة ومتناسقة.
                </p>
              </div>
              </Tilt>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
            <Tilt className="background-stripes parallax-effect" perspective={500}>
              <div className="service_card shadow-sm">
                <div className="gradient"></div>
                <h5 className="text-dark fw-bold">الحلول التقنية</h5>
                <ul className='p-0'>
                  <li>تطبيق موبايل</li>
                  <li>موقع إلكتروني</li>
                  <li>متجر إلكتروني</li>
                </ul>
              </div>
              </Tilt>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
            <Tilt className="background-stripes parallax-effect" perspective={500}>
              <div className="service_card shadow-sm">
                <div className="gradient"></div>
                <h5 className="text-dark fw-bold">الأنظمة الإدارية</h5>
                <ul className='p-0'>
                  <li>تخطيط موارد المؤسسة</li>
                  <li>نظام الكاشير</li>
                  <li>إدارة علاقات العملاء</li>
                </ul>
              </div>
              </Tilt>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="400">
            <Tilt className="background-stripes parallax-effect" perspective={500}>
              <div className="service_card shadow-sm">
                <div className="gradient"></div>
                <h5 className="text-dark fw-bold">الخدمات التسويقية والدعم</h5>
                <ul className='p-0'>
                  <li>خطة التسويق</li>
                  <li>خطة دعم العملاء</li>
                </ul>
              </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Services;
