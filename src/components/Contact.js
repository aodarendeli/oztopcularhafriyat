/* eslint-disable */
import React, { useState } from "react"
import { useTranslation } from "react-i18next";

const Contact = () => {
    const [val, setVal] = useState("");
    const handleChange = (e) => {
        setVal(e.target.value);
    }
    const { t } = useTranslation();

    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.356936327154!2d28.818248699999998!3d41.01744629999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa48b7bd17cab%3A0x6ef441b02f1b7e5f!2sBeyaz%20Rezidans!5e0!3m2!1str!2str!4v1716404016886!5m2!1str!2str" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    return (
        <section className="contact">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">{t('contact')}</h1>
                            <h2 className="page-description">{t('contact')}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-envelope mb-3"></i>
                                        <h5>Mail</h5>
                                        <h6>info@oztopcularhafriyat.com.tr</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-map-marker-alt mb-3"></i>
                                        <h5>{t('adres')}</h5>
                                        <h6>Yenibosna Merkez Mah. 29 Ekim Caddesi No:43 D:40 Beyaz Residence Bahçelievler</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-phone-alt mb-3"></i>
                                        <h5>{t('tel')}</h5>
                                        <h6>0212 462 86 30</h6>
                                        <h6>0212 436 01 68</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 mb-5 w-100" dangerouslySetInnerHTML={{ __html: iframe }}>
                        </div>
                        <div className="col-lg-12">
                            <div className="row mt-5">
                                <div className="col-lg-6">
                                    <label>{t('ad')}</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-6">
                                    <label>{t('tel')}</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-12">
                                    <label>{t('subject')}</label>
                                    <input onChange={handleChange} type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-12">
                                    <label>{t('mesaj')}</label>
                                    <textarea type="text" className="ta-contact" rows="4"></textarea>
                                </div>
                                <div className="col-lg-12">
                                    <button className="btn-contact" disabled={val && val ? false : true} data-toggle="modal" data-target="#exampleModal">{t('gönder')}</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Oztopcular Hafriyat</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Mailiniz başarıyla gönderilmiştir...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact