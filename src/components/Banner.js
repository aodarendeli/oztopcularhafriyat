import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/aerial-drone-vi…-ships-sea-port-multiple-buildings_1268-24414.jpg')` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <p>Sektörün Önde Gelenlerinden</p>
                                <h2 className="mt-2 mb-4 banner-title"><strong>Daha Fazla Bilgi Almak İçin</strong> </h2>
                                <Link to="/contact">
                                    <button className="btn-search m-2">İletişime Geç</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;