import './OurVision.css';

const OurVision = () => {
    return (
      <div className="our_vision">
        <div className="container">
          <h1 className="text-secondary text-center" data-aos="fade-up">
            رؤيتنا
          </h1>
          <div className='gradient'></div>
          <div className="p-5 bg-white rounded-4 my-3 shadow-sm">
            <p
              className="line-height fw-bold my-2"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              نهدف إلى تحويل أفكارك إلى حقيقة رقمية، ونسعى جاهدين لتوفير أحدث
              وأفضل الحلول المتقدمة في مجالات تقنية المعلومات، لنساعدك على بناء
              وتعزيز الوجود الرقمي لعملك عبر الإنترنت.
            </p>
            <p
              className="line-height fw-bold my-2"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              نؤمن بأن التحول الرقمي هو مفتاح النجاح في عالم الأعمال الحديث، لذا
              نعمل بشغف وإبداع لتطوير حلول متكاملة تلبي احتياجاتك وتواكب
              تطلعاتك.
            </p>
            <p
              className="line-height fw-bold my-2"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              من تصميم وتجربة المستخدم إلى تطوير الأنظمة وإدارة المشاريع، نضع
              رؤيتك في المقدمة ونحولها إلى واقع يميزك عن المنافسين.
            </p>
          </div>
        </div>
      </div>
    );
}

export default OurVision;
