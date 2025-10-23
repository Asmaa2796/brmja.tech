import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='contact_us text-center' id="contact_us">
            <div className='container'>
                <h1 className='text-secondary' data-aos="fade-up">اتصل بنا</h1>
                <h2 className='fw-bold' data-aos="fade-up" data-aos-delay="100">تواصل معنا</h2>
                <ul className='list-unstyled p-0 mb-0 mt-3'>
                    <li className='shadow-sm' data-aos="fade-up" data-aos-delay="200">
                        <a><img src='/global.png'/><span>Brmja.tech</span></a>
                    </li>
                    <li className='shadow-sm' data-aos="fade-up" data-aos-delay="300">
                        <a><img src='/facebook.png'/><span>Brmja.tech</span></a>
                    </li>
                    <li className='shadow-sm' data-aos="fade-up" data-aos-delay="400">
                        <a><img src='/instagram.png'/><span>Brmja.tech</span></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ContactUs;
