import React, { Component } from "react";
import Slider from "react-slick";
import Title from "./Title"
import BestFlatItem from "./BestFlatItem/BestFlatItem"
import BestFlatItem2 from "./BestFlatItem/BestFlatItem2"
import BestFlatItem3 from "./BestFlatItem/BestFlatItem3"
import BestFlatItem4 from "./BestFlatItem/BestFlatItem4"

export default class BestFlatList extends Component {
    render() {
        const title = {
            text: "Faaliyet Alanları",
            description: "Öztopcular Hafriyat Olarak"
        }
        const settings = {
            infinite: true,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoPlay: true,
            arrows: false,
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
                                <BestFlatItem flatState="İnşaat"  />
                                <BestFlatItem2 flatState="Enerji" />
                                <BestFlatItem3 flatState="Akaryakıt"  />
                                <BestFlatItem4 flatState="Araç Parkuru"  />
                                <BestFlatItem flatState="İnşaat"  />
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}