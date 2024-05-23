import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Sidebar from "./Sidebar";
import blog from './blog.json'

const BlogDetail = () => {
    const location = useLocation();
    const val = blog.filter(item => item.link === location.pathname.split('/')[2])[0];
    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blog-detail">
                        <img className="w-100" src={val.img} alt="product" />
                        <span className="blog-detail-category">{val.title}</span>
                        <h1 className="blog-detail-title">{val.title}</h1>
                        <span className="blog-detail-date">{val.date}</span>
                        <p className="blog-detail-content">
                            {val.textdetail}
                        </p>
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    )
}
export default BlogDetail;