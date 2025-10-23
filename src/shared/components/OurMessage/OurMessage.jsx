import "./OurMessage.css";

const OurMessage = () => {
  return (
    <div className="our_message">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-12 col-12">
            <br />
            <br />
            <br />
            <h1 className="text-secondary text-center" data-aos="fade-up">
              رسالتنا
            </h1>
            <div className="gradient"></div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-12">
            <div className="p-5 bg-white rounded-4 my-3 shadow-sm">
              <p className="line-height fw-bold my-2" data-aos="fade-up" data-aos-delay="100">
                نسعى لتحويل أفكار عمالئنا إلى مشاريع رقمية ناجحة تُحدث فرقًا
                حقيقيًا في السوق، ونوفر حلولاً تقنية مبتكرة تدعم النمو، وتعزز
                التفاعل، وتبني تجربة مستخدم استثنائية.
              </p>
              <p className="line-height fw-bold my-2" data-aos="fade-up" data-aos-delay="200">
                نعمل بشغف على ابتكار استراتيجيات رقمية متكاملة تجمع بين اإلبداع
                والتقنية، لنساعدك على تحقيق رؤيتك وتحويلها إلى إنجازات ملموسة.
              </p>
              <p className="line-height fw-bold my-2" data-aos="fade-up" data-aos-delay="300">
                فريقنا من الخبراء يسعى دائمًا لتقديم قيمة مضافة في كل خطوة من
                رحلتك الرقمية، بدءًا من التخطيط والتصميم، مرورًا بالتنفيذ، وصولا
                إلى التطوير المستمر لضمان النجاح والاستدامة. هدفنا أن نكون شريكك
                الموثوق في بناء مستقبل رقمي أكثر تأثيرًا وتميزا.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMessage;
