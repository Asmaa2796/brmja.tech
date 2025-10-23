import './About.css';

const About = () => {
    return (
      <div className="about text-center" id="about">
        <div className="container">
          <h1 className="text-secondary" data-aos="fade-up">
            من نحـن
          </h1>
          <h2
            className="fw-bold text-white"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            تعرف علينا
          </h2>
          <p
            className="light-white line-height my-5"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            برمجة تك هي شركة رائدة في مجال تطوير برمجيات الويب وتصميم المواقع
            وبرمجة تطبيقات الهواتف المحمولة، وتقدم أيضا خدمات استضافة المواقع
            وتصميم الفيديوهات الدعائية وتهيئة تطبيقات والتسويق اللإلكتروني، حيث
            نسعى دائًما لتقديم حلول رقمية مبتكرة تجمع بين الإبداع والتقنية لتحقيق أفضل النتائج لعملائنا
                  وأرشفة المواقع (ASO) وتحسين محركات البحث (SEO) .
          </p>
          <div className="gradient"></div>
        </div>
      </div>
    );
}

export default About;
