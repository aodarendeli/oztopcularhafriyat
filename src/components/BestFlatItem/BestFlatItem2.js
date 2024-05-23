import {Link} from "react-router-dom"
const BestFlatItem = ({flatState}) => {
    return (
        <div className="best-estate">
            <div className="best-estate-item">
                <div className="best-estate-img-area">
                    <img className="best-estate-img" src="https://cdn.pixabay.com/photo/2022/01/10/15/29/wind-mills-6928590_1280.jpg" alt="flat" />
                    <div className={`best-estate-state ${flatState ==="For Rent" ? "bg-green" : "bg-red" }`}>{flatState}</div>
                </div>
                <div className="best-estate-content">
                    <h4><Link to="/">Enerji</Link></h4>
                    <span><Link to="/">Faaliyetleri</Link></span>
                </div>
                <div className="best-estate-features">
                    <div className="d-flex">
                        <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>Dünya ve ülkemizin giderek artan enerji ihtiyacına yönelik Uluslar arası ve bölgesel çalışmaların değerlendirilmesi alanlarında calısmaktayız.</span>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestFlatItem