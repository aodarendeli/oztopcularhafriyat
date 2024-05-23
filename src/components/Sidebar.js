const Sidebar = () => {
    return (
        <div className="col-lg-4">
            <div className="right-sidebar">
                <div className="widget">
                    <div className="widget-content">
                        <input type="text" className="widget-search-inp" placeholder="Search" />
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">Öztopçular Hafriyat</p>
                    <div className="widget-content">
                        <ul className="category-ul">
                            <li>İnşaat</li>
                            <li>Gayrimenkul</li>
                            <li>Akaryakıt</li>
                            <li>Nakliyat</li>
                            <li>Beton</li>
                        </ul>
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">İnşaat</p>
                    <div className="widget-content">
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">Gayrimenkul</p>
                    <div className="widget-content">
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">Beton</p>
                    <div className="widget-content">
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">Akaryakıt</p>
                    <div className="widget-content">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar