import { Link } from "react-router-dom/cjs/react-router-dom.min"

const TeamItem = ({ title, desc, img }) => {
    return (
        <div className="col-lg-4">
            <div className="team">
                <div className="team-img">
                    <img src={img} alt="team" />
                </div>
                <div className="team-info">
                    <h5 className="team-name">{title}</h5>
                    <h6 className="team-position">{desc}</h6>
                    <div className="social-links">
                        <div className="social-item">
                            <a href="https://www.instagram.com/oztopcularhafriyat/?igsh=MXhrbGg4bWpnano4YQ%3D%3D"> <i className="fab fa-facebook"></i>
                            </a></div>
                        <div className="social-item">
                            <a href="https://www.instagram.com/oztopcularhafriyat/?igsh=MXhrbGg4bWpnano4YQ%3D%3D"> <i className="fab fa-twitter"></i>
                            </a></div>
                        <div className="social-item">
                            <a href="https://www.instagram.com/oztopcularhafriyat/?igsh=MXhrbGg4bWpnano4YQ%3D%3D"> <i className="fab fa-instagram"></i>
                            </a></div>
                        <div className="social-item">
                            <a href="https://www.instagram.com/oztopcularhafriyat/?igsh=MXhrbGg4bWpnano4YQ%3D%3D"> <i className="fab fa-linkedin"></i>
                            </a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamItem