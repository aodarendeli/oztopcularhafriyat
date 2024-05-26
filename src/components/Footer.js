import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useTranslation } from "react-i18next"

const Footer = () => {
    const { t } = useTranslation();

    return (

        <section className="footer">

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <i style={{ fontSize: '24px' }} className="fas fa-home"></i>
                        <span className="footer-other-text d-block mt-3 mb-3">
                            Oztopcular Hafriyat başta inşaat sektörü olmak üzere enerji, üretim ve hizmet sektörlerinde akaryakıt alanlarında faaliyetlerini başarıyla sürdürmektedir.
                        </span>
                        <div className="footer-social">
                            <div className="footer-social-item">   <a href="https://www.instagram.com/oztopcularhafriyat/?igsh=MXhrbGg4bWpnano4YQ%3D%3D"> <i className="fab fa-facebook"></i>
                            </a></div>
                            <div className="footer-social-item"><a href="https://www.instagram.com/oztopcularhafriyat/?igsh=MXhrbGg4bWpnano4YQ%3D%3D"> <i className="fab fa-twitter"></i>
                            </a></div>
                            <div className="footer-social-item"> <a href="https://www.instagram.com/oztopcularhafriyat/?igsh=MXhrbGg4bWpnano4YQ%3D%3D"> <i className="fab fa-instagram"></i>
                            </a></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <p className="footer-title">Menüler</p>
                        <ul className="footer-ul">
                            <Link to='/'>
                                <li>{t('Home')}</li>
                            </Link>
                            <Link to='/hakkımızda'>
                                <li>{t('about')}</li>
                            </Link>
                            <Link to='/arac-parkuru'>
                                <li>{t('service')}</li>
                            </Link>
                            <Link to='/iletisim'>
                                <li>{t('contact')}</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div>
                            <p className="footer-title">{t('service')}</p>
                            <ul className="footer-ul">
                                <Link to='/arac-parkuru'>
                                    <li>{t('car')}</li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <p className="footer-title">İletişim</p>
                        <ul className="footer-ul">
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-clock"></i></div> <span>08:00-18:00</span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item" ><i className="fas fa-envelope"></i></div> <span className="mx-2">info@oztopcularhafriyat.com.tr</span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-map-marker-alt"></i></div> <span>Oztopcular Hafriyat</span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-phone-alt"></i></div> <span>
                                    <a href="tel:+02124628630" style={{color: 'white'}}>
                                        0212 462 86 30
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer