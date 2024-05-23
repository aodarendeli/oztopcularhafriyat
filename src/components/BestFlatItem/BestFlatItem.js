import {Link} from "react-router-dom"
const BestFlatItem = ({flatState}) => {
    return (
        <div className="best-estate">
            <div className="best-estate-item">
                <div className="best-estate-img-area">
                    <img className="best-estate-img" src="https://www.bayburtgrup.com.tr/images/projects/uploads/2017/06/Metro.webp" alt="flat" />
                    <div className={`best-estate-state ${flatState ==="For Rent" ? "bg-green" : "bg-red" }`}>{flatState}</div>
                </div>
                <div className="best-estate-content">
                    <h4><Link to="/">İnşaat</Link></h4>
                    <span><Link to="/">Faaliyetleri</Link></span>
                </div>
                <div className="best-estate-features">
                    <div className="d-flex">
                        <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>Oztopcular akaryakıt satış ve işletmeciliği, sigorta ve aracılık hizmetleri, danışmanlık ve ticaret alanlarında faaliyet gostermekteyiz.</span>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestFlatItem