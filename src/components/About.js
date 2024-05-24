import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="about">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">{t('about')}</h1>
                            <h2 className="page-description">Oztopcular Hafriyat</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/product1.jpeg" alt="product" className="w-100" />
                        </div>
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="title">
                                    Öztopçular Hafriyat
                                </div>
                                <div className="about-text">
                                    {t('abouts')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About