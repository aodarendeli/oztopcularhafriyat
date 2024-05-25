import Slider from "react-slick";
import Title from "./Title"
import ReferenceItem from "./ReferenceItem/ReferenceItem"
import ReferenceItem2 from "./ReferenceItem/ReferenceItem2"
import ReferenceItem3 from "./ReferenceItem/ReferenceItem3"
import ReferenceItem4 from "./ReferenceItem/ReferenceItem4"
import ReferenceItem5 from "./ReferenceItem/ReferenceItem5"
import { useTranslation } from "react-i18next";



const References = () => {
    const { t } = useTranslation();

    const title = {
        text: t('reference'),
        description: t('sektör')
    }
    const settings = {
        cssEase: "linear",
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        
        slidesToScroll: 1,
        autoPlay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };
    return (
        <section className="section-references">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    <div className="col-lg-12">
                        <Slider {...settings}>
                            <ReferenceItem />
                            <ReferenceItem2 />
                            <ReferenceItem3 />
                            <ReferenceItem4 />
                            <ReferenceItem5 />
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default References;