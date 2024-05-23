import {Link} from "react-router-dom"
const BestFlatItem = ({flatState}) => {
    return (
        <div className="best-estate">
            <div className="best-estate-item">
                <div className="best-estate-img-area">
                    <img className="best-estate-img" src="https://cdn.pixabay.com/photo/2024/03/11/13/43/gas-station-8626683_1280.jpg" alt="flat" />
                    <div className={`best-estate-state ${flatState ==="For Rent" ? "bg-green" : "bg-red" }`}>{flatState}</div>
                </div>
                <div className="best-estate-content">
                    <h4><Link to="/">Akaryakıt Dağılım</Link></h4>
                    <span><Link to="/">Faaliyetleri</Link></span>
                </div>
                <div className="best-estate-features">
                    <div className="d-flex">
                        <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>Oztopcular Akaryakıt alanında da sizler için en güvenilir hizmetini İstanbul bölgelerimizde çalışma faailiyetleri göstermekteyiz.</span>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestFlatItem