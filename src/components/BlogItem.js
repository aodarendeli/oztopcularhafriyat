import { Link } from "react-router-dom"
import blog from './blog.json'

const BlogItem = ({ title, link, item }) => {
    console.log(item);
    return (
        <div className="col-lg-4">
            <div className="blog-item">
                <div className="blog-img">
                    <img src={item.img} alt="product" className="w-100" />
                </div>
                <div className="blog-content">
                    <h2 className="blog-title"><Link to={`/blog/${item.link}`}>{item.title}</Link></h2>
                    <div className="blog-info">
                        <div className="blog-info-item"><i className="far fa-calendar-alt "></i><span>{item.date}</span></div>
                        <div className="blog-info-item"><i className="far fa-comments"></i><span>{item.command}</span></div>
                    </div>
                    <div className="blog-text">
                        {item.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogItem