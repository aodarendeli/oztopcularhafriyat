import { Link } from "react-router-dom"

const BlogItem = ({ title, img, item, date, command, link, text }) => {
    console.log(item);
    return (
        <div className="col-lg-4">
            <div className="blog-item">
                <div className="blog-img">
                    <img src={img} alt="product" className="w-100" />
                </div>
                <div className="blog-content">
                    <h2 className="blog-title"><Link to={`/blog/${link}`}>{title}
                    </Link></h2>
                    <div className="blog-info">
                        <div className="blog-info-item"><i className="far fa-calendar-alt "></i><span>{date}</span></div>
                        <div className="blog-info-item"><i className="far fa-comments"></i><span>{command}</span></div>
                    </div>
                    <div className="blog-text">
                        {text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogItem