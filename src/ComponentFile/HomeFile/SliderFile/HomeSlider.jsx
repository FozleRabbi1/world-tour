import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useState } from "react";
import '../homeStyle.css';

const HomeSlider = ({ datas }) => {


    const [activeIndexNo, setactiveIndexNo] = useState(0);
    const [swiper, setSwiper] = useState(null);
    const slidePrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };
    console.log(datas[activeIndexNo])

    const slideNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    // console.log(activeIndexNo)
    return (
        <div className="">

            <div className="backGroundImage  relative ">
                    <img className="relative transition duration-700" src={`${datas[activeIndexNo]?.locationImage}`} alt="" />

                <div className="img-div absolute">
                </div>

            </div>

            <div className="content absolute top-36 left-0 grid grid-cols-2 gap-4">
                <div className="info-section mt-16 ms-28 text-white">
                   <h2 className="  text-5xl font-bold">{datas[activeIndexNo]?.location}</h2>
                   <p className="mt-3"> {datas[activeIndexNo]?.roomDescription} {datas[activeIndexNo]?.roomDescription} </p>
                   <button className="bg-red-200 text-black py-1 px-4 mt-4 rounded-md"> Booking </button>

                </div>

                <div className="slider-section">
                    <div className="slider-div  mt-16 h-64">
                        <Swiper
                            slidesPerView={3}
                            centeredSlides={true}
                            spaceBetween={30}
                            grabCursor={true}
                            onSwiper={setSwiper}
                            pagination={{
                                clickable: true,
                            }}
                            onSlideChange={(e) => setactiveIndexNo(e.activeIndex)}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                datas.map((d, index) => <SwiperSlide key={index} >
                                    <img className=" w-60 h-60" src={d.locationImage} alt="" />
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </div>

                    <div className="button flex mt-10 z-40 text-white">
                        <button className='me-2 bg-red-100 text-black py-1 px-2 rounded-md' onClick={() => slidePrev()} > Prev </button>
                        <button className="bg-red-100 text-black py-1 px-2 rounded-md" onClick={() => slideNext()}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;