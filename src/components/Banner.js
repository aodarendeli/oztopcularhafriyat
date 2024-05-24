import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"
import Slider from "react-slick";


const Banner = () => {
    const { t } = useTranslation();
    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        cssEase: "linear",
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        // <Slider {...settings}>
            <div className="banner d-flex align-items-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/aerial-drone-vi…-ships-sea-port-multiple-buildings_1268-24414.jpg')` }}>
                <div className="bg-custom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="banner-area text-center pt-4 pb-4">
                                    <p>{t('sektör')}</p>
                                    <h2 className="mt-2 mb-4 banner-title"><strong>{t('info')}</strong> </h2>
                                    <Link to="/contact">
                                        <button className="btn-search m-2">{t('contact')}</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </Slider>
    )
}

export default Banner;