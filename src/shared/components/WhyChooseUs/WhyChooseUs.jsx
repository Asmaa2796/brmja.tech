import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
      <div className="why_choose_us" id="why_choose_us">
        <div className="container">
          <h1 className="text-secondary text-center">لماذا تختارنا</h1>
          <h2 className="text-center fw-bold">
            <span className="text-white">برمجة.</span>
            <b className="main-color">تك</b>
          </h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-12 col_card">
              <div className="why_choose_us_card">
              <div className='gradient'></div>
                <h5 className="main-color fw-bold" data-aos="fade-up" data-aos-delay="100">الالتزام بالجودة</h5>
                <p className="line-height light-white" data-aos="fade-up" data-aos-delay="150">
                  في عالم يتغير بسرعة. نؤمن أن التميز لا يأتي بالصدفة، بل هو
                  ثمرة الالتزام المستمر بالجودة والحرص على تقديم أفضل النتائج في
                  كل مشروع نقوم به.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-12 col_card">
              <div className="why_choose_us_card">
              <div className='gradient'></div>
                <h5 className="main-color fw-bold" data-aos="fade-up" data-aos-delay="200">الفكر المبتكر</h5>
                <p className="line-height light-white" data-aos="fade-up" data-aos-delay="250">
                  الابتكار هو جوهر نجاحنا، نفكر بطريقة مختلفة ونبحث دائمًا عن
                  حلول إبداعية تجعل من متجرك الرقمي أكثر تميزا وفعالية.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-12 col_card">
              <div className="why_choose_us_card">
              <div className='gradient'></div>
                <h5 className="main-color fw-bold" data-aos="fade-up" data-aos-delay="300">خبرة واحترافية</h5>
                <p className="line-height light-white" data-aos="fade-up" data-aos-delay="350">
                  نمتلك فريقًا من الخبراء والمتخصصين في مجالات البرمجة والتصميم
                  والتسويق. يضمنون تنفيذ المشاريع بأعلى معايير الأداء والدقة.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-12 col_card">
              <div className="why_choose_us_card">
              <div className='gradient'></div>
                <h5 className="main-color fw-bold" data-aos="fade-up" data-aos-delay="400">دعم مستمر</h5>
                <p className="line-height light-white" data-aos="fade-up" data-aos-delay="450">
                  نرافق عملاءنا في كل خطوة، من الفكرة إلى التنفيذ، ونوفر دعمًا فنيًا متواصلا لضمان نجاح واستمرارية أعمالهم الرقمية.
                </p>
              </div>
          </div>
        </div>
      </div>
    );
}

export default WhyChooseUs;
