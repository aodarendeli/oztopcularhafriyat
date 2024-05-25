import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"
import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Banner = () => {
    const { t } = useTranslation();
    return (
        <Carousel showArrows={true} autoPlay={true} swipeable={true} interval="1500" infiniteLoop>
            <div>
                <img src="https://img.freepik.com/free-photo/aerial-drone-vi…-ships-sea-port-multiple-buildings_1268-24414.jpg" />
                <div className="carousel-info">
                    <h3>{t('sektör')}</h3>
                    <h5>{t('info')}</h5>
                    <Link to="/contact" className="btn btn-secondary">{t('contact')}</Link>
                </div>

            </div>
            <div>
                <img src="https://img.freepik.com/free-photo/aerial-drone-vi…-ships-sea-port-multiple-buildings_1268-24414.jpg" />
                <div className="carousel-info">
                    <h3>{t('sektör')}</h3>
                    <h5>{t('info')}</h5>
                    <Link to="/contact" className="btn btn-secondary">{t('contact')}</Link>
                </div>
            </div>
            <div>
                <img src="https://img.freepik.com/free-photo/aerial-drone-vi…-ships-sea-port-multiple-buildings_1268-24414.jpg" />
                <div className="carousel-info">
                    <h3>{t('sektör')}</h3>
                    <h5>{t('info')}</h5>
                    <Link to="/contact" className="btn btn-secondary">{t('contact')}</Link>
                </div>
            </div>
            <div>
                <img src="https://img.freepik.com/free-photo/aerial-drone-vi…-ships-sea-port-multiple-buildings_1268-24414.jpg" />
                <div className="carousel-info">
                    <h3>{t('sektör')}</h3>
                    <h5>{t('info')}</h5>
                    <Link to="/contact" className="btn btn-secondary">{t('contact')}</Link>
                </div>
            </div>
        </Carousel>
    )
}

export default Banner;