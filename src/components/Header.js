import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    console.log(isNavCollapsed);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


    const { t, i18n } = useTranslation();
    const [type, setType] = useState('tr');

    useEffect(() => {
        i18n.changeLanguage(type);
    }, [type])

    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <div className="d-flex align-items-center">
                                {/* <i className="fas fa-home"></i> */}
                                <img width={'200px'} src="/img/logo.png" /> 
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">{t('Home')}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">{t('about')}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">{t('service')} <i className="fas fa-chevron-down"></i></Link>
                                    <ul className="sub-ul">
                                        <li><Link to="/arac-parkuru">{t('car')}</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">{t('contact')}</Link>
                                </li>
                                <li>
                                    <div className="nav-link mt-1" style={{ cursor: 'pointer' }}>
                                        {type === 'tr' ? <img width={'30px'} src='/img/turkey.png' alt="tukey" onClick={() => setType('en')} /> : <img width={'30px'} src='/img/eng.png' onClick={() => setType('tr')} alt="eng" />}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;