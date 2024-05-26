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
                <img src="https://kupsmedya.com/wp-content/uploads/2023/08/vadi-istanbul-photo-07.jpg" />
                <div className="carousel-info">
                    <h3>{t('sektör')}</h3>
                    <h5>{t('info')}</h5>
                    <Link to="/iletisim" className="btn btn-secondary">{t('contact')}</Link>
                </div>

            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2021/07/18/05/44/excavation-6474682_1280.jpg" />
                <div className="carousel-info">
                    <h3>{t('sektör')}</h3>
                    <h5>{t('info')}</h5>
                    <Link to="/iletisim" className="btn btn-secondary">{t('contact')}</Link>
                </div>
            </div>
            <div>
                <img src="https://annebulusmalari.com/wp-content/uploads/2019/10/capacity.jpg" />
                <div className="carousel-info">
                    <h3>{t('sektör')}</h3>
                    <h5>{t('info')}</h5>
                    <Link to="/iletisim" className="btn btn-secondary">{t('contact')}</Link>
                </div>
            </div>
            <div>
                <img src="https://www.birlesim.com/files/projeler/avm/tm/axis/axis_1.jpg" />
                <div className="carousel-info">
                    <h3>{t('sektör')}</h3>
                    <h5>{t('info')}</h5>
                    <Link to="/iletisim" className="btn btn-secondary">{t('contact')}</Link>
                </div>
            </div>
        </Carousel>
    )
}

export default Banner;