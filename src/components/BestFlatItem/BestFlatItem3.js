import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

const BestFlatItem = ({ flatState }) => {
    const { t } = useTranslation();

    return (
        <div className="best-estate">
            <div className="best-estate-item">
                <div className="best-estate-img-area">
                    <img className="best-estate-img" src="https://cdn.pixabay.com/photo/2024/03/11/13/43/gas-station-8626683_1280.jpg" alt="flat" />
                    <div className={`best-estate-state ${flatState === "For Rent" ? "bg-green" : "bg-red"}`}>{flatState}</div>
                </div>
                <div className="best-estate-content">
                    <h4><Link to="/">{t('yakit')}</Link></h4>
                    <span><Link to="/">{t('activity')}</Link></span>
                </div>
                <div className="best-estate-features">
                    <div className="d-flex">
                        <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>{t('oz3')}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestFlatItem