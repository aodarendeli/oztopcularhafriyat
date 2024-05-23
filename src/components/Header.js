import React, { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    console.log(isNavCollapsed);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light mt-3 mb-3">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <div className="d-flex align-items-center">
                                {/* <i className="fas fa-home"></i> */}
                                {/* <img width={'200px'} src="/img/references/logo.jpeg" />  */}
                                <span className="ms-2 text-center header-text">
                                    Oztopcular
                                    <br />
                                    Hafriyat
                                </span>
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Anasayfa</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">Hakkımızda</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Hizmetlerimiz <i className="fas fa-chevron-down"></i></Link>
                                    <ul className="sub-ul">
                                        <li><Link to="/arac-parkuru">Araç Parkuru</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">İletişim</Link>
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