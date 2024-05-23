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
                        <div className="social-item"><i className="fab fa-facebook"></i></div>
                        <div className="social-item"><i className="fab fa-twitter"></i></div>
                        <div className="social-item"><i className="fab fa-instagram"></i></div>
                        <div className="social-item"><i className="fab fa-linkedin"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamItem