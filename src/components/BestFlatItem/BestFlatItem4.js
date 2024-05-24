import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

const BestFlatItem = ({ flatState }) => {
    const { t } = useTranslation();

    return (
        <div className="best-estate">
            <div className="best-estate-item">
                <div className="best-estate-img-area">
                    <img className="best-estate-img" src="https://cdn.pixabay.com/photo/2016/11/29/04/15/digger-1867268_1280.jpg" alt="flat" />
                    <div className={`best-estate-state ${flatState === "For Rent" ? "bg-green" : "bg-red"}`}>{flatState}</div>
                </div>
                <div className="best-estate-content">
                    <h4><Link to="/">{t('car')}</Link></h4>
                    <span><Link to="/">{t('activity')}</Link></span>
                </div>
                <div className="best-estate-features">
                    <div className="d-flex">
                        <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>{t('oz4')}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestFlatItem