// import React from 'react';

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';

const Slider = () => {
    const slides = [
        // { name: "", location: "" },
        { name: "John", location: "New York" },
        { name: "Emily", location: "London" },
        { name: "David", location: "Sydney" },
        { name: "David2", location: "Sydney2" },
        { name: "David3", location: "Sydney3" },
        { name: "David4", location: "Sydney4" },
        { name: "David5", location: "Sydney5" },
    ]
    const [activeIndexNo, setactiveIndexNo] = useState(0);
    const [swiper, setSwiper] = useState(null);

    // const prevNext = useSwiper();

    const slidePrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };

    const slideNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    return (


        <div className='grid grid-cols-2 bg-green-200 w-10/12 mx-auto' >
            <div className="first-div w-4/12 bg-slate-200">
                {
                    slides[activeIndexNo].location
                }

            </div>
            <div className="second-div w-8/12 bg-slate-300 p-20">

                {/* <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={(m) => {
                        console.log(m.activeIndex)
                        setactiveIndexNo(m.activeIndex)

                    }}
                > */}
                <Swiper
                    slidesPerView={2}
                    rewind={true}
                    // navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    onSwiper={setSwiper}
                    onSlideChange={(m) => {
                        console.log(m.activeIndex)
                        setactiveIndexNo(m.activeIndex)

                    }}
                >
                    {
                        slides.map((s, index) => <SwiperSlide key={index} > {s.name} </SwiperSlide>)
                    }


                </Swiper>

                <div className="button flex mt-10">
                    <button className='me-2' onClick={() => slidePrev()} >pp</button>
                    <button onClick={() => slideNext()}>nn</button>
                </div>

            </div>


        </div>
    );
};

export default Slider;