import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Faaliyet = () => {
    const { t } = useTranslation();

    return (
        <section className="section-best-estate bg-white" style={{paddingTop: '10px'}}>
            <div class="container">
                <div class="row">
                    <h2 className="text-center">{t('hafriyat')}</h2>
                    <div class="col-md-4">
                        <div class="iconbox iconbox-whyus style5">
                            <div class="iconbox-icon">
                                <i class="fa fa-home"></i>
                            </div>
                            <div class="iconbox-content">
                                <h5 class="heading">
                                    <span>{t('building')}</span>
                                </h5>
                                <p class="sub-heading">{t('new1')}</p>
                                <Link to="/iletisim">{t('contact')}</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="iconbox iconbox-whyus style5 ">
                            <div class="iconbox-icon">
                                <i className="fa fa-radiation"></i>
                            </div>
                            <div class="iconbox-content">
                                <h5 class="heading">
                                    <span>{t('energy')}</span>
                                </h5>
                                <p class="sub-heading">{t('new2')}</p>
                                <Link to="/iletisim">{t('contact')}</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="iconbox iconbox-whyus style5">
                            <div class="iconbox-icon">
                                <i class="fa fa-gas-pump"></i>
                            </div>
                            <div class="iconbox-content">
                                <h5 class="heading">
                                    <span>{t('yakit')}</span>
                                </h5>
                                <p class="sub-heading">{t('oz3')}</p>
                                <Link to="/iletisim">{t('contact')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}


export default Faaliyet;