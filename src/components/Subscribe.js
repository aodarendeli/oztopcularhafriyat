import { useState } from "react";
import { useTranslation } from "react-i18next";

const Subscribe = () => {
    const [val, setVal] = useState("");
    const handleChange = (e) => {
        setVal(e.target.value);
    }
    const { t } = useTranslation();

    return (
        <>
            <section className="section-subscribe pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="title">{t('merak')}</p>
                            <span className="sbs-description">{t('mail')}</span>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center justify-content-between w-100 h-100">
                                <div className="row w-100 m-0">
                                    <div className="col-lg-9">
                                        <input onChange={handleChange} type="text" className="w-100 sbs-area-inp" />
                                    </div>
                                    <div className="col-lg-3 d-flex align-items-center justify-content-between ">
                                        <input type="submit" className="w-100 h-100 btn btn-dark" disabled={val && val ? false : true} value={t('gönder')} data-toggle="modal" data-target="#exampleModal" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* {show && ( */}
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
                            {t('mailsuc')}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">{t('close')}</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    )
}

export default Subscribe