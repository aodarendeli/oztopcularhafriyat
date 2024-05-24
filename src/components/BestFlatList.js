import React, { Component } from "react";
import Slider from "react-slick";
import Title from "./Title"
import BestFlatItem from "./BestFlatItem/BestFlatItem"
import BestFlatItem2 from "./BestFlatItem/BestFlatItem2"
import BestFlatItem3 from "./BestFlatItem/BestFlatItem3"
import BestFlatItem4 from "./BestFlatItem/BestFlatItem4"
import { withTranslation } from "react-i18next";
class BestFlatList extends Component {

    render() {
        const { t } = this.props;
        const title = {
            text: t('faaliyet'),
            description: t('oztopcular')
        }
        const settings = {
            infinite: true,
            // speed: 3000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            cssEase: "linear",
            // autoplaySpeed: 3000,
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
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (

            <section className="section-best-estate">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={title.text} description={title.description} />
                            <Slider {...settings}>
                                <BestFlatItem flatState="İnşaat" />
                                <BestFlatItem2 flatState="Enerji" />
                                <BestFlatItem3 flatState="Akaryakıt" />
                                <BestFlatItem4 flatState="Araç Parkuru" />
                                <BestFlatItem flatState="İnşaat" />
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default withTranslation()(BestFlatList);
