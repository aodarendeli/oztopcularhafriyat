import BlogItem from "./BlogItem"
import { useTranslation } from "react-i18next";


const Blog = () => {
    const { t } = useTranslation();
    return (
        <section className="blog">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Blog</h1>
                            <h2 className="page-description">Blog</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <BlogItem date={"24:05:2024"} command={0} text={t('oztopcular')} img="https://cdn.pixabay.com/photo/2016/11/29/04/15/digger-1867268_1280.jpg" title={t('building')} textdetail={t('ozex1')} link="blog-1" />
                        <BlogItem date={"24:05:2024"} command={0} text={t('yakit')} img="https://cdn.pixabay.com/photo/2016/11/21/16/37/loader-1846346_1280.jpg" title={t('yakit')} textdetail={t('ozex2')} link="blog-1" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog