import './Header.css';

const Header = () => {
    return (
        <div className='header text-center'>
            <div className='container'>
                <h1 className='text-secondary' data-aos="fade-up" data-aos-delay="100">من هنا يبدأ</h1>
                <h2 className='fw-bold' data-aos="fade-up" data-aos-delay="200">المستقبل المبتكر</h2>
                <div className='gradient'></div>
                <p className='text-secondary my-5' data-aos="fade-up" data-aos-delay="300">نقـود برؤيـة,ونبنـي بابتـكار نحـو مسـتقبل رقمـي يلبـي طموحـات عمالئنـا</p>
            </div>
        </div>
    );
}

export default Header;
