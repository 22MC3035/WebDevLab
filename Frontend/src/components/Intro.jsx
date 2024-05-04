import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function Intro() {
    const [introArticles, setIntroArticles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/article")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setIntroArticles(data);
            })
            .catch(error => {
                console.error('There was a problem fetching the data:', error);
            });
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 0,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="font-semibold text-xl pb-2">Intro stuff for you</h1>
                    <p>
                        See these articles before visiting the site. It's fun to read these intro articles. Hope you find these three articles and the content of our website interesting and enjoy going through it.
                    </p>
                </div>
            </div>
            <div className="ml-32">
                <Slider {...settings}>
                    {introArticles.map((article, index) => (
                        <Cards key={index} article={article} />
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Intro;

