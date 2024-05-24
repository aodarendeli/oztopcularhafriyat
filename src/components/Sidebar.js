import { useTranslation } from "react-i18next";

const Sidebar = () => {
    const { t } = useTranslation();

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
                            <li>{t('building')}</li>
                            <li>{t('gayrimenkul')}</li>
                            <li>{t('yakit')}</li>
                            <li>{t('nakliyat')}</li>
                            <li>{t('beton')}</li>
                        </ul>
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">{t('building')}</p>
                    <div className="widget-content">
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">{t('gayrimenkul')}</p>
                    <div className="widget-content">
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">{t('beton')}</p>
                    <div className="widget-content">
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">{t('yakit')}</p>
                    <div className="widget-content">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar